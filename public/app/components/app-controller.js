import AccountService from './services/account-service.js'
import ContentService from './services/content-service.js'

let _aS = new AccountService()
let _cS = new ContentService()

// private account methods
function drawRegLog() {
  let regLogTemplate = `
    <div class='container-fluid'>
      <div class="header-r row"> 
        <div class="col-12 header">
          <h3 class="title">Threddit</h3>
        </div>
      </div>

      <div id="form" class="body-r row">
        <div class="col-4 offset-4 reg-log-p">
          <h1 class="title-sm">Welcome!</h1>

          <div class="divider"></div>      
          
          <div class="options row">
            <button class="btn btn-info" style="margin: 5px" onclick="app.controllers.appController.drawLog()">Login</button>
            <button class="btn btn-info" style="margin: 5px" onclick="app.controllers.appController.drawReg()">Register</button>
          </div>    
        </div>  
      </div>

      <div class="footer-r row">
        <div class="col-12 footer">
          <p class="title-tiny">© Madison Abegglen 2018</p>
        </div>
      </div>
    </div>
  `
  document.getElementById('app').innerHTML = regLogTemplate;
}


// <div></div>

export default class AppController {
  constructor() {
    drawRegLog();
  }

  drawLog() {
    let logTemplate = `
      <div class="col-4 offset-4 reg-log-p">
        <h6 class="title">Log into Threddit</h6>

        <div class="divider"></div>

        <form class="form">
          <div class="form-group">
            <label for="uname" class="title-sm"><b>User Name</b></label>
            <input class="form-control square" type="text" placeholder="Enter username" name="uname" />
          </div>
          <div class="form-group">
            <label for="pword" class="title-sm"><b>Password</b></label>
            <input class="form-control square" type="text" placeholder="Enter password" name="pword" />
          </div>
          <div class="form-group">  
            <button type="submit" class="btn btn-info">Login</button>
          </div>
        </form>

        <div class="divider"></div>

        <div class="options">
          <p>Don't have an account?</p>
          <button onclick="app.controllers.appController.drawReg()" class="btn btn-info">Join Today</button>
        </div>
      </div>
    `
    document.getElementById('form').innerHTML = logTemplate;
    document.querySelector('.reg-log-p').style.height = "55vh";
    document.querySelector('.reg-log-p').style.marginTop = "12.5vh";
  }

  drawReg() {
    let regTemplate = `
      <div class="col-4 offset-4 reg-log-p">
        <h6 class="title">Register to Threddit</h6>

        <div class="divider"></div>

        <form class="form">
          <div class="form-group">
            <label for="uname" class="title-sm"><b>User Name</b></label>
            <input class="form-control square" type="text" placeholder="Enter username" name="uname" />
          </div>
          <div class="form-group">
            <label for="email" class="title-sm"><b>Email</b></label>
            <input class="form-control square" type="text" placeholder="Enter your email" name="email" />
          </div>
          <div class="form-group">
            <label for="pword" class="title-sm"><b>Password</b></label>
            <input class="form-control square" type="text" placeholder="Enter password" name="pword" />
          </div>
          <div class="form-group">  
            <button type="submit" class="btn btn-info">Register</button>
          </div>
        </form>

        <div class="divider"></div>

        <div class="options">
          <p>Already have an account?</p>
          <button onclick="app.controllers.appController.drawLog()" class="btn btn-info">Login</button>
        </div>
      </div>
    `
    document.getElementById('form').innerHTML = regTemplate;
    document.querySelector('.reg-log-p').style.height = "70vh"
    document.querySelector('.reg-log-p').style.marginTop = "5vh"
  }
}