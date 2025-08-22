import React from 'react'
import { TiltedScroll } from '../ui/tilted-scroll'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { ChevronRight } from 'lucide-react'
import { BackgroundCells } from '../ui/grid'

const Hero = () => {
  return (
    <div className=" h-screen relative flex flex-col items-center justify-center w-screen px-[3rem]">      <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-40rem] right-[-30rem] z-[0] blur-[4rem] skew-[-40deg] opacity-50">
      <div className="w-[10rem] h-[20rem] bg-linear-90 from-[#b7ff02] to-lime-200"></div>
      <div className="w-[10rem] h-[20rem] bg-linear-90 from-[#b7ff02] to-lime-200"></div>
      <div className="w-[10rem] h-[20rem] bg-linear-90 from-[#b7ff02] to-lime-200"></div>
    </div>
      <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-50rem] right-[-50rem] z-[0] blur-[4rem] skew-[-40deg] opacity-50">
        <div className="w-[10rem] h-[20rem] bg-linear-90 from-[#b7ff02] to-lime-200"></div>
        <div className="w-[10rem] h-[20rem] bg-linear-90 from-[#b7ff02] to-lime-200"></div>
        <div className="w-[10rem] h-[20rem] bg-linear-90 from-[#b7ff02] to-lime-200"></div>
      </div>
      <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-60rem] right-[-60rem] z-[0] blur-[4rem] skew-[-40deg] opacity-50">
        <div className="w-[10rem] h-[30rem] bg-linear-90 from-[#b7ff02] to-lime-200"></div>
        <div className="w-[10rem] h-[30rem] bg-linear-90 from-[#b7ff02] to-lime-200"></div>
        <div className="w-[10rem] h-[30rem] bg-linear-90 from-[#b7ff02] to-lime-200"></div>
      </div>

      <div className='relative z-10 mt-[-20rem] lg:mt-[-10rem] flex flex-col items-center justify-center gap-6 text-white'>
        {/* Moved the Badge here, right before the heading */}
       <Link href="https://x.com/use_zypp" target="_blank">
         <Badge className='bg-lime-950/20 border hover:bg-lime-950/40 hover:scale-[1.05] transition duration-300 cursor-pointer border-lime-800/20 backdrop-blur-lg text-lime-400 px-4 py-2 text-xs font-semibold mb-4 gap-3'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
            <path fill="#fff" d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
          </svg>
          Introducing Zypp Protocol, the first DropFi Protocol on Solana...
          <ChevronRight className="inline h-4 w-4 text-lime-400" />
        </Badge>
       </Link>

        <h1 className='text-center text-5xl font-black lg:leading-24 tracking-wider text-transparent md:text-6xl lg:text-7xl'>
          <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-300 bg-clip-text">
            A New Era of <br />
          </span>
          <span className="bg-gradient-to-r from-[#a2ff02] via-lime-300 to-[#b7ff02] bg-clip-text">
            onchain Transactions
          </span>
        </h1>
        <p className='text-center text-sm leading-relaxed opacity-90 lg:text-base'>
          We're the first DropFi Protocol enabling <span className="font-semibold text-[#b7ff02]">offline</span> onchain transactions 🤯
        </p>      </div>
      <div className="flex space-x-3 mt-10">
        <Link href="#waitlist" className="group-hover:shadow-lg">
        <Button
          asChild
          size="lg"
          className="group transform-gpu bg-gradient-to-r from-[#67ff02] to-lime-300 text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#b7ff02]/40"
        >
            <span>Join the waitlist</span>
        </Button>
          </Link>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="group transform-gpu border-white/20 transition-all hover:scale-105 hover:bg-transparent hover:shadow-lg hover:shadow-white/10"
        >
          <Link
            href="https://x.com/use_zypp"
            target='_blank'
            className='flex items-center gap-2'
          >
            <span>Follow us on</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 300"
              className="h-5 w-5 transition-transform group-hover:scale-110"
            >
              <path fill="#b7ff02" d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
            </svg>
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Hero