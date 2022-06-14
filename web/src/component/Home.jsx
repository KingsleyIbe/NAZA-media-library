/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchPhotos } from '../redux/media/media';

const Home = () => {
  const photos = useSelector((state) => state.photosReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  return (
    <>
      <h1>NASA Media Gallery</h1>
      {photos && photos.map((photo) => (
        <div
          key={uuidv4()}
        >
          <img src={photo.links[0].href} alt={photo.data.title[0].text} />
        </div>
      ))}
    </>
  );
};

export default Home;
