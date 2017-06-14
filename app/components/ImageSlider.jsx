import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ImageSlider extends Component {
  componentDidMount() {
    // ALL THREE OF THESE METHODS WORK
    // $('.carousel.carousel-slider').carousel({indicators: true})
    // $(ReactDOM.findDOMNode(this)).carousel({indicators: true})
    this.$node = $(this.refs.imageSlider)
    this.$node.carousel({indicators: true})
  }

  render(props) {
    const images = this.props.images
    return (
      <div ref="imageSlider" className="carousel carousel-slider">
        {images && images.map((image, i) => {
          const idxStr = i.toString()
          return (
            <a key={i} className="carousel-item" href={`#${idxStr}!`}>
              <img src={image} />
            </a>
          )
        })}
      </div>
    )
  }
}

export default ImageSlider


/*
/Users/mlkiung/Desktop/programming-projects/meredithkiung/public/images/CupOfSugar/CupOfSugarLogo_052917_v5.jpg, /Users/mlkiung/Desktop/programming-projects/meredithkiung/public/images/CupOfSugar/CupOfSugarLogoReduced_052917_v6.jpg, /Users/mlkiung/Desktop/programming-projects/meredithkiung/public/images/CupOfSugar/CupOfSugar Wireframes_052717.001.jpeg, /Users/mlkiung/Desktop/programming-projects/meredithkiung/public/images/CupOfSugar/CupOfSugar Wireframes_052717.002.jpeg, /Users/mlkiung/Desktop/programming-projects/meredithkiung/public/images/CupOfSugar/CupOfSugar Wireframes_052717.003.jpeg, /Users/mlkiung/Desktop/programming-projects/meredithkiung/public/images/CupOfSugar/CupOfSugar Wireframes_052717.004.jpeg,
/Users/mlkiung/Desktop/programming-projects/meredithkiung/public/images/CupOfSugar/CupOfSugar Wireframes_052717.005.jpeg,
/Users/mlkiung/Desktop/programming-projects/meredithkiung/public/images/CupOfSugar/CupOfSugar Wireframes_052717.006.jpeg,
/Users/mlkiung/Desktop/programming-projects/meredithkiung/public/images/CupOfSugar/CupOfSugar Wireframes_052717.007.jpeg,
/Users/mlkiung/Desktop/programming-projects/meredithkiung/public/images/CupOfSugar/CupOfSugar Wireframes_052717.008.jpeg,
/Users/mlkiung/Desktop/programming-projects/meredithkiung/public/images/CupOfSugar/CupOfSugar Wireframes_052717.009.jpeg

*/
