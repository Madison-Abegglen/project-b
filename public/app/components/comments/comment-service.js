const projApi = axios.create({
  baseURL: '/api/comments',
  timeout: 3000
});

let _comments = []

export default class CommentService() { }