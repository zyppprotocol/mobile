import Devs from "@/components/setions/devs";
import Features from "@/components/setions/features";
import Hero from "@/components/setions/Hero";
import Navigation from "@/components/setions/Navigation";
import { Button } from "@/components/ui/button";
import { Squares } from "@/components/ui/squares-background";
import { ThemeToggle } from "@/components/ui/theme-toggler";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#0d1400] relative text-white min-h-screen flex flex-col overflow-x-hidden">
      <div className="absolute -z-10 inset-0 h-full w-full 
                        bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
                        bg-[size:20px_20px]"
      />
      <Navigation />
      <Hero />
      <Features />
      <Devs/>
    </div>
  );
}
