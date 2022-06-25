import auth from "firebase/auth"
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";




const useFireBaseAuth = ()=>{
    const router = useRouter()

    const [authUser, setAuthUser] = useState<auth.User | null>(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth;

    
    const handleLogout = () => {

        signOut(auth()).then((res)=>{
            console.log("Você saiu");
            router.push("/");
        });
    };


    const authStateChangedHandler = (authState:any)=>{

        if(!authState){
            console.log("Usuário não logado")
            
            setAuthUser(null)
            setLoading(false)

            router.push("/")
        }
        else{
            console.log("Bem vindo de volta");
            setAuthUser(authState);
            setLoading(false)
        }
    };

    useEffect(()=>{
        const unsubscribe = auth().onAuthStateChanged(authStateChangedHandler);

        return ()=>{
            unsubscribe();
        };
    },[]);

    return {
        user: authUser,
        loading: loading,
        logOut: handleLogout,
    };
};

export default useFireBaseAuth;
