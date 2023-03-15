import {BASE_URL} from '../Utils/constants';

export const getProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson;
    } else {
      return [];
    }
  } catch (err) {
    return [];
  }
};
