import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc } from "firebase/firestore"
import { db } from "../../config/firebase-config"
import { toast } from "react-toastify"
import { setBook } from "./BookSlice"
import { setModalShow } from "../../system/systemSlice"


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

//update book action
export const updateBookAction = ({id, ...rest}) => async(dispatch) => {
    try {
        const docRef = await setDoc(doc(db, "books", id), rest, {merge: true})
        
        
            toast.success("Book has been updated")
            dispatch(getAllBookAction());
            dispatch(setModalShow(false))
            return;
        
        

      
        
    } catch (error) {
        toast.error("Unable to update book at this time. Try back again later")
        
    }
}

//delete book action

export const deleteBookAction = (id) => async(dispatch) => {

    try {

         await deleteDoc(doc(db, "books", id))
        
        
            toast.success("Book has been deleted")
            dispatch(getAllBookAction());
            dispatch(setModalShow(false))
            return;
        
    } catch (error) {
        console.log(error);
        toast.error(error.message)
        
    }

}