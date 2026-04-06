import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { ModeToggle } from "./ModeToggle"
import { Button } from "./ui/button"
import { Clapperboard } from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar className='border-r-2 border-primary'>
      <SidebarHeader className='  '>
        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='icon' className='w-12 h-12 rounded-full bg-linear-to-r from-primary to-secondary text-background'>
            <Clapperboard className=' size-8 ' />
          </Button>
          <div className='flex flex-col items-start justify-center'>
            <h1 className="text-2xl  font-bold font-['Space_Grotesk'] bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Neon Noir
            </h1>
            <p className="text-sm  font-bold font-['Space_Grotesk'] bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-widest">
              Private Screening
            </p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className='flex items-center justify-center'>
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}
