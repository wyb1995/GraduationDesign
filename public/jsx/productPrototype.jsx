import React from 'react';
import Header from './header.jsx';
import CaroudelFigure from './caroudelFigure.jsx';
import Footer from './footer.jsx';
require('../css/postgraduateTraining.css');
let productPrototype = require('../../file/productPrototype');
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

class ProductPrototype extends React.Component {
  render() {
    function content() {
      let reg = /<embed (.*)><\/embed>/g;
      let homeFileArray = productPrototype.split(reg);
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
              <span className="span-5">刑侦视频\图像处理与分析系统产品孵化基地</span>
            </p>
            <p>
              <span className="span-6">Forensic video image processing and analysis system product incubation base</span>
            </p>
            <div className="tab">
              <div ref="container" className="content">
                <div id="introduction-1" dangerouslySetInnerHTML={content()}>
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

export default ProductPrototype;
