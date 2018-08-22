import { auth, db } from "../firebase/index";

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
});

export const registerUser = (email, password) => {
  return auth
    .doCreateUserWithEmailAndPassword(email, password)
    .then(authUser => {
      db.doCreateUser(authUser.user.uid, email);
    })
    .then(function(snap) {
      console.log("The Snap  " + snap);
    })
    .catch(error => {
      console.log(" error " + error);
    });
  // console.log("Error creating a user " + error);
};

export const loginUser = (email, password) => {
  return auth.doSignInWithEmailAndPassword(email, password);
};

export function forgotPassword(email) {
  return auth
    .doPasswordReset(email)
    .then(() => {
      window.alert("Check your email for reset link.");
    })
    .catch(error => {
      console.log("error in password reset of " + error);
    });
}
