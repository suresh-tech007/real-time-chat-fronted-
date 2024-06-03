import { Link } from "react-router-dom" 
import GenderChackBox from "./GenderChackBox"
import { useState } from "react"
import UseSignup from "../../hooks/UseSignup"


const Signup = () => {
    const [input , setInput] = useState({
        fullName : "",
        username : "",
        password : "",
        confirmPassword : "",
        gender : "",
    })

    const {loading,signup} = UseSignup()
    const handlechackbax = (gender)=>{
        setInput({...input,gender})
    }

    const handlesumbit = async (e)=>{
        e.preventDefault()
        await signup(input)
        console.log(input)
    }
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
                <h1 className='text-3xl font-semibold text-center text-gray-300'
                > Sign up
                    <span className="text-blue-500"> ChatApp</span>
                </h1>
                <form action="" onSubmit={handlesumbit}>
                    <div>
                        <label htmlFor="" className="label p-2">
                            <span className="text-base label-text">username</span>
                        </label>
                        <input type="text" placeholder="Enter username" value={input.username} className="input w-full input-bordered h-10 " onChange={(e)=>{setInput({...input,username:e.target.value})}} />
                    </div>
                    <div>
                        <label htmlFor="" className="label p-2">
                            <span className="text-base label-text">fullName</span>
                        </label>
                        <input type="text" placeholder="Enter fullname" value={input.fullName} className="input w-full input-bordered h-10 " onChange={(e)=>{setInput({...input,fullName:e.target.value})}} />
                    </div>
                    <div>
                        <label htmlFor="" className="label p-2">
                            <span className="text-base label-text">passwprd</span>
                        </label>
                        <input type="password" placeholder="Enter password" value={input.password} className="input w-full input-bordered h-10 " onChange={(e)=>{setInput({...input,password:e.target.value})}} />
                    </div>
                    <div>
                        <label htmlFor="" className="label p-2">
                            <span className="text-base label-text">Confirm password</span>
                        </label>
                        <input type="text" placeholder="confirm password" value={input.confirmPassword} className="input w-full input-bordered h-10 " onChange={(e)=>{setInput({...input,confirmPassword:e.target.value})}} />
                    </div>
                    {/* GENDER  CHACKBOX */}
                    <GenderChackBox selectGender={input.gender} onchackbox={handlechackbax} />

                    <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        Already have a account?
                    </Link>
                    <div>
                    <button disabled={loading} className="btn btn-block btn-sm mt-2">{loading?<span className="loading  laoding-spinner"></span>:"Sign Up"}</button>
                </div>

                </form>

            </div>
        </div>
    )
}

export default Signup


// STARTED CODE FOR THE SIGN UP COMPONENTS 
// import GenderChackBox from "./GenderChackBox"


// const Signup = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'
//                 > Sign up
//                     <span className="text-blue-500"> ChatApp</span>
//                 </h1>
//                 <form action="">
//                     <div>
//                         <label htmlFor="" className="label p-2">
//                             <span className="text-base label-text">username</span>
//                         </label>
//                         <input type="text" placeholder="Enter username" className="input w-full input-bordered h-10 " />
//                     </div>
//                     <div>
//                         <label htmlFor="" className="label p-2">
//                             <span className="text-base label-text">fullName</span>
//                         </label>
//                         <input type="text" placeholder="Enter fullname" className="input w-full input-bordered h-10 " />
//                     </div>
//                     <div>
//                         <label htmlFor="" className="label p-2">
//                             <span className="text-base label-text">passwprd</span>
//                         </label>
//                         <input type="password" placeholder="Enter password" className="input w-full input-bordered h-10 " />
//                     </div>
//                     <div>
//                         <label htmlFor="" className="label p-2">
//                             <span className="text-base label-text">Confirm password</span>
//                         </label>
//                         <input type="text" placeholder="confirm password" className="input w-full input-bordered h-10 " />
//                     </div>
//                     {/* GENDER  CHACKBOX */}
//                     <GenderChackBox/>

//                     <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//                         Already have a account?
//                     </a>
//                     <div>
//                     <button className="btn btn-block btn-sm mt-2">Sign Up</button>
//                 </div>

//                 </form>

//             </div>
//         </div>
//     )
// }

// export default Signup