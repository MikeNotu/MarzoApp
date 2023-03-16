export const getImage = async (URL: string) => {
  try {
    const response = await fetch(URL);
    if (response.ok) {
      return response;
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};
