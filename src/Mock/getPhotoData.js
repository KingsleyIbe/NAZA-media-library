import photos from './photoDummyData';

const fetchedData = () => photos().then((data) => data);

export default fetchedData;
