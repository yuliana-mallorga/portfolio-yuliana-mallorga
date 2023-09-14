import React from "react";
import ReactDOM from 'react-dom'
import {Link} from 'react-dom'
import Bubble from "./components/Icons/Bubble"
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="bg-indigo-900/90 min-h-screen">
      <Navbar/>
      <h1 className="text-3xl italic font-bold underline p-6">
        My personal portfolio
      </h1>  
      <section className="flex place-content-center bg-slate-800 p-7">
        <div className="p-6 max-w-sm border-2 bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div className="shrink-0">
            <Bubble />
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-slate-500">You have a new message!</p>
          </div>
        </div>
      </section>
      <div className="">
        <div className="bg-cyan-950 text-center">
        <h2>Hello</h2>
      </div>

        <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800 ">
          <div className="sm:flex sm:items-center sm:justify-between">
            {/* <Link to="#" target="_blank" className="flex items-center mb-4 sm:mb-0">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-4 h-8" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </Link> */}
            {/* <ul class="flex flex-wrap items-center mb-6 sm:mb-0">
              <li>
                <a href="#" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
              </li>
              <li>
                <a href="#" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy
                  Policy</a>
              </li>
              <li>
                <a href="#"
                  class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
              </li>
              <li>
                <a href="#" class="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</a>
              </li>
            </ul> */}
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" target="_blank" class="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <p class="mt-5">This footer component is part of a larger, open-source library of Tailwind CSS components. Learn
            more
            {/* by going to the official <a class="text-blue-600 hover:underline"
            href="#" target="_blank">Flowbite Documentation</a>. */}
          </p>
        </footer>
      </div>
    </div>
    
  );
}

export default App;
