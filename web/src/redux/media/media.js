import axios from 'axios';

const FETCH_PHOTOS = 'FETCH_PHOTOS';

// App initial state
const initialState = {
  photos: [],
};

// Actions
export const photos = (payload) => ({
  type: FETCH_PHOTOS,
  payload,
});

export const fetchPhotos = () => async () => {
  const res = await axios.get('https://images-api.nasa.gov/search?media_type=image');
  // const newPhotos = res.data.data.photos;
  const preview = await res.json();
  const { items } = preview.data.collection;
  console.log(res);
  // dispatch(photos(newPhotos));
  return {
    props: { items },
  };
};

// Reducer
const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return { photos: [...action.payload] };
    default:
      return state;
  }
};

export default photosReducer;
