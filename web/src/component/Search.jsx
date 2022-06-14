import { FaSearch } from 'react-icons/fa';

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
      <div className="photo-name" />
      <div className="search-input-icon">
        <FaSearch className="search-icon" />
        <input
          className="search"
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
