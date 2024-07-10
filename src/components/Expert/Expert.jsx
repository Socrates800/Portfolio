import React from 'react'
import "./Expert.css"
import img1 from './html-5.png'
import img2 from './css-3.png'
import img3 from './js.png'
import img4 from './nodejs.png'
import img5 from './physics.png'
import img6 from './php.png'
import img7 from './wordpress.png'
import img8 from './bootstrap.png'
import img9 from './ruby.png'
import img10 from './database.png'
import img11 from './tailwind-css.png'
import img12 from './c.png'
import img13 from './python.png'
// import img10 from './database.png'
// import img10 from './database.png'














const Expert = () => {
  return (
    <div className='Expert-main'>
        <div>
          
            <h1>Expert in Software</h1>
        </div>
        <div className='div-1'>
            <div><img src={img1} alt="" /><p>HTML</p>
            </div>
            <div><img src={img2} alt="" /><p>CSS</p>
            </div>
            <div><img src={img3} alt="" /><p>Javascript</p>
            </div>
            <div><img src={img4} alt="" /><p>NodeJs</p>
            </div>
            <div><img src={img5} alt="" /><p>React</p>
            </div>
            <div><img src={img6} alt="" /><p>PHP</p>
            </div>





        </div>
        <div className='div-2'>
        
            <div><img src={img7} alt="" /><p>Wordpress</p></div>
            <div><img src={img8} alt="" /><p>Bootstrap</p></div>
            <div><img src={img9} alt="" /><p>Ruby</p></div>
            <div><img src={img10} alt="" /><p>MongoDB</p></div>
            <div><img src={img11} alt="" /><p>Tailwind</p></div>
            <div><img src={img12} alt="" /><p>C++</p></div>
            <div><img src={img13} alt="" /><p>Python</p></div>
        </div>
      




    </div>
  )
}

export default Expert