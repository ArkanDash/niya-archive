import Link from "next/link";
import characterData from "@/data/Characters.json"

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-auto m-4 p-4 bg-black bg-opacity-30 rounded-lg">
      <div className="font-bold text-white text-center text-6xl py-4">Niya Archive (Blue Archive API)</div>
      <div className="flex flex-col text-white text-2xl gap-2">
        <text className="text-white text-4xl">List of routes</text>
        <Link href="/api/characters" className="grid grid-cols-2 gap-y-2 justify-between hover:bg-slate-500 hover:bg-opacity-30 p-2 w-full rounded-md">
          <text>/api/characters</text>
          <text>Shows all character data</text>
        </Link>
        <Link href="/api/students" className="grid grid-cols-2 gap-y-2 justify-between hover:bg-slate-500 hover:bg-opacity-30 p-2 w-full rounded-md">
          <text>/api/students</text>
          <text>Shows all students data</text>
        </Link>
        <Link href="/api/clubs" className="grid grid-cols-2 gap-y-2 justify-between hover:bg-slate-500 hover:bg-opacity-30 p-2 w-full rounded-md">
          <text>/api/clubs</text>
          <text>Shows all clubs data</text>
        </Link>
      </div>
    </div>
  );
}
