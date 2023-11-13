"use client"

import { Suspense } from "react"

import { CardsGenerator } from "@/components/cards_generator"
import { Logo } from "@/components/logo"

export function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-6xl font-bold">Hello World</h1>
      <Logo width={400} height={400} />
      <div>
        <h3 className="py-3 text-center text-6xl font-bold">Education</h3>
        <Suspense fallback={<p>Loading feed...</p>}>
          <CardsGenerator />
        </Suspense>
      </div>
    </div>
  )
}

export default Page
