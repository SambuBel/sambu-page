"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative flex h-[400px] bg-base-100 items-center">
      <div className="absolute inset-0 w-1/3 h-full opacity-20 lg:opacity-30">
        <Image
          src="/images/profile.jpg"
          alt="Mi foto"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="container mx-auto flex flex-col lg:w-2/3 items-end text-right pr-12 z-10">
        <h2 className="text-4xl font-bold text-white">Sobre mí</h2>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          Soy una desarrolladora apasionada por la tecnología y la innovación. Me encanta aprender 
          nuevas herramientas, resolver problemas y crear soluciones que marquen la diferencia. 
          Siempre estoy en busca de nuevos retos y de expandir mis horizontes.
        </p>

        <div className="flex flex-wrap gap-2 mt-6 justify-end">
          <span className="badge badge-primary px-3 py-2 text-sm">JavaScript</span>
          <span className="badge badge-secondary px-3 py-2 text-sm">React</span>
          <span className="badge badge-accent px-3 py-2 text-sm">Next.js</span>
          <span className="badge px-3 py-2 text-sm">Tailwind CSS</span>
          <span className="badge px-3 py-2 text-sm">UI/UX</span>
        </div>
      </div>
    </section>
  );
}
