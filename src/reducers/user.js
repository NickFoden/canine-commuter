const initialState = {
  currentUserProps: {}
};

// The user profile reducer to store the user profile state
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_USER_PROPS": {
      return Object.assign({}, state, {
        currentUserProps: action.user
      });
    }
    case "REMOVE_CURRENT_USER_PROPS": {
      return Object.assign({}, state, {
        currentUserProps: { uid: null }
      });
    }

    default:
      return state;
  }
}
