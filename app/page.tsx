import { Button } from "@/components/ui/button"
import {
  Bookmark,
  MoveRight,
  Play,
  Scan,
  Share2,
  Sparkles,
  Square,
  ThumbsUp,
  Volume2,
} from "lucide-react"
import Image from "next/image"
import { TrendingCard } from "@/data/trendingCard"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Home() {
  return (
    <div className='min-h-[calc(100vh-64px-30px)] w-full grid grid-cols-[1fr] lg:grid-cols-[3fr_1fr]   '>
      <div className='w-full relative  lg:h-[650px] h-[400px] overflow-hidden border-2 '>
        <Image src='/hero.png' alt='Hero' fill className=' object-cover' />
        <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent'></div>
        <div className='absolute bottom-12 md:left-12 left-4 flex flex-col w-[90%] gap-4 z-10'>
          <h1 className="md:text-7xl text-2xl  font-bold font-['Space_Grotesk']">
            NEON DREAMS
          </h1>
          <p className="md:text-lg text-sm md:w-[500px] w-[300px]  font-bold font-['Space_Grotesk']">
            In a world where memories are traded like currency, one thief risks
            everything to recover the only dream that was never for sale.
          </p>
          <div className='w-full flex items-center justify-between gap-8 '>
            <div className='flex items-center gap-4'>
              <Button className=' h-12 text-xl md:px-8 px-4 bg-linear-to-r from-primary to-secondary '>
                <Play />
                Watch Now
              </Button>
              <div className='flex items-center gap-4 text-primary max-md:hidden'>
                <ThumbsUp className='hover:text-secondary cursor-pointer' />
                <Bookmark className='hover:text-secondary cursor-pointer' />
                <Share2 className='hover:text-secondary cursor-pointer' />
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <Volume2 className='cursor-pointer text-primary' />
              <Progress value={33} className='w-[100px]' />
              <Scan className='cursor-pointer text-primary' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full md:overflow-y-auto no-scrollbar md:h-[600px] h-screen p-4'>
        <div className='w-full flex items-center justify-between'>
          <h1 className='text-xl'>Trending Now</h1>
          <Button className='bg-popover border-none text-primary uppercase hover:text-secondary hover:bg-popover cursor-pointer'>
            See All
          </Button>
        </div>
        <div className='w-full flex flex-col gap-4 mt-4'>
          {TrendingCard.map((card) => (
            <Card key={card.id} className='w-full text-white'>
              <CardHeader className='p-0 relative md:h-[150px] h-[200px] w-full overflow-hidden'>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className='object-cover  hover:scale-110 transition-all duration-300'
                />
                <div className='absolute bottom-4 left-4 z-10'>
                  <h1 className="text-xl font-['Space_Grotesk'] uppercase">
                    {card.type}*{card.production_date}
                  </h1>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className='hover:text-primary'>
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
          <Card className='w-full text-white'>
            <CardHeader className='flex flex-col gap-4'>
              <Sparkles color='#00DBE9' />

              <h1 className='text-xl '>Weekly Spotlight</h1>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Discover curated collections from world-renowned directors every
                Monday.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button
                variant='outline'
                className='w-full flex items-center gap-2 justify-start text-[#00DBE9] bg-popover uppercase -tracking-tighter border-[#00DBE9] hover:text-white hover:bg-transparent cursor-pointer'
              >
                Explore <MoveRight />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
