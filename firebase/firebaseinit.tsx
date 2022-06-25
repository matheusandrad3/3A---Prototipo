import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics"
import { getPerformance } from "firebase/performance"

const firebaseConfig = {

        apiKey: "AIzaSyDuIUkz6cWdeRU1iCnWJGOBRYdlg_D7GPs",
        authDomain: "investimentos-3a.firebaseapp.com",
        projectId: "investimentos-3a",
        storageBucket: "investimentos-3a.appspot.com",
        messagingSenderId: "513724073221",
        appId: "1:513724073221:web:36e54a7b84313d77a9e36c",
        measurementId: "G-5H4WX9T4XT"
      

};

const initMyFirebase = () => {
    
    if (!getApps().length){

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)

    if(typeof window !== "undefined"){
        if("measurementId" in firebaseConfig){
            const analytics = getAnalytics(app)
            const performance = getPerformance(app)
        }
    }

    console.log("Inicie o firebase")

    }else{
        console.log("Firebase ja foi iniciado")
    }
}

export default initMyFirebase;