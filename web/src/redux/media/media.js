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

export const fetchPhotos = () => async (dispatch) => {
  const res = await axios.get('https://images-api.nasa.gov/search?media_type=image');
  const newPhotos = res.data.collection.items;
  // console.log(newPhotos);
  dispatch(photos(newPhotos));
  // console.log(photos);
};

// Reducer
const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      console.log(action.payload);
      return [state, ...action.payload];
    default:
      return state;
  }
};

export default photosReducer;
