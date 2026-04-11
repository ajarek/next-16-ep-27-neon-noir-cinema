"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { typesFilms } from "@/data/typesFilms"
import { cn } from "@/lib/utils"
import { Play } from "lucide-react"
import Image from "next/image"
import { nightThrills } from "@/data/nightThrills"
import { Card, CardContent, CardDescription,  CardHeader, CardTitle } from "@/components/ui/card"
import { sundayMorning } from "@/data/sundayMorning "

const DiscoverPage = () => {
  const [activeType, setActiveType] = useState("All")

  return (
    <div className='flex min-h-[calc(100vh-94px)] shrink-0 flex-col p-4 gap-4'>
      <div className='flex w-full flex-wrap items-start gap-4'>
        {typesFilms.map((type) => (
          <Button
            key={type.id}
            className={cn(
              "min-w-25 rounded-full border-none bg-popover text-white hover:bg-popover hover:text-primary",
              activeType === type.name &&
                "bg-primary dark:text-black hover:bg-primary/90 hover:text-black",
            )}
            onClick={() => setActiveType(type.name)}
          >
            {type.name}
          </Button>
        ))}
      </div>
      <div className='w-full relative group lg:h-125 h-100 overflow-hidden rounded-lg '>
        <div className=' relative w-full h-125 overflow-hidden '>
          <Image
            src='/hero-discover.png'
            alt='Hero'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className=' w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000'
          />
        </div>
        <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-transparent'></div>
        <div className='absolute bottom-12 md:left-12 left-4 flex flex-col w-[90%] gap-4 z-10'>
          <div className='flex items-center gap-2'>
            <Button
              size='lg'
              className='flex items-center gap-2 bg-popover border-none text-primary  hover:text-secondary hover:bg-popover cursor-pointer'
            >
              <span className='text-primary'>*</span>
              <span className='text-primary uppercase'>
                Spotlight Selection
              </span>
            </Button>
          </div>
          <h1 className="md:text-6xl text-2xl text-white font-bold font-['Space_Grotesk']">
            Curated <span className='text-secondary'>Collection</span>
          </h1>
          <p className="md:text-lg text-white text-sm md:w-125 w-75  font-bold font-['Space_Grotesk']">
            Experience the intersection of light and shadow with our hand-picked
            selection of atmospheric cinema. Masterpieces of mood and urban
            isolation.
          </p>
          <div className='w-full flex items-center justify-between gap-8 '>
            <div className='flex items-center gap-4'>
              <Button className=' h-12 text-xl md:px-8 px-4 bg-linear-to-r from-primary to-secondary cursor-pointer '>
                <Play />
                Watch Now
              </Button>
              <Button
                variant='outline'
                className=' h-12 text-xl md:px-8 px-4 cursor-pointer '
              >
                Collection Details
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col gap-1'>
        <h2 className="text-3xl  font-bold font-['Space_Grotesk']">
          Late Night Thrills
        </h2>
        <p className="text-black/80 dark:text-primary text-base md:w-125 w-75  font-bold font-['Space_Grotesk']">
          High-stakes tension for the midnight hour
        </p>
        <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-4'>
          {nightThrills.map((thrill) => (
            <Card key={thrill.id} className='w-full'>
                <CardHeader className='w-full h-100 relative'>
                    
              <Image
                src={thrill.image}
                alt={thrill.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover opacity-60 hover:opacity-100 transition-opacity duration-300'
              />
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-xl text-white hover:text-primary">{thrill.title}</CardTitle>
                   
                <div className="flex items-center gap-2 bg-transparent ">
                    <CardDescription className="text-primary">{thrill.productionYear}</CardDescription>
                    <CardDescription className="">*</CardDescription>
                    <CardDescription className="text-[#00DBE9]">{thrill.rating} Rating</CardDescription>
                </div>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className='w-full flex flex-col gap-1'>
        <h2 className="text-3xl  font-bold font-['Space_Grotesk']">
          Sunday Morning Vibes
        </h2>
        <p className="text-black/80 dark:text-primary text-base md:w-125 w-75  font-bold font-['Space_Grotesk']">
          Soft textures and slow-burning narratives
        </p>
        <div className='w-full grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4 mt-4'>
          {sundayMorning.map((thrill) => (
            <Card key={thrill.id} className='w-full'>
                <CardHeader className='w-full h-75 relative '>
                   
              <Image
                src={thrill.image}
                alt={thrill.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover opacity-60 hover:opacity-100 transition-opacity duration-300'
              />
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-xl text-white hover:text-primary">{thrill.title}</CardTitle>
                   
               
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DiscoverPage
