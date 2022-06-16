/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchPhotos } from '../redux/media/media';

const ShowMedia = () => {
  const photos = useSelector((state) => state.photosReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  return (
    <section className="py-10 relative">
      <button type="button" className="bg-[#062150] px-5 py-2 rounded-[10px] absolute left-[40px] mt-5">
        <Link to="/search-media">Search for Photo Here</Link>
        {' '}
      </button>
      <h1 className="text-center font-extrabold text-[35px]">Welcome to NASA Media Library</h1>
      <div className="flex-items">
        {photos.photos.length > 0 && photos.photos.map((photo) => (
          <div
            key={uuidv4()}
            className=""
          >
            <div className="p-10 mt-10 bg-[#062150] rounded-[30px] mx-[30px] max-w-[600px] max-h-[700px]">
              <div className="">
                <img src={photo.links[0].href} alt={photo.data[0].title} className="w-[500px] m-0 h-[300px] mb-2" />
              </div>
              <div className="flex gap-x-4 items-center mb-2">
                <p className="opacity-[0.6]">Title: </p>
                <p>{photo.data[0].title}</p>
              </div>
              <div className="flex gap-x-4 items-center mb-2">
                <p className="opacity-[0.6]">Location: </p>
                <p>{photo.data[0].center}</p>
              </div>
              <div className="flex gap-x-4 items-center mb-2">
                <p className="opacity-[0.6]">Photographer: </p>
                <p>{photo.data[0].secondary_creator}</p>
              </div>
              <div className="flex gap-x-4 items-center mb-2 w-[500px]">
                <p className="opacity-[0.6]">Keywords: </p>
                <p>{photo.data[0].keywords}</p>
              </div>
              <div className="flex gap-x-4 items-center mb-2">
                <p className="opacity-[0.6]">Date: </p>
                <p>{photo.data[0].date_created}</p>
              </div>
              <div className=" gap-x-4 items-center mt-5 w-[500px] card">
                <p className="opacity-[0.6]">Description: </p>
                <p className="desc">{photo.data[0].description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowMedia;
