import axios from 'axios';

axios.defaults.baseURL = 'https://630b4196ed18e82516507688.mockapi.io';

export const addMaterial = async values => {
    const responce = await axios.post('/materials', values);
    return responce.data;
};