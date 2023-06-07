import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "../../config/firebase-config";
import { getAuth, deleteUser, signInWithEmailAndPassword } from "firebase/auth";
import { setMessages, setUser } from "./userSlice";
import { setClient } from "./userSlice";
import { setModalShow } from "../../system/systemSlice";

export const getUserAction = (uid) => async (dispatch) => {
  try {
    // get user by id from firebase

    const docSnap = await getDoc(doc(db, "user", uid));
    //dispatch user to the reduxt

    if (docSnap.exists()) {
      const user = { ...docSnap.data(), uid };
      dispatch(setUser(user));
    }
  } catch (error) {
    toast.error("Something went wrong. Please try again later.");
  }
};
//create new user
export const loginUser = (data) => async (dispatch) => {
  try {
    const pendingUser = signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    toast.promise(pendingUser, {
      pending: "Please wait...",
    });

    const { user } = await pendingUser;

    if (user.uid) {
      dispatch(getUserAction(user.uid));
    }
  } catch (error) {
    toast.error(error.message);
  }
};

// update profile

export const updateProfileAction = ({id, ...rest}) => async(dispatch) =>{
  try {
    await setDoc(doc(db, "user", id), rest, {merge:true});
    toast.success(
      "Your account has been updated successfull."
    );
    dispatch(getUserAction(id))
    
  } catch (error) {
    toast.error("Account update failed. Please contact system administrator.")
    console.log(error.message);
    
  }
}

//get client details

export const getAllClientAction = () => async(dispatch) =>{
  try {
      //define search query
      const q = query(collection(db, "user"))

      //run query to get data
      let clients = []
      const querySnapShot= await getDocs(q)

      //add book id to the data
      querySnapShot.forEach((doc) =>{
        clients.push({
              ...doc.data(),
              id:doc.id
    
          })
      })

      dispatch (setClient(clients))
      
  } catch (error) {
      console.log("Something went wrong. Please try again later.");
      
  }
}


//update client action
export const updateClientAction = ({id, ...rest}) => async(dispatch) => {
  try {
      const docRef = await setDoc(doc(db, "user", id), rest, {merge: true})
      
      
          toast.success("User details has been updated")
          dispatch(getAllClientAction());
          dispatch(setModalShow(false))
          return;
      
      

    
      
  } catch (error) {
      toast.error("Unable to update user details at this time. Try back again later")
      
  }
}

//delete user action

export const deleteUserAction = (id) => async(dispatch) => {
console.log(id)
  try {

       await deleteDoc(doc(db, "user", id))

       dispatch(getAllClientAction())
      dispatch(setModalShow(false))
      
      
      
          return;
      
  } catch (error) {
    console.log(error.message)
      toast.error("Something went wrong. Please try again later.")
      
  }

}

//send message
export const addMessageAction = (form) => async(dispatch) => {
  try {
      const docRef = await addDoc(collection(db, "messages"), form)
      
      if(docRef?.id){
          toast.success("Your message has been sent.")
          // dispatch(getAllMessageAction());
        
          return;
      }
      toast.error("Unable to send message at this time. Try back again later")

    
      
  } catch (error) {
      console.log(error);
      
  }
}

// get message to dashboard
export const getAllMessageAction = () => async(dispatch) =>{
  try {
      //define search query
      const q = query(collection(db, "messages"))

      //run query to get data
      let messages = []
      const querySnapShot= await getDocs(q)

      //add book id to the data
      querySnapShot.forEach((doc) =>{
        messages.push({
              ...doc.data(),
              id:doc.id
          })
      })
      dispatch (setMessages(messages))
      
  } catch (error) {
      console.log("Something went wrong. Please try again later.");
      
  }
}