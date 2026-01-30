 import Image from "next/image";
 
 export default function HomePage () {
    return (
       <main className="min-h-screen">
           <div className="bg-[url(/myimage.png)] h-screen bg-contain bg-no-repeat md:bg-[url(/myimage.png)] md:h-[60vh] md:bg-contain lg:bg-[url(/myimage.png)] lg:h-screen lg:bg-no-repeat lg:bg-cover">
             
           </div>
       </main>
    )
 }