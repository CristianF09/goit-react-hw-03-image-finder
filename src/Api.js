const API_KEY = '44945443-a87852da5247dab1dc66b1659'; // Ensure this is your valid API key
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok'); // Throw an error if the response is not ok
    }

    const data = await response.json();

    console.log('API Response:', data); // Log the API response for debugging

    // Ensure that data.hits is an array
    if (!Array.isArray(data.hits)) {
      console.warn('Expected hits to be an array');
      return []; // Return an empty array if hits is not an array
    }

    return data.hits.map(hit => ({
      id: hit.id,
      webformatURL: hit.webformatURL,
      largeImageURL: hit.largeImageURL
    }));
  } catch (error) {
    console.error('Error fetching images:', error);
    return []; // Return an empty array in case of an error
  }
};