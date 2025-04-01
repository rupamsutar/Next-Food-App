import Link from "next/link";

export default function BlogPost() {
    return (
        <main>
            <h1>
                The Different Blogs are should below
            </h1>
            <Link href="/blog/post-1">Post 1</Link><br />
            <Link href="/blog/post-2">Post 2</Link>
        </main>
    )
}