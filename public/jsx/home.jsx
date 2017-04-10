import React from 'react';
import Header from './header.jsx';
import CaroudelFigure from './caroudelFigure.jsx';
require('../css/home.css');
let homeFile = require('../../file/home.js');
let marked = require('marked');
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

class Home extends React.Component {
  render() {

    function content() {
      let reg = /<embed (.*)><\/embed>/g;
      let homeFileArray = homeFile.description.split(reg);
      let markedDescArray = homeFileArray.map(des => (marked(des)));
      return {__html: `${markedDescArray[0]} ${markedDescArray[2]}`};
    }

    return (
      <div className="home">
        <Header/>
        <CaroudelFigure/>
        <div className="description">
          <div className="content-1">
            <p className="home-p">
              <span className="span-5">实验室研究内容与项目简介</span>
            </p>
            <p>
              <span className="span-6">Brief introduction of laboratory research content and project</span>
            </p>
            <div className="tab">
              <div ref="container" className="content">
                <div id="introduction" dangerouslySetInnerHTML={content()}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
