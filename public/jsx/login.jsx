import React from 'react';
require('../css/login.css');

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: ""
    }
  }

  onChangeUserId(event) {
    this.setState({
      userId: event.target.value
    })
  }

  onChangePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  _onSubmit(event) {
    event.preventDefault();
    if(this.state.userId === 'admin' && this.state.password === 'password') {
      location.href = '/#/home';
    }else {
      alert('用户名密码错误');
    }
  }

  render() {
    return(
      <div className="container">
        <div className="loginForm">
          <form className="form-horizontal login" onSubmit={this._onSubmit.bind(this)}>
            <p className="login_title distance">团队管理员登录界面</p>
            <div className="form-group">
              <label htmlFor="userId" className="col-md-2 control-label distance">帐号</label>
              <div className="col-md-10">
                <input type="text" value={this.state.userId} className="form-control distance" id="userId"
                       placeholder="Account"
                       onChange={this.onChangeUserId.bind(this)}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-md-2 control-label distance">密码</label>
              <div className="col-md-10">
                <input type="password" value={this.state.password} className="form-control distance" id="password"
                       placeholder="Password"
                       onChange={this.onChangePassword.bind(this)}/>
              </div>
            </div>
            <div className="form-group">
              <div className="button-center">
                <button type="submit" className="btn btn-primary">登录</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    )
  }
}

export default Login;
