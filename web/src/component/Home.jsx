/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../redux/media/media';

const Home = ({ items }) => {
  const [photos, setPhotos] = useState(items);
  // const [search, setSearch] = useState('');

  const mediaPhoto = useSelector((state) => state.photosReducer.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  return (
    <div>
      <h1>NASA Media Gallery</h1>
      {mediaPhoto && mediaPhoto.map((preview) => (
        <div
          key={preview.data.id[0].nasa_id}
          thumbnailUrl={preview.links[0].href}
          nasa_id={preview.data.id[0].nasa_id}
        >
          HI
        </div>
      ))}
    </div>
  );
};

export default Home;
