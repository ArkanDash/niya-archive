import { NextResponse } from "next/server"
import characterData from "@/data/Characters.json"
export const config = {}

export async function GET() {
    return NextResponse.json(characterData)
}