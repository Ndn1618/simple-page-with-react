import './WorkProcess.css'
import ImageSlider from '../../Components/ImageSlider/ImageSlider'
import images from '../../Components/ImageSlider/ImagesData'

function WorkProcess() {
  return (
    <>
      <section className="mini">
        <div className="mini-content">
          <div className="container">
            <div className="row">
              <div className="offset-lg-3 col-lg-6">
                <div className="info">
                  <h1>Work Process</h1>
                  <p>Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.</p>
                </div>
              </div>
            </div>

            <ImageSlider images={images} />

          </div>
        </div>
      </section>
    </>
  )
}

export default WorkProcess