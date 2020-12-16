export const SET_USERS = 'SET_USERS';
export const SET_SELECTED_USER_ID = 'SET_SELECTED_USER_ID';
export const SET_ALBUMS = 'SET_ALBUMS';

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    dispatch({
      type: SET_USERS,
      payload: data,
    });
  } catch (e) {
    console.error(e);
  }
};

export const setSelectedUserId = (userId) => (dispatch) => {
  dispatch({
    type: SET_SELECTED_USER_ID,
    payload: userId,
  });
};

export const fetchUserAlbums = (userId) => async (dispatch) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
    const data = await response.json();

    dispatch({
      type: SET_ALBUMS,
      payload: data,
    });
  } catch (e) {
    console.error(e);
  }
};
