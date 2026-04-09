import React from "react"
import { ModeToggle } from "./ModeToggle"
import { Input } from "./ui/input"
import { Bell, Search, Settings } from "lucide-react"
import { Button } from "./ui/button"

const Navbar = () => {``
  return (
    <div className="h-16 shrink-0 flex items-center justify-between px-4 ">
      <div className="flex items-center gap-4 md:gap-48">
      <h1 className="text-2xl  font-bold font-['Space_Grotesk'] bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
        CineNoir
      </h1>
      <div className="relative max-md:hidden">
        <Input placeholder="Search films, actors, directors..." className="w-36 md:w-96 text-lg md:text-xl h-10 pl-10 pr-2" />
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl"/>
      </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant={'ghost'} size={'icon'}><Bell className="size-6 "/></Button>
        <Button variant={'ghost'} size={'icon'}><Settings className="size-6 "/></Button>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
