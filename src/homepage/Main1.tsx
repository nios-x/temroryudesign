
import { AvatarDemo } from "../components/ui/avatars2"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"


export default function Main1() {
    return (
        <div>
            {/* <div className="text-center bg-zinc-800 py-3 text-white">
            Learn to code, Earn as YOU learn!
        </div> */}
            <main className="min-h-screen bg-gradient-to-bl from-[#f0fffc] to-[#f9fff1] ">
                <div className="p-6   flex justify-between">
                    <img src="/arc.png" alt="" className="h-10  " />
                    <div className="w-max flex gap-8 pt-5 ">
                        {
                            ["Home", "About Us", "Learn", "Curriculums", "Blog", "Community", "Contact Us"].map(e => {
                                return <div className="text-xs font-semibold  uppercase">{e}</div>
                            })
                        }
                    </div>
                    <div className="w-max px-3 gap-5 flex">
                        <Button className="border-[#00725c] border  font-bold rounded-full hover:text-white px-7 py-6  bg-transparent text-black">
                            Sign Up
                        </Button>
                        <Button className="bg-[#00725c]  font-bold rounded-full px-7 py-6 ">
                            Log in
                        </Button>
                    </div>
                </div>
                <div className=" font-semibold min-h-[70vh] pl-16 pt-30 justify-center flex flex-col relative">
                    <div>
                        <div className=" text-7xl">Learn to code,</div>
                        <div className=" text-7xl">earn as YOU learn!</div>
                    </div>
                    <div className=" text-2xl max-w-1/2 pt-5">Master coding skills with our comprehensive learning platform. Start your journey today and build a successful career in tech.</div>
                    <div className="absolute top-[5%] right-[35%]" >
                        <img src="/wave.png" alt="" className="h-20  " />
                    </div>
                    <div className="pt-12 flex gap-3">
                        <Input className="w-90 mt-2 bg-white p-5" placeholder="Look up a topic : React, Android, AI, Docker etc." />
                        <Button className="bg-[#00725c]  font-bold rounded-full px-7 py-5 mt-2 ">
                            Dive In!
                        </Button>
                    </div>
                    <div className="flex items-center pl-3">

                        <AvatarDemo />
                        <div className="pt-10 pl-2 ">

                            Trusted By 127k+ Students
                        </div>
                    </div>


                </div>


            </main>
        </div>
    )
}