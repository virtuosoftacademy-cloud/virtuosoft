'use client'

import { useState, useEffect, useCallback, useImperativeHandle, useRef, forwardRef, type ChangeEvent } from 'react'
import { RefreshCw } from "lucide-react"

export interface CaptchaProps {
    onVerify: (verified: boolean) => void;
}

export interface CaptchaHandle {
    refresh: () => void;
}

const Captcha = forwardRef<CaptchaHandle, CaptchaProps>(({ onVerify }, ref) => {
    const [captchaCode, setCaptchaCode] = useState("");
    const [userInput, setUserInput] = useState("");

    const onVerifyRef = useRef(onVerify);
    useEffect(() => {
        onVerifyRef.current = onVerify;
    }, [onVerify]);

    const generateCaptcha = useCallback(() => {
        const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setCaptchaCode(result);
        setUserInput("");
        onVerifyRef.current(false);
    }, []);

    useEffect(() => {
        generateCaptcha();
    }, [generateCaptcha]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setUserInput(val);
        // Case-insensitive verification
        onVerify(val.toLowerCase() === captchaCode.toLowerCase());
    };

    useImperativeHandle(ref, () => ({
        refresh: generateCaptcha
    }));

    return (
        <div className="pt-4 space-y-4">
            <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-slate-700  tracking-tight">Captcha</span>
                <button 
                    type="button" 
                    onClick={() => setUserInput("")} 
                    className="text-xs text-slate-300 hover:text-slate-500 transition-colors"
                >
                    Clear
                </button>
            </div>

            <div>
                <input 
                    type="text" 
                    placeholder="Type below image text" 
                    className="w-full py-2 bg-white outline-0 border border-slate-300 rounded-md px-3 text-sm focus:border-blue-500 transition-all"
                    value={userInput}
                    onChange={handleInputChange}
                />
            </div>

            <div className="flex items-center gap-4">
                <div className="bg-white border border-slate-200 rounded p-4 min-w-[150px] flex items-center justify-center select-none shadow-sm relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-2 left-0 w-full h-[1px] bg-red-500 rotate-12" />
                        <div className="absolute top-6 left-0 w-full h-[1px] bg-red-500 -rotate-12" />
                    </div>
                    <span className="text-2xl font-bold text-red-600 tracking-[0.4em] italic font-serif drop-shadow-sm">
                        {captchaCode}
                    </span>
                </div>
                
                <button 
                    type="button" 
                    onClick={generateCaptcha}
                    className="p-2 text-slate-400 hover:text-blue-600 hover:rotate-180 transition-all duration-500"
                    title="Refresh Captcha"
                >
                    <RefreshCw size={18} />
                </button>
            </div>
        </div>
    )
});

Captcha.displayName = "Captcha";
export default Captcha;