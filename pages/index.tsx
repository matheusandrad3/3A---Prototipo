import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"



export default function Home() {
  return (
    <div className="flex flex-col win-h-screen py-2 bg-gray-100">
      <main className='flex flex-col  items-center justify-center w-full flex-1 px-20 text-center '>
        <div className="bg-zinc-900 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <SignIn />
          <SignUp />
        </div>
      </main>
      

    </div>



  )
}
