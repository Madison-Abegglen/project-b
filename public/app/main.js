import PostController from './components/posts/post-controller.js'
import CommentController from './components/comments/comment-controller.js'
console.log("app is running")

class App {
  constructor() {
    this.controllers = {
      postController: new PostController()
    }
  }
}

window.app = new App()