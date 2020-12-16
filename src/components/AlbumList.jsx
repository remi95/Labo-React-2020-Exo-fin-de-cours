import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserAlbums } from '../actions/UserActions';

const AlbumList = () => {
  const { albums, selectedUserId } = useSelector(store => store.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedUserId !== null) {
      dispatch(fetchUserAlbums(selectedUserId));
    }
  }, [selectedUserId]);

  return (
    <div>
      <h2>Albums</h2>

      <ul>
        { albums.map((album) => <li key={album.id}>{ album.title }</li>) }
      </ul>
    </div>
  );
};

export default AlbumList;
