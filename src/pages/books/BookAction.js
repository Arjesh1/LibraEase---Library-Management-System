import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore"
import { db } from "../../config/firebase-config"
import { toast } from "react-toastify"
import { setBook } from "./BookSlice"
import { setModalShow } from "../../system/systemSlice"
import { setBurrowHistory } from "./BookSlice"


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


// burrowing book section

export const createNewBurrowAction = (obj) => async(dispatch) =>{
    try {
        const docSnap = await addDoc(collection(db, "burrow_history" ), obj)
        if(docSnap?.id){
            toast.success("Burow has been successful.")

            //update the book
            const updateObj = {
                isAvailable: false,
                availableFrom: obj.returnAt,
                id: obj.bookId,
            }





            // dispatch(updateBookAction(updateObj));
            return;
        }
        toast.error("Unable to burrow book at this time. Try back again later")

        
    } catch (error) {
        console.log(error);
        toast.error(error.message)
        
    }
}

//import burrow record
export const getBurrowBookAction = (userId) => async(dispatch) =>{
    try {
        const q = query(collection(db, "burrow_history"), where ("userId" , "==", userId))
        const docSnapShot = await getDocs(q)

        let burrow = []                     



        docSnapShot.forEach((doc) =>{
            const id = doc.id
            const data = doc.data()

            burrow.push({
                ...data,
                id
            })
        })

       

        dispatch(setBurrowHistory(burrow))
        
    } catch (error) {
        
        toast.error(error.message)
        
    }
}


//return book

export const returnBookAction = ({id, bookId, userId}) => async (dispatch) =>{

    try {

        //update burrow-history

        const updateBurrowHistoryObj = {
            returnAt: Date.now(),
            hasReturned: true,
    }

    const updateBookObj = {
        availableFrom: null,
        isAvailable: true,
}
    await setDoc(doc(db,'burrow_history', id), updateBurrowHistoryObj, {merge:true})



        // update book table

        await setDoc(doc(db,'books', bookId), updateBookObj, {merge:true})
toast.success("Book has been returned.")

        dispatch(getAllBookAction())
        dispatch(getBurrowBookAction(userId))
        
    } catch (error) {
        console.log(error);
        toast.error(error.message)
        
    }
}
