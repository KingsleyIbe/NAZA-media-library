import '@testing-library/jest-dom/extend-expect';
import fetchedData from '../Mock/getPhotoData';

describe('test fetched data', () => {
  it('test fetching photo title', async () => {
    await fetchedData().then((data) => expect(data.data[0].title).toBe('Heating Martian Sand Grains'));
  });
  it('test fetched photo nasa_id', async () => {
    await fetchedData().then((data) => expect(data.data[1].nasa_id).toBe('PIA16578'));
  });

  it('test fetched photo description', async () => {
    await fetchedData().then((data) => expect(data.data[1].description).toBe('These maps of the moon show the Bouguer gravity anomalies as measured by NASA GRAIL mission. Red areas have stronger gravity, while blue areas have weaker gravity.'));
  });
});
