import axios from 'axios'

const KEY = 'AIzaSyA7eSvXqsdmT0z1lr5KgGGDTZhGcIWWLKM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
