import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { watchlist } from "@/data/watchlist"
import Image from "next/image"

const WatchlistPage = () => {
  return (
    <div className='flex min-h-[calc(100vh-94px)] shrink-0 flex-col p-4 gap-4'>
      <h1 className="text-3xl  font-bold font-['Space_Grotesk']">Watchlist</h1>
      <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-4'>
        {watchlist.map((list) => (
          <Card key={list.id} className='w-full'>
            <CardHeader className='w-full h-100 relative'>
              <Image
                src={list.image}
                alt={list.title}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover opacity-60 hover:opacity-100 transition-opacity duration-300'
              />
            </CardHeader>
            <CardContent>
              <CardTitle className='text-xl text-white hover:text-primary'>
                {list.title}
              </CardTitle>

              <div className='flex items-center gap-2 bg-transparent '>
                <CardDescription className='text-primary'>
                  {list.productionYear}
                </CardDescription>
                <CardDescription className=''>*</CardDescription>
                <CardDescription className='text-[#00DBE9]'>
                  {list.type}
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default WatchlistPage
