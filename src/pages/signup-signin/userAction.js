import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "../../config/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "./userSlice";

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
    toast.error(error.messge);
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
