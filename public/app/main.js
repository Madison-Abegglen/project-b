import AppController from './components/app-controller.js'
console.log("app is running")

class App {
  constructor() {
    this.controllers = {
      appController: new AppController()
    }
  }
}

window.app = new App()