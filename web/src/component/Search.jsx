// /* eslint-disable jsx-a11y/label-has-associated-control */
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
// import { fetchPhotos } from '../redux/media/media';

// const Search = () => {
//   const photos = useSelector((state) => state.photosReducer);
//   console.log(photos);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchPhotos());
//   }, []);

//   const [search, setSearch] = useState('');
//   const [loading, setLoading] = useState(false);

//   const searchPhotos = (e) => e.filter((e) => e.data[0].title.toLowerCase().indexOf(search) > -1);

//   return (
//     <>
//       <div className="photo-name relative mb-[100px]" />
//       <div className=" flex gap-x-10 items-center text-[18px] search-input-icon w-[100%] left-[140px] mt-[50px]">
//         <h2>Filter:</h2>
//         <div className="flex gap-x-5 items-center">
//           <input type="checkbox" id="startDate" />
//           <label htmlFor="startDate">Start Date</label>
//         </div>
//         <div className="flex gap-x-5 items-center">
//           <input type="checkbox" id="endDate" />
//           <label htmlFor="endDate">End Date</label>
//         </div>
//         <input
//           className="search w-[60%] border-0 rounded-[30px] py-4 px-10 bg-[#062150] text-[#fc3d21]"
//           type="text"
//           placeholder="Search Photos..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           onKeyDown={searchPhotos}
//         />
//       </div>
//       <div className="flex-items mt-[100px]">
//         {loading ? (
//           <h4>Loading...</h4>
//         ) : (
//           photos.filter((value) => {
//             if (search === '') {
//               return value;
//             } if (value.data[0].title.toLowerCase().includes(search.toLowerCase)) {
//               return value;
//             }
//           })
//         )}
//         {photos.photos.length > 0 && photos.photos.map((photo) => (
//           <div
//             key={uuidv4()}
//             className=""
//           >
//             <div className="p-10 mt-10 bg-[#062150] rounded-[30px] mx-[30px] max-w-[600px] max-h-[700px]">
//               <div className="">
//                 <img src={photo.links[0].href} alt={photo.data[0].title} className="w-[500px] m-0 h-[300px] mb-2" />
//               </div>
//               <div className="flex gap-x-4 items-center mb-2">
//                 <p className="opacity-[0.6]">Title: </p>
//                 <p>{photo.data[0].title}</p>
//               </div>
//               <div className="flex gap-x-4 items-center mb-2">
//                 <p className="opacity-[0.6]">Location: </p>
//                 <p>{photo.data[0].center}</p>
//               </div>
//               <div className="flex gap-x-4 items-center mb-2">
//                 <p className="opacity-[0.6]">Photographer: </p>
//                 <p>{photo.data[0].secondary_creator}</p>
//               </div>
//               <div className="flex gap-x-4 items-center mb-2 w-[500px]">
//                 <p className="opacity-[0.6]">Keywords: </p>
//                 <p>{photo.data[0].keywords}</p>
//               </div>
//               <div className="flex gap-x-4 items-center mb-2">
//                 <p className="opacity-[0.6]">Date: </p>
//                 <p>{photo.data[0].date_created}</p>
//               </div>
//               <div className=" gap-x-4 items-center mt-5 w-[500px] card">
//                 <p className="opacity-[0.6]">Description: </p>
//                 <p className="desc">{photo.data[0].description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>

//   );
// };

// export default Search;
