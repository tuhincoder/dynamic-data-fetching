import { getSinglePostData } from "@/components/ui/getSinglePost";


// const getDetailsPost = async (id) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     const data = await res.json()
//     console.log('detals page', data);
//     return data;
// }


const PostDetails = async ({ params }) => {
    // console.log(params.id);
    // const { title, body } = await getDetailsPost(params.id)

    const { title, body } = await getSinglePostData(params.id)
    // console.log('get single post ddata', singlePost);
    return (
        <div>
            <h2>post details:</h2>
            <h2>{title}</h2>
            <h2>{body}</h2>
        </div>
    );
};

export default PostDetails;