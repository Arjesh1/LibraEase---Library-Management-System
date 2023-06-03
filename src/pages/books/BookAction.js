import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore"
import { db } from "../../config/firebase-config"
import { toast } from "react-toastify"
import { setAllBurrowRecord, setBook, setReviews, setSelectedBookReviews } from "./BookSlice"
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
        toast.error("Something went wrong. Please try again later.")
        
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
        toast.error("Something went wrong. Please try again later.")
        
    }
}

//update book action
export const updateBookAction = ({id, ...rest}) => async(dispatch) => {
    try {
        await setDoc(doc(db, "books", id), rest, {merge: true})
        
        
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
        toast.error("Something went wrong. Please try again later.")
        
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

            dispatch(updateBookAction(updateObj));
            return;
        }
        

        
    } catch (error) {
        toast.error("Something went wrong. Please try again later.")
        
    }
}

//update reviewId and ratings
export const updateBurrowBookAction = ({id, userId, ...obj}) => async(dispatch) =>{
    try {
        await setDoc(doc(db, "burrow_history", id ), obj, {
            merge: true

        })

        //fetching all the burrow history of the specific user

        dispatch(getBurrowBookAction(userId))
        
        return;

        
    } catch (error) {
        toast.error("Something went wrong. Please try again later.")
        
    }
}

//import burrow record for logged user
export const getBurrowBookAction = (userId) => async(dispatch) =>{
    try {
        const q = query(collection(db, "burrow_history"), where ("userId" , "==", userId), 
        
        )
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
        
        toast.error("Something went wrong. Please try again later.")
        
    }
}

//import all burrow record 
export const getAllBurrowBookAction = () => async(dispatch) =>{
    try {
        const q = query(collection(db, "burrow_history"))
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

        dispatch(setAllBurrowRecord(burrow)) 

       
        
    } catch (error) {
        
        toast.error("Something went wrong. Please try again later.")
        
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
        toast.error("Something went wrong. Please try again later.")
        
    }
}


// add review
export const addNewReviewAction = (reviewObj) => async(dispatch) => {
    try {
        const {bookId, userId, burrowHistoryId, ratings} = reviewObj
        const docRef = await addDoc(collection(db, "reviews"), reviewObj)
        
        if(docRef?.id){
            toast.success("Review has been added")
            // dispatch(getAllreviewAction());

            const obj = {
                id: burrowHistoryId,
                userId,
                reviewId: docRef.id, 
                ratings,
            }
            dispatch(updateBurrowBookAction(obj))
            dispatch(setModalShow(false))
          
            return;
        }
        toast.error("Unable to add review at this time. Try back again later")

      
        
    } catch (error) {
        console.log(error);
        
    }
}
//import all review record 
export const getAllReviewAction = () => async(dispatch) =>{
    try {
        const q = query(collection(db, "reviews"))
        const docSnapShot = await getDocs(q)

        let reviews = []                     



        docSnapShot.forEach((doc) =>{
            const id = doc.id
            const {userId, ...rest} = doc.data()

            reviews.push({
                ...rest,
                id
            })
        })

        dispatch(setReviews(reviews)) 

       
        
    } catch (error) {
        
        toast.error("Something went wrong. Please try again later.")
        
    }
}

//get reviews for selected books
export const getSelectedBookReviewsAction = (bookId) => async (dispatch) => {
    try {
      const q = query(collection(db, "reviews"), where("bookId", "==", bookId));
  
      const { docs } = await getDocs(q);
  
      
  
      if (docs.length) {
        let reviews = [];
        docs.forEach((doc) => {
          const reviewObj = { id: doc.id, ...doc.data() };
          reviews.push(reviewObj);
        });

       
  
        dispatch(setSelectedBookReviews(reviews));
      }
    } catch (error) {
      //log the error
      console.log(error);
      toast.error(
        "Something went wrong, we could not process your request at the moment, please try again later."
      );
    }
  };


  //delete review
  export const deleteReviewAction = ({reviewId, id, userId}) => async(dispatch) => {

    try {

         await deleteDoc(doc(db, "reviews", reviewId))


        
// make reviewId and ratings from burrow-history null
         const obj = {
            ratings: null,
            reviewId: null, 
            
        }

        await setDoc(doc(db, "burrow_history", id ), obj, {
            merge: true

        })
        

       
        
            toast.success("Review has been deleted")
            dispatch(getAllReviewAction());
            dispatch(getBurrowBookAction(userId))
            
            return;
        
    } catch (error) {
        toast.error("Something went wrong. Please try again later.")
        
    }

}


