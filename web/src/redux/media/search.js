import axios from 'axios';

const SEARCH_PHOTOS = 'FETCH_PHOTOS';

// App initial state
const initialState = {
  photos: [],
};

// Actions
export const photos = (payload) => ({
  type: SEARCH_PHOTOS,
  payload,
});

export const fetchSearchPhotos = () => async (dispatch) => {
  const res = await axios.get('https://images-api.nasa.gov/search?q=image');
  const newPhotos = res.data.collection.items;
  dispatch(photos(newPhotos));
};

// Reducer
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
