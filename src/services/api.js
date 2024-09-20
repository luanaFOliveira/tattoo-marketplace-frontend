import axios from 'axios';
const api = { 
    
    fetchProducts: async () => { 
        const URL = 'https://dummyjson.com/products'; 
        return await axios.get(URL) 
            .then((res) => res) 
            .catch((err) => err) 
    } 
} 
export default api;