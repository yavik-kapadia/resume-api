"use client"

import { Image, skeleton } from "@nextui-org/react"

export function Logo({ width, height }) {
  return (
    <>
      <Image src="/logo.svg" width={width} height={height} alt="logo" />
    </>
  )
}
export default Logo
