import { getPhotoById } from "@/app/lib/photo-data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const PhotoId = params.id;
    const photo = getPhotoById(PhotoId);
    return NextResponse.json(photo);
}
