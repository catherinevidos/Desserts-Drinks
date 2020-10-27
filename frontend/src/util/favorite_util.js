import axios from 'axios';

export const addFavorite = stopId => {
    return axios.post(`api/favorites/add_favorite/${stopId}`)
}

export const saveFavStop = (stopId) => {
  return axios.patch(`api/users/fav_spots?${stopId}`);
};