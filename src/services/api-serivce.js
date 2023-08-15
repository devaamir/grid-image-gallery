import axios from 'axios';

const API_BASE_URL = 'https://api.unsplash.com';
const API_KEY = '5S0dr7erxH7NtPoh1o4mKJsG6tseML1wRotiBWoH5NQ';

const ApiService = {
  getPhotos: async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/photos?per_page=35&client_id=${API_KEY}`,
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching photos:', error);
      throw error;
    }
  },
};

export default ApiService;
