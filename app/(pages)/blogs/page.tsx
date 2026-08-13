import React from 'react'
import PostCard from './_components/postCard'
import { blogPosts } from './_components'

function Blogs(): React.JSX.Element {
    return (
        <>
            <div className='mx-auto max-w-7xl px-8 py-14 md:py-20'>
                <h4 className='text-3xl md:text-5xl pb-4 md:pb-8 text-center'>Latest <strong>
                    <em>
                        Insights
                    </em>
                </strong> </h4>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4'>
                    {blogPosts.map((post) =>
                        <PostCard post={post} key={post.id} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Blogs
