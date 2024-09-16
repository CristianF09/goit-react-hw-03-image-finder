const API_KEY = '44945443-a87852da5247dab1dc66b1659';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const response = await fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  
  const data = await response.json();

  // Check if data.hits is an array before mapping
  if (!Array.isArray(data.hits)) {
    return []; // Return an empty array if no images are found
  }

  return data.hits.map(hit => ({
    id: hit.id,
    webformatURL: hit.webformatURL,
    largeImageURL: hit.largeImageURL
  }));
};