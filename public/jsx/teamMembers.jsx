import React from 'react';
import Header from './header.jsx';
import CaroudelFigure from './caroudelFigure.jsx';
import Footer from './footer.jsx';
let teamMembers = require('../../file/teanMembers');
let marked = require('marked');
require('../css/teamMembers.css');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

class TeamMembers extends React.Component {
  render(){
    function content() {
      let reg = /<embed (.*)><\/embed>/g;
      let homeFileArray = teamMembers.split(reg);
      let markedDescArray = homeFileArray.map(des => (marked(des)));
      return {__html: `${markedDescArray[0]} ${markedDescArray[2]}`};
    }
    return(
      <div>
        <Header/>
        <CaroudelFigure/>
        <div className="description">
          <div className="content-1">
            <p className="home-p">
              <span className="span-5">实验室成员简介</span>
            </p>
            <p>
              <span className="span-6">Introduction to Lab Members</span>
            </p>
            <div className="tab">
              <div ref="container" className="content">
                <div id="introduction" dangerouslySetInnerHTML={content()}>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default TeamMembers;
