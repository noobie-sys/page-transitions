"use client";
import Inner from "@/components/Inner";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Inner >
      <main className="flex h-screen w-full bg-gray-100 text-black  items-center justify-center p-4 flex-col">
        <h1 className="text-[8vw] uppercase font-mono">Hello There, How are you</h1>
        <Link href={'/contact'} className="text-2xl uppercase font-[cursive]">Contact</Link>
      </main>
    </Inner>
  );
}
