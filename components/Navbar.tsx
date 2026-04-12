import { ModeToggle } from "./ModeToggle"
import { Bell, Settings } from "lucide-react"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <div className='h-16 shrink-0 flex items-center justify-between px-4 '>
      <div className='flex items-center gap-4 md:gap-48'>
        <h1 className="text-2xl  font-bold font-['Space_Grotesk'] bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
          CineNoir
        </h1>
      </div>
      <div className='flex items-center gap-2'>
        <Button variant={"ghost"} size={"icon"}>
          <Bell className='size-6 ' />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <Settings className='size-6 ' />
        </Button>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
