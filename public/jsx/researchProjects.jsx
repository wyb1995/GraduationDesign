import React from 'react';
import Header from './header.jsx';
import CaroudelFigure from './caroudelFigure.jsx';
import Footer from './footer.jsx';
let researchProjects = require('../../file/researchProjects');
let marked = require('marked');
require('../css/researchProjects.css');
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

class ResearchProjects extends React.Component {
  render() {
    function content() {
      let reg = /<embed (.*)><\/embed>/g;
      let homeFileArray = researchProjects.split(reg);
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
              <span className="span-5">实验室科研项目</span>
            </p>
            <p>
              <span className="span-6">Laboratory research projects</span>
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

export default ResearchProjects;
