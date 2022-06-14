/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchPhotos } from '../redux/media/media';

const Home = () => {
  const photos = useSelector((state) => state.photosReducer);
  console.log(photos.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
    // console.log(photos);
  }, []);

  return (
    <>
      <h1>NASA Media Gallery</h1>
      {photos.photos.length > 0 && photos.photos.map((photo) => (
        <div
          key={uuidv4()}
        >
          <div className="p-10 flex flex-col">
            <div className="grid grid-cols-4">
              <img src={photo.links[0].href} alt={photo.data[0].title} className="w-[300px] h-[300px]" />
            </div>
            <p>{photo.data[0].location}</p>
            <p>{photo.data[0].date_created}</p>
            <p>{photo.data[0].description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
