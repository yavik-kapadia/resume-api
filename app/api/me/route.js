import { NextResponse } from "next/server"

import prisma from "@/lib/prisma"

// Assuming you're using Next.js or a similar framework that provides req and res objects.
export async function GET(req, res) {
  const user = await prisma.User.findOne({
    where: {
      id: 1,
    },
  })

  return NextResponse.json({ Qualifications: qualifications })
}
