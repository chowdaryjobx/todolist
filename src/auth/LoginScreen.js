import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from '../App';
import { Link } from 'react-router-dom'


const LoginScreen = (props) => {
    const { authUser } = useContext(MyContext);

    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [validEmail, setValidEmail] = useState(false);

    // ============  Hooks  =====================
    useEffect(() => {
        emailValidate()
    }, [email])
    useEffect(() => {
        getListFromLocalStorage();
    }, [])

    // ============ End of Hooks ================

  


    //============ Functions ==============
    const getListFromLocalStorage = () => {
        let users = JSON.parse(localStorage.getItem('users'));

        setUsers(users)

    }

    const authenticateUser = () => {
        if (email !== null && email !== '' && password !== null && password !== '') {
            // console.log(email, password)
            users.map((user) => {
                if (user.email === email && user.password === password) {

                    authUser(true);
                    return null
                }
                else {
                    alert("User Not Found");
                }
                return null
            })
        }
        else {
            alert("empty")
        }
    }

    const emailValidate = () => {
        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regex = new RegExp(mailFormat);
        if (regex.test(email)) {
            setValidEmail(true);
        }
        else {
            setValidEmail(false);
        }
    }


    //============ End Of Functions =======



    return (
        <body class="bg-gray-200 h-screen justify-center ">
            <main class="h-sreen flex justify-center items-center  " >
                <div class="flex flex-col bg-blue-500 text-white rounded-md p-5 w-full m-7 shadow-2xl" >
                    <div class="relative w-full">
                        <p class="font-bold text-2xl " >
                            TODO LIST
                        </p>
                        <p class="text-xs " >
                            Welome to todo list.
                        </p>
                        <p class="sm:mt-32 font-bold" > Login to your TODO</p>
                    </div>
                    <div class="sm:absolute font-bold right-24 bg-white rounded-lg  h-70 p-2 sm:w-80 flex flex-col justifty-center items-center text-black shadow-xl ">
                        <h2>Log In </h2>
                        <div class="mt-5" >
                            <label class="ml-0 w-full mt-0" >Email Id</label>
                            <div class=" flex  justify-between " >
                                <input onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="Enter Email Address" class="text-xs  w-full p-1 focus:outline-none border-b-2 mt-4 border-gray-500  focus:border-blue-500 mb-5 bg-transparent" >

                                </input>
                                {validEmail ? <svg class="w-6 h-6 mt-5 text-green-800 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    : <svg class="w-6 h-6 mt-5 text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>}
                            </div>
                            {/* <input onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="Enter Email Address" class="text-xs  w-full p-1 focus:outline-none border-b-2 mt-4 border-gray-500  focus:border-blue-500 mb-5 bg-transparent" ></input> */}
                            <label class="ml-0 w-full" >Password</label>
                            <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Enter Email Address" class=" mt-4 text-xs w-full p-1 focus:outline-none border-b-2  border-gray-500  focus:border-blue-500" ></input>
                            <button onClick={() => { authenticateUser() }} class="mt-10 bg-blue-500 w-full mb-7 focus:outline-none shadow-2xl rounded hover:bg-gray-500 h-10 ">Login</button>
                            <div class="text-red-500  flex justify-between ">
                                <h1 class="hover:text-8xl hover:text-gray-500 " >Forgot Password ?</h1>
                                <h1 class="hover:text-8xl hover:text-gray-500"  ><Link to="/signup">Sign Up</Link> </h1>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </body>
    );
}


export default LoginScreen