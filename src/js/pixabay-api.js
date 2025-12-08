import axios from 'axios';

const api = '53514626-0b1a9606e501b3bd45a679ad3';
const baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
  const per_page = 15;
  const currentPage = page ?? 1;

  try {
    const res = await axios.get(baseURL, {
      params: {
        key: api,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: currentPage,
        per_page: per_page,
      },
    });

    return res.data;
  } catch (err) {
    console.error('Error', err);
  }
}
