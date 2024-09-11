import axios from 'axios';

const API_URL = 'https://restcountries.com/v3.1/name/';

const getCountryInfo = async (name) => {
    try {
        const response = await axios.get(`${API_URL}${name}`);
        return response.data; // Return the data directly
    } catch (error) {
        console.error(`Error fetching country info for ${name}:`, error);
        throw new Error('Failed to fetch country information. Please try again later.');
    }
}

export default { getCountryInfo };