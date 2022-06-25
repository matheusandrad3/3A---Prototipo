import { FaGoogle, FaRegEnvelope } from "react-icons/fa"
import { MdLockOutline } from "react-icons/md"
import React from "react"
import Form from "../components/Form"
import LoginGoogle from "../firebase/loginGoogle"


export default function SignIn() {

    return (
        
            <div className="w-3/5 p-5">
                <div className="text-left font-bold text-white">
                    <span className=" text-orange-300"> 3A </span> INVESTIMENTOS
                </div>
                <div className="py-10">
                    <h2 className="text-3xl font-bold text-white mb-2">Sign In</h2>
                    <div className="border-2 w-10 border-stone-800 inline-block mb-2"></div>
                    <div className="flex justify-center">
                      <LoginGoogle />
                    </div>
                    <p className="text-gray-400 my-3">Entre com sua conta Google 3A</p>
                   
                </div>

                <Form />

            </div>
    )
}