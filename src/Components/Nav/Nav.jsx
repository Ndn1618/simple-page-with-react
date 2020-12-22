import { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Nav.css'
import Logo from '../../img/logo.png'

function Nav() {

  const history = useHistory()

  const navRef = useRef()

  useEffect(() => {
    const ref = navRef.current

    const ro = new ResizeObserver((entries) => {
      console.log(entries[0].contentRect.height)
      document.body.style.setProperty('--nav-height', (entries[0].contentRect.height) * 2 + 'px')
    })

    ro.observe(ref)
  }, [])

  return (
    <>
      <header ref={navRef} className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <button className="logo">
                  <img src={Logo} alt="Softy Pinko" />
                </button>
                <ul className="nav">
                  <li><button onClick={() => history.push('/')} className="active">Home</button></li>
                  <li><button onClick={() => history.push('/about')}>About</button></li>
                  <li><button onClick={() => history.push('/workprocess')}>Work Process</button></li>
                  {/* <li><button href="#testimonials">Testimonials</button></li>
                  <li><button href="#pricing-plans">Pricing Tables</button></li>
                  <li><button href="#blog">Blog Entries</button></li>
                  <li><button href="#contact-us">Contact Us</button></li> */}
                </ul>
                <button className='menu-trigger'>
                  <span>Menu</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Nav