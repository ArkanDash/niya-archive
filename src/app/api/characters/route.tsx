import { NextResponse } from "next/server"
import characterData from "@/data/Characters.json"
export const revalidate = 60 * 60 * 1000

export async function GET() {
    return NextResponse.json(characterData)
}