import React from 'react';

class CaroudelFigure extends React.Component {
  render() {
    return (
      <div className="carousel slide" data-ride="carousel" data-interval="2000">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          <div className="item active">
            <img src="http://0.ss.faisys.com/image/template/banners/2032.jpg?v=20140701" className="img-rounded"/>
          </div>
          <div className="item">
            <img src="http://0.ss.faisys.com/image/template/banners/1762.jpg?v=" className="img-rounded"/>
          </div>
        </div>
        <a className="carousel-control left" href="#myCarousel"
           data-slide="prev">&lsaquo;</a>
        <a className="carousel-control right" href="#myCarousel"
           data-slide="next">&rsaquo;</a>
      </div>
    )
  }
}

export default CaroudelFigure;
