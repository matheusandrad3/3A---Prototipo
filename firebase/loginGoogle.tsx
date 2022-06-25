import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useRouter } from "next/router";



const LoginGoogle = () => {

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const router =useRouter();


    const handleLogin = ()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
       
          const user = result.user;

          console.log(user);

          router.push("/home");
          
        }).catch((error) => {
          
            console.log(error)
        });
    };
  return (
    <>
      <a href="#" className="border-2 border-sky-600 rounded-full p-2 mx-2">
        <FcGoogle onClick={handleLogin}/>
      </a>
    </>
  );
};

export default LoginGoogle;
