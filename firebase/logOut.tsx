import useFireBaseAuth from "../firebase/useAuth";


const LogOut = () => {

    const { user, loading, logOut } = useFireBaseAuth();

    if (loading) {
        return "Carregando por favor espere..."
    }

    return (
        <button className="" type="button" onClick={logOut}>
            LogOut
        </button>
    )
}


export default LogOut;