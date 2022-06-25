import { FaGoogle, FaRegEnvelope } from "react-icons/fa"
import { MdLockOutline } from "react-icons/md"

export default function Form() {
    return (
    <div className="flex flex-col items-center">
        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
            <FaRegEnvelope className="text-gray-400 mr-2" />
            <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
        </div>
        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
            <MdLockOutline className="text-gray-400 mr-2" />
            <input type="password" name="password" placeholder="password" className="bg-gray-100 outline-none text-sm flex-1" />
        </div>
        <div className="flex justify-between w-64 mb-5">
            <label className="flex items-center text-xs">
                <input type="checkbox" name="remember" className="mr-1" />Remember me
            </label>
            <a href="#" className="text-xs">Esqueceu sua senha?</a>
        </div>
        <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-bold text-white hover:bg-white hover:text-zinc-900">
            Sign In</a>
    </div>
    )
}