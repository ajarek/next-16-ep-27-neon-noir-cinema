import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-start   '>
      
      
      <h1 className="text-4xl  font-bold font-['Space_Grotesk']">CineNoir</h1>
      <Button className=' mt-4 h-12 text-xl px-8 bg-linear-to-r from-primary to-secondary '>Click me</Button>
    </div>
  )
}
