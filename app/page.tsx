import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className='min-h-[calc(100vh-64px-30px)] w-full grid grid-cols-[1fr] md:grid-cols-[3fr_1fr]   '>
      <div className=' relative  lg:h-[650px] h-[400px] overflow-hidden border-2 '>
        
          <Image src='/hero.png' alt='Hero' fill className=' object-cover' />
        
        <div className='absolute bottom-12 left-12  z-10'>
          <h1 className="md:text-7xl text-2xl  font-bold font-['Space_Grotesk']">
            NEON DREAMS
          </h1>
          <p className="md:text-lg text-sm md:w-[500px] w-[300px]  font-bold font-['Space_Grotesk']">
            In a world where memories are traded like currency, one thief risks
            everything to recover the only dream that was never for sale.
          </p>
          <Button className=' mt-4 h-12 text-xl px-8 bg-linear-to-r from-primary to-secondary '>
            <Play />
            Watch Now
          </Button>
        </div>
      </div>
      <div className="p-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore exercitationem maiores accusantium, laboriosam voluptatibus delectus necessitatibus mollitia possimus blanditiis ab quia eius minima velit iusto quos libero officia repellendus ut voluptate nam. Soluta voluptas laborum maxime voluptatibus tempore aliquid, et exercitationem consequatur placeat ratione ipsa atque ab dolore rerum. Ratione accusantium, quod debitis et delectus, libero eaque obcaecati laudantium, similique officia odio assumenda quae minima soluta molestias iste laborum neque id autem at facere? Corrupti ducimus qui architecto ratione porro maiores consequuntur optio accusamus doloribus nisi neque amet quae, obcaecati placeat cupiditate, eos quibusdam delectus in. Vel amet optio eligendi a ea? Optio neque possimus quibusdam adipisci est dignissimos minima quod blanditiis officiis, voluptas, cum unde dolorum error atque repellat nihil nam sunt aliquid, velit sed nobis provident praesentium! Enim voluptatum ratione vitae cumque blanditiis. 
      </div>
    </div>
  )
}
