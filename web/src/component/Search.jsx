/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Search = () => {
  const searchPhotos = () => {
    let inputText = '';
    const userInput = document.querySelector('#input-photo');
    const filterPhotos = userInput.value.toUpperCase();
    const photoDetails = document.querySelector('.photo-name');
    [...photoDetails].forEach((country) => {
      const temp = country;
      inputText = temp.textContent || temp.innerText;
      if (inputText.toUpperCase().indexOf(filterPhotos) > -1) {
        temp.style.display = '';
      } else {
        temp.style.display = 'none';
      }
    });
  };

  return (
    <>
      <div className="photo-name relative" />
      <div className=" flex gap-x-10 items-center text-[18px] search-input-icon w-[100%] absolute left-[140px] mt-[50px]">
        <h2>Filter:</h2>
        <div className="flex gap-x-5 items-center">
          <input type="checkbox" id="startDate" />
          <label htmlFor="startDate">Start Date</label>
        </div>
        <div className="flex gap-x-5 items-center">
          <input type="checkbox" id="endDate" />
          <label htmlFor="endDate">End Date</label>
        </div>
        <input
          className="search w-[60%] border-0 rounded-[30px] py-4 px-10 bg-[#062150] text-[#fc3d21]"
          type="text"
          id="input-photo"
          placeholder="Search Photos..."
          onKeyDown={searchPhotos}
        />
      </div>
    </>

  );
};

export default Search;
