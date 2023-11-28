import React from "react";
import Typewriter from 'typewriter-effect';

export default function About() {
  return (
    <div>
    <div className="text-3xl,bg-black mt-20">
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 50,
          // typeString:["Edu"],
          strings: ["EduConnect"],
        }}
      />Helooooodhfgfigfskbfs
      
      </div>
      <div class="relative card h-36">
        <img
          src="https://media.istockphoto.com/id/1402113674/photo/glass-and-pitcher-of-ice-tea-with-rural-summer-background.jpg?s=2048x2048&w=is&k=20&c=NglmPvchJk_y59TtarCkJgAlWaNujhWdwnfaFNPnEcw="
          class="card-img-top hover:opacity-60 hover:cursor-pointer hover:filter-grayscale-60 transition-opacity duration-300"
          alt="..."
        />
        <p class=" transform scale-0 transition-transform duration-500 ease-in-out  absolute top-32 left-32 text-black text-3xl font-cursive font-bold hover:scale-2">
          YUM!
        </p>
      </div>
    </div>
  );
}
