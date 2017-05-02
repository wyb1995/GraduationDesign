import React from 'react';
import {Link} from 'react-router';
require('../css/admin.css');

class Admin extends React.Component {
  render() {
    return (
      <div className="admin">
        <div className="admin-header">
          <h1>科研团队后台管理页面</h1>
        </div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="collapsed navbar-toggle" data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-9" aria-expanded="false"><span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span>
              </button>
              <a href="#" className="navbar-brand">导航栏</a></div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
              <ul className="nav navbar-nav">
                <li className="active li"><Link to="home-editor">首页</Link></li>
                <li className="li"><Link to="/researchDirections-editor">研究方向</Link></li>
                <li className="li"><Link to="/teamMembers-editor">团队成员</Link></li>
                <li className="li"><Link to="/researchProjects-editor">科研项目</Link></li>
                <li className="li"><Link to="/postgraduateTraining-editor">研究生培养</Link></li>
                <li className="li"><Link to="/notice-editor">公告＆通知</Link></li>
                <li className="li"><Link to="/productPrototype-editor">产品原型</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Admin;
