export const SET_CURRENT_USER_PROPS = "SET_CURRENT_USER_PROPS";
export const setCurrentUserProps = user => ({
  type: SET_CURRENT_USER_PROPS,
  user
});

export const REMOVE_CURRENT_USER_PROPS = "REMOVE_CURRENT_USER_PROPS";
export const removeCurrentUserProps = () => ({
  type: REMOVE_CURRENT_USER_PROPS
});

export const loadProfile = userId => {
  firebase
    .database()
    .ref(`users/${userId}`)
    .once("value")
    .then(function(snap) {
      const currentUser = snap.val();
      store.dispatch(setCurrentUserProps(currentUser));
    });
};
