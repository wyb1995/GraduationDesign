import React from 'react';
import {Link} from 'react-router';
require('../css/footer.css');

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
          <ul className="nav navbar-nav">
            <li className="active li"><a href="#">首页</a></li>
            <li className="li"><Link to="/researchDirections">研究方向</Link></li>
            <li className="li"><Link to="/teamMembers">团队成员</Link></li>
            <li className="li"><Link to="/researchProjects">科研项目</Link></li>
            <li className="li"><Link to="/postgraduateTraining">研究生培养</Link></li>
            <li className="li"><Link to="/notice">公告＆通知</Link></li>
            <li className="li"><Link to="/productPrototype">产品原型</Link></li>
          </ul>
        </div>
        <div className="footer-1">
          西安邮电大学    网站管理系统  Copyright © 2012-2030  ICP备案号:  陕ICP备16899168号  技术支持：www_ldx@163.com
        </div>
      </div>
    )
  }
}

export default Footer;
