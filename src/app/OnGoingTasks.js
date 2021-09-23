import React, { useContext } from 'react';
import Header from './header'

import { MyContext } from '../App';
import Sidenav from './Sidenav';



const OnGoingTasks = () => {

    const { tasks, handleClick, deleteTask, } = useContext(MyContext);

    return (
        <div class="flex h-screen bg-gray-100 col-span-3 " >

            <div class="h-full w-48" >
                <Sidenav />
            </div>
            <div class=" bg-white shadow-2xl h-full w-full  " >
                <Header name="On Going Tasks" />
                <div>


                    <div class="w-8/10 shadow-2xl rounded-md bg-blue-500 h-96 ml-10 m-10" >
                        {
                            tasks.map((item, index) => {
                                let textClass = `ml-20 mt-3 text-white font-bold  ${item.isCompleted ? "text-green-900 line-through" : null}`;
                                if (item.isCompleted === false) {
                                    return (

                                        <div class="w-full h-10  flex flex-row justify-evenly  " >
                                            <div class="w-10 h-full items-center  " >
                                                <input onClick={() => { handleClick(index) }} class="h-10 w-5" type="checkbox" id="vehicle1" name="vehicle1" value={item.task} checked={item.isCompleted ? "checked" : null} ></input>
                                            </div>
                                            <div class="w-80 h-full justify-items-start   "  >
                                                <h2 class={textClass} >{item.task}</h2>
                                            </div>
                                            <div class="w-20 h-full text-white mt-3  items-center  " >
                                                <svg onClick={() => { deleteTask(index) }} class="w-6 h-6 hover:text-gray-900 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </div>

                                        </div>
                                    );
                                }
                                return null
                            }
                            )
                        }



                    </div>

                </div>

            </div>

        </div>

    )
}


export default OnGoingTasks;

