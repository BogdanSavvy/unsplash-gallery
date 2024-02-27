import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
  withCredentials: true,
  params: {
    client_id: 'iWTV6ATbRqXipY2-qbRNNZ1IAf-n8G1YLbU0Aea_ur8',
  },
});

export const getPhotos = (pageNumber = 1) => {
  return instance.get(`/photos?page=${pageNumber}&per_page=50`);
};

export const getPhotoById = (photoId: string) => {
  return instance.get(`/photos/${photoId}`);
};