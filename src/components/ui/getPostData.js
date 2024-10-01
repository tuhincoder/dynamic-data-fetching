export const getPostData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = res.json()
    return data
}