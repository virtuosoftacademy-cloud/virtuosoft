'use client'

import { useState, useRef, Suspense, useEffect, type FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import { X, ChevronDown, Video, AlertCircle, GitBranch,  } from "lucide-react"
import Captcha from './Captcha'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const DEPARTMENTS = ["AI", "Engineering", "Finance", "Sales", "Marketing", "Design (UIUX)", "Administration", "IT Services", "Data Science"] as const;
const JOINING_OPTIONS = ["Immediate", "1 Month", "2 Months", "As soon as possible"] as const;
const SALUTATIONS = ["Mr.", "Mrs.", "Ms."] as const;

type Department = typeof DEPARTMENTS[number];
type JoiningOption = typeof JOINING_OPTIONS[number];
type Salutation = typeof SALUTATIONS[number];

interface ContactFormData {
    salutation: Salutation | '';
    fullName: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    city: string;
    address: string;
    desiredJoining: JoiningOption | '';
    portfolio: string;
    loomLink: string;
    resume: File | null;
    applyingFor: string;
}

interface ContactFormErrors {
    salutation?: string;
    fullName?: string;
    phone?: string;
    city?: string;
    address?: string;
    desiredJoining?: string;
    depts?: string;
    resume?: string;
    loomLink?: string;
    email?: string;
    linkedin?: string;
}

interface ApplicationPayload {
    salutation: string;
    fullName: string;
    email: string;
    phone: string;
    linkedin: string;
    portfolio: string;
    address: string;
    selectedDepts: string;
    city: string;
    desiredJoining: string;
    loomLink: string;
    applyingFor: string;
    resumeData: string | null;
    resumeName: string;
}

function FormFields() {
    const searchParams = useSearchParams();
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const roleFromUrl = searchParams.get('role');

    const [errors, setErrors] = useState<ContactFormErrors>({});

    const [formData, setFormData] = useState<ContactFormData>({
        salutation: '', fullName: '', email: '', phone: '', linkedin: '', github: '', city: '',
        address: '', desiredJoining: '', portfolio: '', loomLink: '',
        resume: null, applyingFor: roleFromUrl || ""
    });

    const salutationRef = useRef<HTMLDivElement>(null);
    const deptDropdownRef = useRef<HTMLDivElement>(null);
    const joiningDropdownRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [isSalutationOpen, setIsSalutationOpen] = useState(false);
    const [isDeptOpen, setIsDeptOpen] = useState(false);
    const [isJoiningOpen, setIsJoiningOpen] = useState(false);
    const [selectedDepts, setSelectedDepts] = useState<Department[]>([]);

    const validate = (): boolean => {
        const newErrors: ContactFormErrors = {};
        if (!formData.salutation) newErrors.salutation = "Required";
        if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.desiredJoining) newErrors.desiredJoining = "Select joining date";
        if (selectedDepts.length === 0) newErrors.depts = "Select at least one area";
        if (!formData.resume) newErrors.resume = "Please upload your resume";
        // Loom Link Validation (Ab mandatory hai)
if (!formData.loomLink || !formData.loomLink.trim()) {
    newErrors.loomLink = "Loom video link is required";
} else if (!formData.loomLink.includes('loom.com')) {
    newErrors.loomLink = "Must be a valid Loom link";
}

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email address";
        if (!formData.linkedin.includes('linkedin.com')) newErrors.linkedin = "Enter a valid LinkedIn URL";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const toggleDepartment = (dept: Department) => {
        setSelectedDepts(prev =>
            prev.includes(dept) ? prev.filter(d => d !== dept) : [...prev, dept]
        );
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            const scriptURL = 'https://script.google.com/macros/s/AKfycbwq-PZjWdHsWKq6MkLx84KXq2D3KoXn5As0yyocFlew1RzmwFpYUA2iowqwNql30vUQ/exec';

            const toBase64 = (file: File): Promise<string> => new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result as string);
                reader.onerror = error => reject(error);
            });

            try {
                let resumeBase64: string | null = null;
                if (formData.resume) {
                    resumeBase64 = await toBase64(formData.resume);
                }

                const payload: ApplicationPayload = {
                    salutation: formData.salutation,
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    linkedin: formData.linkedin,
                    portfolio: formData.github, 
                    address: formData.address,
                    selectedDepts: selectedDepts.join(", "),
                    city: formData.city,
                    desiredJoining: formData.desiredJoining,
                    loomLink: formData.loomLink,
                    applyingFor: roleFromUrl ? roleFromUrl.replace(/-/g, ' ') : "",
                    resumeData: resumeBase64,
                    resumeName: formData.resume ? formData.resume.name : "candidate_resume.pdf"
                };

                await fetch(scriptURL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });

                alert("Application Sent Successfully!");
                window.location.reload();
            } catch (error: unknown) {
                console.error("Submission Error!", error);
                const message = error instanceof Error ? error.message : String(error);
                alert("Error: " + message);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as Node;
            if (salutationRef.current && !salutationRef.current.contains(target)) setIsSalutationOpen(false);
            if (deptDropdownRef.current && !deptDropdownRef.current.contains(target)) setIsDeptOpen(false);
            if (joiningDropdownRef.current && !joiningDropdownRef.current.contains(target)) setIsJoiningOpen(false);
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const labelStyle = "text-[12px] text-[#646d8c] font-medium block mb-1";
    const inputBase = "w-full py-2 bg-white outline-0 border rounded-md px-3 text-sm transition-all";
    const errorText = "text-[10px] text-red-500 mt-1 flex items-center gap-1 font-semibold";

    return (
        <div className="flex flex-col items-center justify-center bg-white pb-20 px-4">
            <div className="w-full max-w-4xl relative rounded-xl text-left bg-white p-8 md:p-12 shadow-[0_10px_25px_rgba(0,0,0,0.05)] overflow-visible border">
                <form className="space-y-8" onSubmit={handleSubmit}>

                    {roleFromUrl && (
                        <div className="mb-8">
                            <label className={labelStyle}>Applying For Position</label>
                            <input type="text" value={roleFromUrl.replace(/-/g, ' ')} readOnly className={cn(inputBase, "bg-slate-50 border-slate-200 text-black font-bold cursor-not-allowed")} />
                        </div>
                    )}

                    <div className="grid md:grid-cols-12 gap-6">
                        <div className="md:col-span-2 relative" ref={salutationRef}>
                            <label className={labelStyle}>Salutation*</label>
                            <div onClick={() => setIsSalutationOpen(!isSalutationOpen)} className={cn("min-h-[42px] border rounded-md p-1.5 flex items-center cursor-pointer", errors.salutation ? "border-red-500 bg-red-50" : "border-slate-300 bg-white")}>
                                <span className="text-sm ml-1 text-slate-700">{formData.salutation || "-None-"}</span>
                                <ChevronDown className="ml-auto size-4 text-slate-400" />
                            </div>
                            {isSalutationOpen && (
                                <div 
                                    className="absolute z-[100] w-full mt-1 bg-white border border-slate-200 rounded-md shadow-lg overflow-y-auto max-h-40"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {SALUTATIONS.map(sal => (
                                        <div key={sal} onClick={() => { setFormData({ ...formData, salutation: sal }); setIsSalutationOpen(false); }} className="px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer text-slate-700">{sal}</div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="md:col-span-5">
                            <label className={labelStyle}>Full Name*</label>
                            <input type="text" onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className={cn(inputBase, errors.fullName ? "border-red-500 bg-red-50" : "border-slate-300")} />
                            {errors.fullName && <span className={errorText}>{errors.fullName}</span>}
                        </div>

                        <div className="md:col-span-5">
                            <label className={labelStyle}>Phone Number*</label>
                            <div className="relative flex items-center">
                                <div className="absolute left-3 flex items-center gap-2 border-r border-slate-200 pr-2 h-5 pointer-events-none">
                                    {/* eslint-disable-next-line @next/next/no-img-element -- decorative flag icon, images.unoptimized is set so next/image adds no benefit here */}
                                    <img src="/pak.png" alt="PK" className="h-4 w-auto object-contain" />
                                    <span className="text-sm font-semibold text-slate-600">+92</span>
                                </div>
                                <input type="tel" placeholder="300 1234567" onChange={(e) => setFormData({ ...formData, phone: `+92${e.target.value}` })} className={cn(inputBase, "pl-20", errors.phone ? "border-red-500 bg-red-50" : "border-slate-300")} />
                            </div>
                            {errors.phone && <span className={errorText}>{errors.phone}</span>}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <label className={labelStyle}>Email*</label>
                            <input type="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={cn(inputBase, errors.email ? "border-red-500 bg-red-50" : "border-slate-300")} />
                        </div>
                        <div>
                            <label className={labelStyle}>LinkedIn Profile*</label>
                            <input type="text" onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })} className={cn(inputBase, errors.linkedin ? "border-red-500 bg-red-50" : "border-slate-300")} />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <label className={labelStyle}>GitHub Profile (Optional)</label>
                            <div className="relative">
                                <input type="text" placeholder="github.com/username" onChange={(e) => setFormData({ ...formData, github: e.target.value })} className={cn(inputBase, "pl-10", "border-slate-300")} />
                                <GitBranch className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                            </div>
                        </div>
                        <div>
                            <label className={labelStyle}>Permanent Address*</label>
                            <input type="text" onChange={(e) => setFormData({ ...formData, address: e.target.value })} className={cn(inputBase, errors.address ? "border-red-500 bg-red-50" : "border-slate-300")} />
                        </div>
                    </div>

                    <div className="relative" ref={deptDropdownRef}>
                        <label className={labelStyle}>Area of Expertise *</label>
                        <div onClick={() => setIsDeptOpen(!isDeptOpen)} className={cn("min-h-[42px] border rounded-md p-1.5 flex flex-wrap items-center gap-2 cursor-pointer", errors.depts ? "border-red-500 bg-red-50" : "border-slate-300 bg-white")}>
                            {selectedDepts.length === 0 && <span className="text-gray-400 text-xs ml-2">Select...</span>}
                            {selectedDepts.map(dept => (
                                <div key={dept} className="flex items-center gap-1.5 bg-[#eef2ff] border border-blue-100 text-[#3b82f6] px-3 py-1 rounded-full text-xs font-semibold">
                                    {dept} <X className="size-3" onClick={(e) => { e.stopPropagation(); toggleDepartment(dept); }} />
                                </div>
                            ))}
                            <ChevronDown className={cn("ml-auto mr-2 size-4 text-slate-400 transition-transform", isDeptOpen && "rotate-180")} />
                        </div>
                        {isDeptOpen && (
                            <div 
                                className="absolute z-[100] w-full mt-1 bg-white border border-blue-400 rounded-lg shadow-xl max-h-60 overflow-y-auto"
                                onClick={(e) => e.stopPropagation()}
                                onWheel={(e) => e.stopPropagation()}
                            >
                                {DEPARTMENTS.map(dept => (
                                    <div key={dept} onClick={() => toggleDepartment(dept)} className={cn("px-4 py-2.5 text-sm cursor-pointer", selectedDepts.includes(dept) ? 'bg-blue-50 text-blue-700 font-bold' : 'hover:bg-slate-50 text-slate-600')}>{dept}</div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <label className={labelStyle}>City*</label>
                            <input type="text" onChange={(e) => setFormData({ ...formData, city: e.target.value })} className={cn(inputBase, errors.city ? "border-red-500 bg-red-50" : "border-slate-300")} />
                        </div>
                        <div className="relative" ref={joiningDropdownRef}>
                            <label className={labelStyle}>Desired Joining*</label>
                            <div onClick={() => setIsJoiningOpen(!isJoiningOpen)} className={cn("min-h-[42px] border rounded-md p-1.5 flex items-center cursor-pointer", errors.desiredJoining ? "border-red-500 bg-red-50" : "border-slate-300 bg-white")}>
                                <span className="text-sm ml-2 text-slate-700">{formData.desiredJoining || "Select..."}</span>
                                <ChevronDown className={cn("ml-auto mr-2 size-4 text-slate-400 transition-transform", isJoiningOpen && "rotate-180")} />
                            </div>
                            {isJoiningOpen && (
                                <div 
                                    className="absolute z-[100] w-full mt-1 bg-white border border-blue-400 rounded-lg shadow-xl max-h-60 overflow-y-auto"
                                    onClick={(e) => e.stopPropagation()}
                                    onWheel={(e) => e.stopPropagation()}
                                >
                                    {JOINING_OPTIONS.map(option => (
                                        <div key={option} onClick={() => { setFormData({ ...formData, desiredJoining: option }); setIsJoiningOpen(false); }} className={cn("px-4 py-2.5 text-sm cursor-pointer", formData.desiredJoining === option ? 'bg-blue-50 text-blue-700 font-bold' : 'hover:bg-slate-50 text-slate-600')}>{option}</div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                   <div>
    <label className={labelStyle}>Why should we hire you? (Loom Video)*</label>
    <div className="relative">
        <input 
            type="url" 
            placeholder="Share a Loom Video Link" 
            onChange={(e) => setFormData({ ...formData, loomLink: e.target.value })} 
            className={cn(inputBase, "pl-10", errors.loomLink ? "border-red-500 bg-red-50" : "border-slate-300")} 
        />
        <Video className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
    </div>
    {/* Error message display logic */}
    {errors.loomLink && <span className={errorText}><AlertCircle size={10} /> {errors.loomLink}</span>}
</div>

                    <div className={cn("relative border-2 border-dashed rounded-xl p-8 text-center", errors.resume ? "border-red-500 bg-red-50" : "border-cyan-400 bg-cyan-50/30")}>
                        <input type="file" className="hidden" ref={fileInputRef} onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] ?? null })} accept=".pdf" />
                        <div onClick={() => fileInputRef.current?.click()} className="cursor-pointer">
                            <p className="text-blue-600 font-bold mb-1">Upload Your Resume or Drag & Drop</p>
                            {formData.resume && <p className="mt-2 text-primary font-bold italic">{formData.resume.name}</p>}
                        </div>
                    </div>

                    <Captcha onVerify={(status) => setIsCaptchaVerified(status)} />

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-slate-100">
                        <Button type="submit" size="lg" disabled={!isCaptchaVerified || !isAgreed || isSubmitting} className="active:scale-95 transition-all px-12">
                            {isSubmitting ? "Sending..." : "Send Application"}
                        </Button>
                        <label className="flex items-center gap-2 text-xs text-slate-500 cursor-pointer">
                            <input type="checkbox" checked={isAgreed} onChange={(e) => setIsAgreed(e.target.checked)} className="accent-blue-600 size-4" />
                            <span>I agree to the <span className="text-blue-600">Privacy Policy</span></span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default function ContactForm() {
    return (
        <Suspense fallback={<div className="h-screen flex items-center justify-center font-mono text-blue-600">Loading Application...</div>}>
            <FormFields />
        </Suspense>
    )
}