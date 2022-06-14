// /* eslint-disable array-callback-return */
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// // import NavBar from '../navbar/NavBar';
// import Photo from './Photo';
// import { fetchPhotos } from '../redux/media/media';

// const ShowMedia = () => {
//   const movies = useSelector((state) => state.moviesReducer.movies);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchPhotos());
//   }, []);

//   return (
//     <>
//       {/* <NavBar /> */}
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3
//  gap-8 py-24 pl-20 md:pl-32 pr-4">
//         {movies
//           && movies.map((photo) => (<Photo key={photo.id} photo={photo} />))}
//       </div>
//     </>
//   );
// };

// export default ShowMedia;
