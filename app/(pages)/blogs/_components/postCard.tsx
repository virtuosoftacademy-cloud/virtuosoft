import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "./index"

interface PostCardProps {
    post: BlogPost;
}

function PostCard({post}: PostCardProps) {
    const {title,Src,category,date,excerpt,slug} = post
    return (
        <>
            <Link href={`/blogs/${slug}`}>
                <Card className="group hover:shadow-lg pt-0 transition-all duration-300 cursor-pointer h-full">
                    <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                            src={Src}
                            alt={title}
                            width={400}
                            height={400}
                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                            <h3 className="bg-primary tracking-wider text-accent px-3 py-1 rounded-full text-sm font-medium">
                                {category}
                            </h3>
                        </div>
                    </div>

                    <CardHeader className={'-space-y-0.5!'}>
                        <div className="flex items-center space-x-4 text-sm text-slate-500 mb-2">
                            <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{date}</span>
                            </div>
                            {/* <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{readTime}</span>
                            </div> */}
                        </div>
                        <CardTitle className="text-lg font-extrabold group-hover:text-primary transition-colors leading-5">
                            {title}
                        </CardTitle>
                    </CardHeader>

                    <CardContent className={'-mt-2'}>
                        <p className="text-slate-600 text-sm">
                            {excerpt}
                        </p>
                    </CardContent>
                </Card>
            </Link>
        </>
    )
}

export default PostCard
