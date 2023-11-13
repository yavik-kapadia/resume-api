"use client"

import React from "react"
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react"

import { Logo } from "@/components/logo"

export function Navi() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link href="/" color="foreground">
          <Logo width={50} height={50} />
        </Link>
        <p className="font-bold text-inherit">Yavik</p>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="https://blog.yavik.dev">
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Github
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Navi
