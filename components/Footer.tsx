import { Send, Share2, Heart } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className='w-full bg-background border-t border-border mt-auto pt-16 pb-8 px-6 md:px-12'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-8'>
        <div className='flex flex-col gap-4 max-w-sm'>
          <h2 className="text-2xl font-bold font-['Space_Grotesk'] bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            CineNoir
          </h2>
          <p className='text-muted-foreground text-sm xl:text-base leading-relaxed'>
            The ultimate destination for the connoisseur of atmosphere, light,
            and indie cinema. Curating the dark since 2024.
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-2 gap-12 lg:gap-24'>
          <div className='flex flex-col gap-3'>
            <h3 className='font-bold text-foreground mb-2 tracking-wider text-sm uppercase'>
              Platform
            </h3>
            <Link
              href='#'
              className='text-muted-foreground hover:text-primary transition-colors text-sm'
            >
              Browse All
            </Link>
            <Link
              href='#'
              className='text-muted-foreground hover:text-primary transition-colors text-sm'
            >
              Categories
            </Link>
            <Link
              href='#'
              className='text-muted-foreground hover:text-primary transition-colors text-sm'
            >
              Collections
            </Link>
            <Link
              href='#'
              className='text-muted-foreground hover:text-primary transition-colors text-sm'
            >
              News
            </Link>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className='font-bold text-foreground mb-2 tracking-wider text-sm uppercase'>
              Support
            </h3>
            <Link
              href='#'
              className='text-muted-foreground hover:text-primary transition-colors text-sm'
            >
              Help Center
            </Link>
            <Link
              href='#'
              className='text-muted-foreground hover:text-primary transition-colors text-sm'
            >
              Account Settings
            </Link>
            <Link
              href='#'
              className='text-muted-foreground hover:text-primary transition-colors text-sm'
            >
              Terms of Service
            </Link>
            <Link
              href='#'
              className='text-muted-foreground hover:text-primary transition-colors text-sm'
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full md:w-auto'>
          <h3 className='font-bold text-foreground mb-2 tracking-wider text-sm uppercase'>
            Newsletter
          </h3>
          <div className='flex relative items-center w-full md:w-[300px]'>
            <Input
              placeholder='Your email'
              className='pr-12 pl-5 bg-card/60 backdrop-blur-md border-transparent rounded-full h-12 focus-visible:ring-1 focus-visible:ring-primary text-sm shadow-sm'
            />
            <Button
              size='icon'
              className='absolute right-1 w-10 h-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm group'
            >
              <Send className='w-4 h-4 ml-[-2px] group-hover:block transition-all group-hover:translate-x-0.5' />
            </Button>
          </div>
          <div className='flex gap-3 mt-2'>
            <Button
              variant='outline'
              size='icon'
              className='rounded-full w-10 h-10 bg-card/60 border-transparent hover:bg-card/80 text-muted-foreground transition-all hover:text-foreground'
            >
              <Share2 className='w-4 h-4' />
            </Button>
            <Button
              variant='outline'
              size='icon'
              className='rounded-full w-10 h-10 bg-card/60 border-transparent hover:bg-card/80 text-muted-foreground transition-all hover:text-foreground hover:scale-105'
            >
              <Heart className='w-4 h-4' />
            </Button>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto mt-16 pt-8 border-t border-border/30 text-center flex flex-col items-center'>
        <p className='text-[11px] text-muted-foreground/60 tracking-widest uppercase font-medium'>
          © 2026 CineNoir Studios. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
