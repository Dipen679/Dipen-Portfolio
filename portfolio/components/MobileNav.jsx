"use client"

import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { usePathname } from "next/navigation"
import {  CiMenuFries } from "react-icons/ci"

const links =[
    {
        name: "Home",
        path: "/",
    },
    
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "Contact",
        path: "/contact",
    },
]


const MobileNav = () => {
    const pathname = usePathname()

  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className = "text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/* logo */}
            <div>
                Logo
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
