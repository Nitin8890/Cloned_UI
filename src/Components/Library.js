import React from "react";
import liked from "./logos/liked.jpg";
import jcole from "./logos/Jcole.jpg";
import phonk from "./logos/phonk.jpg";
import lofi from "./logos/lofi.jpg";
import hin from "./logos/hin.jpg";
import "./Library.css";
const Library = () => {
  return (
    <aside className="w-72 p-2 ml-2 bg-slate-950 rounded-xl">
      <div className="">
        <div className="flex justify-between items-center m-2 ">
          <div className="flex space-x-1 cursor-pointer hover:text-white hover:duration-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 text-white transition-colors duration-300 hover:text-gray-800"
            >
              <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
              <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
              <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
              <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
            </svg>

            <h4 className="text-white cursor-pointer hover:text-gray-500 duration-75">
              Your Library
            </h4>
          </div>
          <div className="flex justify-evenly space-x-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="size-6 transition-colors duration-300 hover:stroke-gray-800 cursor-pointer"
            >
              <title>Create Playlist or folder</title>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="size-6 transition-colors duration-300 hover:stroke-gray-800 cursor-pointer"
            >
              <title>Show more</title>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
        <div className="m-2 py-4">
          <div className="flex space-x-2 text-white">
            <a
              href="/"
              className="h-7 w-20 rounded-xl bg-zinc-800 hover:bg-zinc-600 flex justify-center items-center"
            >
              Podcasts
            </a>
            <a
              href="/"
              className="h-7 w-20 rounded-xl bg-zinc-800 hover:bg-zinc-600 flex justify-center items-center"
            >
              Playlists
            </a>
            <a
              href="/"
              className="h-7 w-20 rounded-xl bg-zinc-800 hover:bg-zinc-600 flex justify-center items-center"
            >
              Artist
            </a>
          </div>
        </div>
        <div className=" flex justify-between m-2 ">
          <div className=" hover:text-white duration-75 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="size-6 transition-colors duration-300 hover:stroke-gray-800"
            >
              <title>Search in Your Library</title>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div className="flex hover:text-white duration-75 space-x-1 hover:scale-105 cursor-pointer">
            <h1 className="text-white ">Recents</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="size-6 transition-colors duration-300 hover:stroke-gray-800"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        </div>
        <div className="h-80 overflow-y-scroll">
          <div className="grid hover:">
            <div className="flex p-2 space-x-2 rounded-lg hover:bg-zinc-500">
              <img
                src={liked}
                className="h-12 w-12 rounded-lg"
                alt="liekd"
              ></img>
              <div className="grid mr-4">
                <span className="text-white flex font-bold mr-4">
                  Liked Songs
                </span>
                <span className="flex">
                  <img
                    width="18"
                    height="18"
                    className="mr-1"
                    src="https://img.icons8.com/ios-filled/50/pin--v1.png"
                    alt="pin--v1"
                  />
                  <span className="text-white">Playlist • 266 songs</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2 p-2 rounded-lg hover:bg-zinc-500">
            <div>
              <img
                src={jcole}
                alt="jcole"
                className="h-12 w-12 rounded-full"
              ></img>
            </div>
            <div className="grid">
              <span className="text-white">J. Cole</span>
              <span className="text-white">Artist</span>
            </div>
          </div>
          <div className="flex space-x-2 p-2 rounded-lg hover:bg-zinc-500">
            <div>
              <img
                src={phonk}
                alt="jcole"
                className="h-12 w-12 rounded-lg"
              ></img>
            </div>
            <div className="grid">
              <span className="text-white">phonk</span>
              <span className="text-white">Playlist • Spotify</span>
            </div>
          </div>
          <div className="flex space-x-2 p-2 rounded-lg hover:bg-zinc-500">
            <div>
              <img
                src={lofi}
                alt="jcole"
                className="h-12 w-12 rounded-lg"
              ></img>
            </div>
            <div className="grid">
              <span className="text-white">lofi</span>
              <span className="text-white">Playlist • Nitin</span>
            </div>
          </div>
          <div className="flex space-x-2 p-2 rounded-lg hover:bg-zinc-500">
            <div>
              <img src={hin} alt="jcole" className="h-12 w-12 rounded-lg"></img>
            </div>
            <div className="grid">
              <span className="text-white">Hindi</span>
              <span className="text-white">Playlist • Nitin</span>
            </div>
          </div>{" "}
          <div className="flex space-x-2 p-2 rounded-lg hover:bg-zinc-500">
            <div>
              <img src={hin} alt="jcole" className="h-12 w-12 rounded-lg"></img>
            </div>
            <div className="grid">
              <span className="text-white">Hindi</span>
              <span className="text-white">Playlist • Nitin</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Library;
