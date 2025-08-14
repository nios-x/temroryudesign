

export default function Main2() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center ">
        <div className="block p-6">
            <div className=" bg-gradient-to-bl w-max  h-max mt-4 py-3 px-5 rounded-full from-[#dbfff8] to-[#edffd6] ">We Work With</div>
        </div>
        <div className="flex gap-5 flex-wrap p-10 justify-center">
            {Array(12).fill(0).map((e)=><div className="bg-zinc-100 h-30 w-50  rounded-xl overflow">
            </div>)}
        </div>
        
    </div>
  )
}
