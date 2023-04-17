import { doc, setDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { db } from "../../config/firebase-config"

const createUserAction = async data =>{
    try {
        await setDoc(doc(db, 'user', data))
    } catch (error) {
        toast.error(error.message)
        
    }
}