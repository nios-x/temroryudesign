import { AvatarDemo } from "../components/ui/avatars2"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import CodeDialog from "../components/CodeDialog"
import { useEffect, useRef, useState } from "react"

export default function Main1() {
  const eyeRef = useRef<HTMLDivElement | null>(null)
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (eyeRef.current) {
        const rect = eyeRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const dx = e.clientX - centerX
        const dy = e.clientY - centerY
        const angle = Math.atan2(dy, dx)

        // pupil movement radius
        const radius = 12

        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        setPupilPos({ x, y })
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div>
      <main className="min-h-screen bg-gradient-to-bl from-[#f0fffc] to-[#f9fff1]">
        {/* Navbar */}
        <div className="p-6 flex justify-between">
          <img src="/edearn-logo.png" alt="" className="h-10 mt-3" />

          <div className="w-max flex gap-8 pt-5">
            {[
              "Home",
              "About Us",
              "Learn",
              "Curriculums",
              "Blog",
              "Community",
              "Contact Us",
            ].map((e, i) => (
              <div
                key={i}
                className="text-xs font-semibold uppercase cursor-pointer hover:text-[#00725c]"
              >
                {e}
              </div>
            ))}
          </div>

          <div className="w-max px-3 gap-5 flex">
            <Button className="border-[#00725c] border font-bold rounded-full hover:text-white px-7 py-3 bg-transparent text-black">
              Sign Up
            </Button>
            <Button className="bg-[#00725c] font-bold rounded-full px-7 py-3 text-white">
              Log in
            </Button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="font-semibold min-h-[70vh] pl-16 pt-32 flex flex-col relative">
          <div>
            <div className="text-7xl">Learn to code,</div>
            <div className="text-7xl">earn as YOU learn!</div>
          </div>

          <div className="text-2xl max-w-[50%] pt-5 ml-[-2px]">
            Master coding skills with our comprehensive learning platform. Start
            your journey today and build a successful career in tech.
          </div>

          {/* Search Input + Eye Button */}
          <div className="pt-12 flex gap-3 ml-[-7px] items-center">
            <Input
              className="w-96 mt-2 bg-white p-5"
              placeholder="Look up a topic : React, Android, AI, Docker etc."
            />
            <Button className="relative border-[#00725c] hover:text-white hover:scale-110 text-black border bg-transparent font-bold rounded-full px-7 py-5 mt-2 flex items-center gap-2 transition">
              Dive In!
              {/* Eye container */}
              <div
                ref={eyeRef}
                className="ml-2 h-8 w-8 bg-white border border-black rounded-full flex items-center justify-center overflow-hidden"
              >
                {/* Pupil */}
                <div
                  className="h-4 w-4 bg-black rounded-full transition-transform duration-75"
                  style={{
                    transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
                  }}
                />
              </div><div
                ref={eyeRef}
                className=" h-8 w-8 bg-white border border-black rounded-full flex items-center justify-center overflow-hidden"
              >
                {/* Pupil */}
                <div
                  className="h-4 w-4 bg-black rounded-full transition-transform duration-75"
                  style={{
                    transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
                  }}
                />
              </div>
              
              
            </Button>
          </div>


          {/* Trusted Badge */}
          <div className="flex items-center pl-3 pt-6">
            <AvatarDemo />
            <div className="pt-10 pl-2">Trusted By 127k+ Students</div>
          </div>

          {/* CodeDialog floating */}
          <div className="pt-10 absolute top-10 right-40">
            <CodeDialog />
          </div>
        </div>
      </main>
    </div>
  )
}
