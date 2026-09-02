
import { redirect } from "next/navigation";
import { LoginForm } from "./_components/login-form";
import { auth } from "@/auth";

export const metadata = { title: "Sign in" };

export default async function LoginPage() {
    const session = await auth();
    if (session?.user?.role === "ADMIN") redirect("/admin");

    return (
        <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-4">
            <div className="w-full max-w-sm">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-semibold text-primary">
                        Admin
                    </h1>
                    <p className="mt-1 text-sm text-neutral-600">
                        SignIn
                    </p>
                </div>
                <LoginForm />
            </div>
        </main>
    );
}