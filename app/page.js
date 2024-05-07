'use client'
import { useStore } from "./store/bear";
import Link from 'next/link';
export default function Home() {
  const bears = useStore((state) => state.bears)
  const increasePopulation = useStore((state) => state.increasePopulation)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{bears} around here...</h1>
      <button onClick={increasePopulation}>one up</button>
      <Link href="/home">home</Link>
    </main>
  );
}
