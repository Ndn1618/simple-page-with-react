import { useHistory } from 'react-router-dom'
import './Home.css'

function Home() {

  const history = useHistory()

  return (
    <>
      <div className="welcome-area" id="welcome">
        <div className="header-text">
          <div className="container">
            <div className="row">
              <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                <h1>We provide the best <strong>strategy</strong> to grow up your <strong>business</strong></h1>
                <p>Softy Pinko is a professional Bootstrap 4.0 theme designed by Template Mo
                for your company at absolutely free of charge</p>
                <button className="main-button-slider" onClick={() => history.push('/about')}>Discover More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home