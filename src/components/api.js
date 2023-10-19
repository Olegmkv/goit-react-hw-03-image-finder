import axios from 'axios';

const URL = 'https://pixabay.com/api/'
const params = new URLSearchParams({
    key: '39188686-aaef76240829aa5a1004b5869',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: 1,
    q: '',
  })
    
export const fetchGallery = async (page, q) => {
    params.set('page',page);
    params.set('q', q);
    const response = await axios.get(`${URL}?${params}`);
  return response.data;
};