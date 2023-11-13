import { NextResponse } from "next/server"

import prisma from "@/lib/prisma"

// Assuming you're using Next.js or a similar framework that provides req and res objects.
export async function GET(req, res) {
  const qualifications = await prisma.Qualification.findMany({
    where: {
      category: "Work",
    },
  })

  return NextResponse.json({ Qualifications: qualifications })
}
