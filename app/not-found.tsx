import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex justify-center items-center flex-col h-screen">
            <div>
                <h4 className="text-4xl font-bold">404</h4>
                <h5>
                    Not Found
                </h5>
            </div>
            <div className="mt-4">
                <Button>
                    <Link href="/" >
                        Go back home
                    </Link>
                </Button>
            </div>
        </div>
    )
}
