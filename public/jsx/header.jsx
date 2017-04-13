import React from 'react';
import {Link} from 'react-router';
require('../css/header.css');

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="row">
          <div className="header-left col-sm-5">
            <span className="span-1">西安邮电大学</span>
            <span className="span-2">&nbsp;刑侦图像处理中心</span>
          </div>
          <div className="header-right col-sm-5">
            <p className="header-p">
              <span className="span-3">通过科学与技术力量提升人类生活品质!</span>
            </p>
            <p>
              <span className="span-4">Improving the quality of human life through scientific and technical force</span>
            </p>
          </div>
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
                <li className="active li"><a href="#">首页</a></li>
                <li className="li"><Link to="/researchDirections">研究方向</Link></li>
                <li className="li"><Link to="/teamMembers">团队成员</Link></li>
                <li className="li"><Link to="#">科研成果</Link></li>
                <li className="li"><Link to="#">论文管理</Link></li>
                <li className="li"><Link to="#">团队著作</Link></li>
                <li className="li"><Link to="#">产品原型</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
