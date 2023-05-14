import { addDoc, collection, doc, getDocs, query } from "firebase/firestore"
import { db } from "../../config/firebase-config"
import { toast } from "react-toastify"
import { setBook } from "./BookSlice"


//get book action

export const getAllBookAction = () => async(dispatch) =>{
    try {
        //define search query
        const q = query(collection(db, "books"))

        //run query to get data
        let books = []
        const querySnapShot= await getDocs(q)

        //add book id to the data
        querySnapShot.forEach((doc) =>{
            books.push({
                ...doc.data(),
                id:doc.id
            })
        })
        dispatch (setBook(books))
        
    } catch (error) {
        console.log(error);
        
    }
}


// add new book action
export const addNewBookAction = (bookObj) => async(dispatch) => {
    try {
        const docRef = await addDoc(collection(db, "books"), bookObj)
        
        if(docRef?.id){
            toast.success("Book has been added")
            dispatch(getAllBookAction());
            return;
        }
        toast.error("Unable to add book at this time. Try back again later")

      
        
    } catch (error) {
        console.log(error);
        
    }
}