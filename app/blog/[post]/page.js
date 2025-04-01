export default function BlogPostPage({params}) {
    console.log(params);
    return (
        <>
        <h1>
            This is the blog you want to see
        </h1>
        <p>{params.post}</p>
        </>
    )
}