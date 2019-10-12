//Imports
import axios from 'axios';

//Export
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});