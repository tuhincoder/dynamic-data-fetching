import { getPostData } from "@/components/ui/getPostData";
import Link from "next/link";


const postDataPage = async () => {
    const posts = await getPostData()
    // console.log(posts);
    return (
        <div className="p-5 gap-4">
            <h2>this is postdata{posts.length}</h2>
            <div className="gap-3">
                {
                    posts.slice(0, 10).map((post) => (
                        <div key={post.id} className="border p-10 gap-5">
                            <h2 className="text-2xl font-serif">{post.title}</h2>
                            <p>{post.body}</p>
                            <button className="bg-stone-600 p-3 text-white">
                                <Link href={`/posts/${post.id}`}>View review</Link>
                            </button>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default postDataPage;