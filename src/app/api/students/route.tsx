import { NextResponse } from "next/server"
export const config = {}

export async function GET() {
    return NextResponse.json({
        "data": "Unavailable at the moment"
    })
}