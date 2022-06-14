/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchPhotos } from '../redux/media/media';

const ShowMedia = () => {
  const photos = useSelector((state) => state.photosReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  return (
    <section className="py-10">
      <h1 className="text-center font-extrabold text-[35px]">Welcome to NASA Media Library</h1>
      {photos.photos.length > 0 && photos.photos.map((photo) => (
        <div
          key={uuidv4()}
          className=""
        >
          <div className="p-10 flex flex-col mt-10 bg-[#062150] rounded-[30px] mx-[30px]">
            <div className="grid grid-cols-4">
              <img src={photo.links[0].href} alt={photo.data[0].title} className="w-[300px] h-[300px] mb-2" />
            </div>
            <div className="flex gap-x-4 items-center mb-2">
              <p className="opacity-[0.6]">Title: </p>
              <p>{photo.data[0].title}</p>
            </div>
            <div className="flex gap-x-4 items-center mb-2">
              <p className="opacity-[0.6]">Location: </p>
              <p>{photo.data[0].location}</p>
            </div>
            <div className="flex gap-x-4 items-center mb-2">
              <p className="opacity-[0.6]">Date: </p>
              <p>{photo.data[0].date_created}</p>
            </div>
            <div className=" gap-x-4 items-center mt-5 w-[300px]">
              <p className="opacity-[0.6]">Description: </p>
              <p>{photo.data[0].description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ShowMedia;
