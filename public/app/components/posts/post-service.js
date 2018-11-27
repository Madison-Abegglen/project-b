const projApi = axios.create({
  baseURL: '/api/posts',
  timeout: 3000
});

let _posts = []

export default class PostService() { }