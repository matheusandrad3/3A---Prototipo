
import Img from "next/image"
import profilePic from "../public/Branca.png"
import { useState } from "react";
import LogOut from "../firebase/logOut";


const SideBar = ()=>{


    const [open, setOpen] = useState(false);

    
    return(

        <div className="flex">
           <div className={`${open ? "w-60" : "w-20"} h-screen bg-zinc-900 relative`}>
            <Img src={profilePic}
             className="absolute cursor-pointer rounded-full
              -right-3 top-9 w-7 border-2 border-zinc-900"
              onClick={() => setOpen(!open) }
               />                                                                                                                                
           </div>
           <div className="p-7 text-2x1 font-semibold flex-1 h-screen">
            <h1>Home Page</h1>
           </div>

           <LogOut />
        </div>

    )

}

export default SideBar;