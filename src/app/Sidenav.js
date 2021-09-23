import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Sidenav() {



    const [drawerOpen, setDrawerOpen] = useState(true);

    if (drawerOpen) {
        return (
            <div class="absolute z-10 w-48 bg-indigo-900 text-white h-screen p-3 duration-200 ease-in opacity-100" >
                <div class="flex justify-between" >
                    <span class="font-bold text-xl p-2 " >
                        TODO LIST
                    </span>
                    <button onClick={() => { setDrawerOpen(!drawerOpen) }} class="p-2 focus:outline-none hover:bg-indigo-700 focus:bg-indigo-700 rounded-md " >
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <ul class="mt-8" >
                    <li class=" px-4 py-2 hover:bg-indigo-700 rounded-md flex justify-between " >
                        <Link to="/home">Home</Link>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    </li>

                    <li class="flex justify-between px-4 py-2 hover:bg-indigo-700 rounded-md " >
                        <Link to="/ongoingtasks">On Going</Link>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path></svg>

                    </li>

                    <li class="flex justify-between px-4 py-2 hover:bg-indigo-700 rounded-md " >
                        <Link to="/completedtasks">Completed</Link>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>

                    </li>

                </ul>
            </div>
        )
    }
    else {
        return (
            <div class="duration-200 ease-out" >
                <svg onClick={() => { setDrawerOpen(!drawerOpen) }} class="w-6 h-6 shadow-none text-blue-500 ml-5 mt-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </div>

        )




    }


}

export default Sidenav
