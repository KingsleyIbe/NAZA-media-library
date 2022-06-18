import '@testing-library/jest-dom/extend-expect';
import fetchedData from '../Mock/getSearchPhotoData';

describe('test fetched data', () => {
  it('test fetching photo title', async () => {
    await fetchedData().then((data) => expect(data.data[0].title).toBe('Image 02_32_18_33'));
  });
  it('test fetched photo location', async () => {
    await fetchedData().then((data) => expect(data.data[0].location).toBe('Stennis Space Center'));
  });

  it('test fetched photo description_508', async () => {
    await fetchedData().then((data) => expect(data.data[1].description_508).toBe('liquid oxygen can be seen venting near the top of the installed core stage'));
  });
});
