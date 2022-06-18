/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchSearchPhotos } from '../redux/media/search';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.searchReducer);
  // console.log(photos);

  useEffect(() => {
    if (!photos.length) {
      dispatch(fetchSearchPhotos());
    }
  }, []);
  const filteredData = photos.photos.filter((photo) => Object.keys(photo)
    .some((key) => JSON.stringify(photo[key])
      .toLowerCase()
      .includes(searchText.toLocaleLowerCase())));

  return (
    <>
      <div className="countries-con photo-name relative mb-[100px]" />
      <div className=" flex gap-x-10 items-center text-[18px]
     search-input-icon w-[100%] left-[140px] mt-[50px]"
      >
        <h2>Filter:</h2>
        <div className="flex gap-x-5 items-center">
          <input type="checkbox" id="startDate" />
          <label htmlFor="startDate">Start Date</label>
        </div>
        <div className="flex gap-x-5 items-center">
          <input type="checkbox" id="endDate" />
          <label htmlFor="endDate">End Date</label>
        </div>
        <div className="country-name" />
        <div className="search-input-icon ">
          <input
            className="search w-[60%] border-0 rounded-[30px] py-4 px-10 bg-[#062150] text-[#fc3d21]"
            type="text"
            placeholder="Search Photos..."
            id="input-country"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      <div className="flex-items">
        {filteredData.length > 0 && filteredData.map((photo) => (
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
                <p>{photo.data[0].location}</p>
              </div>
              <div className="flex gap-x-4 items-center mb-2">
                <p className="opacity-[0.6]">Photographer: </p>
                <p>{photo.data[0].photographer}</p>
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
    </>

  );
};

export default Search;
