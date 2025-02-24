"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[35vh] flex flex-col items-center justify-center mt-16 bg-gradient-to-r from-[#0a192f] to-[#6a0dad]">
      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        
        {/* Avatar */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <div className="relative w-full h-full">
          <Image
            src="/images/profile2.jpeg" // Cambia por la imagen de tu avatar
            alt="Avatar"
            layout="fill"
            objectFit="cover"
            className="scale-125"
          />
          </div>
        </div>

        {/* Caja de texto tipo terminal */}
        <div className="px-6 py-4 bg-black/80 rounded-md shadow-lg">
          <p className="text-green-400 font-mono text-lg">
            <span className="text-white">$</span> git commit -m 
            <span className="text-yellow-300"> {'"Turning ideas into code"'}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
