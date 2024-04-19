import { sidebarItems } from "@/utils/data";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main>

      <div className="grid  grid-cols-12 h-screen  mx-20">
        <div className="col-span-3 flex flex-col mx-6 gap-4">
          <div className="w-fit h-fit rounded-full p-3 hover:bg-gray-900 transition-all cursor-pointer ">
            <FaXTwitter size={32}/>
          </div>
          <div className="flex flex-col">
            {sidebarItems.map(eachItem => (
                <div key={eachItem.label}
                className="flex items-center gap-6 text-xl hover:bg-gray-900 transition-all w-fit p-3  rounded-full">
                  {eachItem.icon({size : 28})}
                  <p>{eachItem.label}</p>
                </div>
              
            ))}
          </div>

          <button className="w-full rounded-full p-3 bg-[#1D9BF0]">
            Post
          </button>
        </div>
        <div className="col-span-6 border-x border-[#2c3033]"></div>
        <div className="col-span-3"></div>
      </div>
    </main>
  );
}
