import React from 'react';
import Header from './header.jsx';
import CaroudelFigure from './caroudelFigure.jsx';
import Footer from './footer.jsx';
let notice = require('../../file/notice');
require('../css/notice.css');
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

class Notice extends React.Component {
  render() {
    function content() {
      let reg = /<embed (.*)><\/embed>/g;
      let homeFileArray = notice.split(reg);
      let markedDescArray = homeFileArray.map(des => (marked(des)));
      return {__html: `${markedDescArray[0]}`};
    }

    return(
      <div>
        <Header/>
        <CaroudelFigure/>
        <div className="description">
          <div className="content-1">
            <p className="home-p">
              <span className="span-5">研究生科研及其他荣誉</span>
            </p>
            <p>
              <span className="span-6">Postgraduate research and other honors</span>
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

export default Notice;
