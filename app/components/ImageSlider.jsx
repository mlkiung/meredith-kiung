import React, { Component } from 'react'

class ImageSlider extends Component {
  componentDidMount() {
    $('.carousel.carousel-slider').carousel({fullWidth: true})
  }

  render() {
    const images = this.props.images
    return (
      <div className="carousel carousel-slider">
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

// import React, { Component } from 'react'

// class ImageSlider extends Component {
//   componentDidMount() {
//     $('.slider').slider()
//   }

//   render() {
//     const images = this.props.images

//     return (
//       <div className="slider">
//         <ul className="slides">
//           {images && images.map((image, i) => {
//             return (
//               <li key={i}>
//                 <img src={image} className="image-slider-img" />
//               </li>
//             )
//           })}
//         </ul>
//       </div>
//     )
//   }
// }

// export default ImageSlider
