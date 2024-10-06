import React from "react";
import liked from "./logos/liked.jpg";
import phonk from "./logos/phonk.jpg";
import hin from "./logos/hin.jpg";
import lofi from "./logos/lofi.jpg";
import juice from "./logos/juice.jpg";
import tphonk from "./logos/Tphonk.jpg";
import sleep from "./logos/sleeping.jpg";
import ts from "./logos/ts.jpg";
import dm1 from "./logos/dm1.jpg";
import dm2 from "./logos/dm2.jpg";
import dm3 from "./logos/dm3.jpg";
import dm4 from "./logos/dm4.jpg";
import dm5 from "./logos/dm5.jpg";
import dm6 from "./logos/dm6.jpg";
import dm7 from "./logos/dm7.jpg";
import dm8 from "./logos/dm8.jpg";
import dm9 from "./logos/dm9.jpg";
import dm10 from "./logos/dm10.jpg";
const Center = () => {
  return (
    <article className=" bg-slate-950 rounded-lg ml-2 w-screen">
      <div className="m-4">
        <div className="m-2 py-4">
          <div className="flex space-x-2 text-white">
            <a
              href="/"
              className="h-7 w-20 rounded-full bg-zinc-800 hover:bg-zinc-600 flex justify-center items-center"
            >
              All
            </a>
            <a
              href="/"
              className="h-7 w-20 rounded-full bg-zinc-800 hover:bg-zinc-600 flex justify-center items-center"
            >
              Music
            </a>
            <a
              href="/"
              className="h-7 w-20 rounded-full bg-zinc-800 hover:bg-zinc-600 flex justify-center items-center"
            >
              Podcasts
            </a>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="cursor-pointer flex justify-between items-center w-1/4 h-12 bg-stone-900 m-1 rounded-lg hover:bg-zinc-950">
              <img
                className="h-12 w-12 object-cover rounded-l-lg"
                src={liked}
                alt="icon1"
              ></img>
              <p className="text-white font-bold text-start w-full m-2  ">
                LIKED SONGS
              </p>
            </div>
            <div className="cursor-pointer flex justify-between items-center w-1/4 h-12 bg-stone-900 m-1 rounded-lg hover:bg-zinc-950">
              <img
                className="h-12 w-12 object-cover rounded-l-lg"
                src={sleep}
                alt="icon1"
              ></img>
              <p className="text-white font-bold text-start w-full m-2  ">
                SLEEPING MUSIC
              </p>
            </div>
            <div className="cursor-pointer flex justify-between items-center w-1/4 h-12 bg-stone-900 m-1 rounded-lg hover:bg-zinc-950">
              <img
                className="h-12 w-12 object-cover rounded-l-lg"
                src={juice}
                alt="icon1"
              ></img>
              <p className="text-white font-bold text-start w-full m-2  ">
                JUICE
              </p>
            </div>
            <div className="cursor-pointer flex justify-between items-center w-1/4 h-12 bg-stone-900 m-1 rounded-lg hover:bg-zinc-950">
              <img
                className="h-12 w-12 object-cover rounded-l-lg"
                src={lofi}
                alt="icon1"
              ></img>
              <p className="text-white font-bold text-start w-full m-2  ">LOFI</p>
            </div>
          </div>

          <div className="flex">
            <div className="cursor-pointer flex justify-between items-center w-1/4 h-12 bg-stone-900 m-1 rounded-lg hover:bg-zinc-950">
              <img
                className="h-12 w-12 object-cover rounded-l-lg"
                src={tphonk}
                alt="icon1"
              ></img>
              <p className="text-white font-bold text-start w-full m-2  ">
                TRENDING PHONK
              </p>
            </div>
            <div className="cursor-pointer flex justify-between items-center w-1/4 h-12 bg-stone-900 m-1 rounded-lg hover:bg-zinc-950">
              <img
                className="h-12 w-12 object-cover rounded-l-lg"
                src={hin}
                alt="icon1"
              ></img>
              <p className="text-white font-bold text-start w-full m-2  ">
                HINDI
              </p>
            </div>
            <div className="cursor-pointer flex justify-between items-center w-1/4 h-12 bg-stone-900 m-1 rounded-lg hover:bg-zinc-950">
              <img
                className="h-12 w-12 object-cover rounded-l-lg"
                src={phonk}
                alt="icon1"
              ></img>
              <p className="text-white font-bold text-start w-full m-2  ">
                PHONK
              </p>
            </div>
            <div className="cursor-pointer flex justify-between items-center w-1/4 h-12 bg-stone-900 m-1 rounded-lg hover:bg-zinc-950">
              <img
                className="h-12 w-12 object-cover rounded-l-lg"
                src={ts}
                alt="icon1"
              ></img>
              <p className="text-white font-bold text-start w-full m-2  ">TRAVIS SCOTT</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-white flex justify-between  ">
            <h1 className="font-bold hover:underline cursor-pointer text-2xl">
              Made For You
            </h1>
            <button className="cursor-pointer font-bold hover:underline">
              Show all
            </button>
          </div>
          <div className="mt-5 w-full flex justify-center items-center space-x-12">
            <div className="h-40 w-40 rounded-lg cursor-pointer hover:bg-neutral-700 p-2">
              <img className="h-40 w-40 object-cover rounded-lg" src={dm1} alt="dm1"></img>
            </div>
            <div className="h-40 w-40 rounded-lg cursor-pointer hover:bg-neutral-700 p-2">
              <img className="h-40 w-40 object-cover rounded-lg" src={dm2} alt="dm1"></img>
            </div>
            <div className="h-40 w-40 rounded-lg cursor-pointer hover:bg-neutral-700 p-2">
              <img className="h-40 w-40 object-cover rounded-lg" src={dm3} alt="dm1"></img>
            </div>
            <div className="h-40 w-40 rounded-lg cursor-pointer hover:bg-neutral-700 p-2">
              <img className="h-40 w-40 object-cover rounded-lg" src={dm4} alt="dm1"></img>
            </div>
            <div className="h-40 w-40 rounded-lg cursor-pointer hover:bg-neutral-700 p-2">
              <img className="h-40 w-40 object-cover rounded-lg" src={dm5} alt="dm1"></img>
            </div>
            
            
          </div>
        </div>
      </div>
    </article>
  );
};

export default Center;
