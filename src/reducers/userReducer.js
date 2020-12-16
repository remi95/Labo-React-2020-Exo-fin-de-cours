import { SET_ALBUMS, SET_SELECTED_USER_ID, SET_USERS } from '../actions/UserActions';

const initialState = {
  users: [],
  isLoading: true,
  selectedUserId: null,
  albums: [],
};

const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case SET_SELECTED_USER_ID:
      return {
        ...state,
        selectedUserId: action.payload,
      };
    case SET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    default:
      return initialState;
  }
};

export default userReducer;
