import React, { useState } from "react"
import './ImageSlider.css'

const ImageSlider = ({ images }) => {

  const [index, setIndex] = useState(0)

  const slideRight = () => {
    setIndex((index + 1) % images.length);
    document.body.style.setProperty('--transformX', 'translateX(-25%)')

  }

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }
  }

  return (
    images.length > 0 && (
      <div className='slider-wrapper'>
        <button className='left-button position-absolute' onClick={slideLeft}>{"<"}</button>
        <div className='slider row flex-nowrap'>
          {
            images.map((image) => {
              return (
                <>
                  <div key={image.id} className="image-slider col-md-3 col-sm-6 col-6">
                    <button className="mini-box">
                      <i><img src={image.src} alt="" /></i>
                      <strong>{image.content}</strong>
                      <span>Godard pabst prism fam cliche.</span>
                    </button>
                  </div>
                </>
              )
            })
          }
        </div>
        <button className='right-button position-absolute' onClick={slideRight}>{">"}</button>
      </div>
    )
  )
}

export default ImageSlider