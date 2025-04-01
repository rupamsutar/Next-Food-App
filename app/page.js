import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <div><Link href="about">About us</Link></div>
    </main>
  );
}
