'use client'
import Link from 'next/link'
import { Menu, Twitter, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '../ui/badge'

const menuItems = [
    { name: 'Home', href: '#link' },
    { name: 'About', href: '#link' },
    { name: 'For Developers', href: '#link' },
    { name: 'Blog', href: '#link' },
]

const Navigation = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-lime-950/50 max-w-4xl rounded-2xl border border-lime-800/20 backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <span className="font-bold text-xl text-primary">Zypp</span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-500" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-500" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-white/80 text-sm hover:text-primary transition block duration-150">
                                            <span>{item.name}</span>
                                            {item.name === 'For Developers' && (
                                                <Badge variant="default" className="ml-2 px-2 py-[0.5px] text-xs">Beta</Badge>)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-lime-950/20 backdrop-blur-md in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-neutral-800/90 p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent animate">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-white/80 text-sm hover:text-primary transition block duration-150">
                                                <span>{item.name}</span>
                                                {item.name === 'For Developers' && (
                                                    <Badge variant="default" className="ml-2 px-2 py-[0.5px] text-xs">Beta</Badge>)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild 
                                    size="sm"
                                    className="">
                                    <Link href="#waitlist">
                                        <span>Join the waitlist</span>
                                    </Link>
                                </Button>
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
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navigation