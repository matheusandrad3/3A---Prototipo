
import Image from 'next/image'
import profilePic from '../public/PretaVertical.png'

export default function SignUp() {
    return (
            <div className="w-2/3 bg-orange-300 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
               
                <Image src={profilePic}
                
                />
            </div>
            
            )
}