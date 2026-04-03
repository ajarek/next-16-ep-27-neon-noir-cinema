import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <h1 className='text-4xl font-bold'>Neon Noir Cinema</h1>
      <Button className='mt-4 h-12 text-xl px-8'>Click me</Button>
    </div>
  )
}
