"use client";
import { useStore } from "./store/plates";
import Link from "next/link";
export default function Home() {
  const plates = useStore((state) => state.plates);
  const increasePlate = useStore((state) => state.increasePlates);
  const update = useStore((state) => state.updatePlate);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{plates} around here...</h1>
      <button onClick={increasePlate}>increase plates</button>
      <button onClick={() => update(255)}>update Plates</button>
      <Link href="/home">home</Link>
    </main>
  );
}
