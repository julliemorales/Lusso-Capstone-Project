import axios from 'axios';

const lussoApi = process.env.REACT_APP_API_URL;

export const getAllProducts = async (category) => {
  return await axios.request({
    // ...gamesList,
    url: `${lussoApi}/products`,
    // params: { 'sort-by': 'release-date', category },
  });
};

export const getSingleProduct = async (id) => {
  return await axios.request({
    // ...gamesList,
    url: `${lussoApi}/products/${id}`,
    // params: { id },
  });
};
