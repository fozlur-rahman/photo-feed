import { getAllPhotos } from "@/app/lib/photo-data";
import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json(getAllPhotos());
}
