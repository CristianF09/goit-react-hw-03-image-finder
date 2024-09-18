const API_KEY = '44945443-a87852da5247dab1dc66b1659';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query = '', page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.status}`);
    }

    const data = await response.json();

    
    if (!Array.isArray(data.hits) || data.hits.length === 0) {
      return []; 
    }

    return data.hits.map(hit => ({
      id: hit.id,
      webformatURL: hit.webformatURL,
      largeImageURL: hit.largeImageURL,
    }));
    
  } catch (error) {
    console.error('Error fetching images:', error);
    return []; 
  }
};