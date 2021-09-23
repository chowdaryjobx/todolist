import React from 'react';
import { MyContext } from '../App';

const Header = ({ name }) => {

    const { authUser, user } = React.useContext(MyContext);
    return (
        <div>
            <div class="flex justify-between items-center  text-blue-500 font-bold text-2xl h-10 w-full mt-10  " >
                <h1 class="ml-10" >TODO LIST</h1>
                <div class="hover:text-blue-900" >
                    <svg onClick={() => { authUser(!user) }} class="w-6 h-6 mr-10  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                    <p class="text-xs" >logout</p>
                </div>

            </div>
            <div class="text-blue-500 font-bold text-xl h-10 w-full mt-10 ml-10 " >
                {name}
            </div>
        </div>
    )
}

export default Header;