import {NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";

export async function GET(){
    const users = await prisma.user.findMany();

  return NextResponse.json(users);
}
export function POST(){

}
export function PUT(){

}
export function DELETE(){

}
export function PATCH(){

}
