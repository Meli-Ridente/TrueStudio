import React from 'react'
import Logo from '../assets/foto1.png'
import arbol from '../assets/foto2.png'
import Img1 from '../assets/portada1.jpeg'
import Img2 from '../assets/portada2.jpeg'
import Img4 from '../assets/Img4.jpeg'
import Img3 from '../assets/portada3.jpeg'
import nails1 from '../assets/nails1.jpeg'
import nails2 from '../assets/nails2.jpeg'
import insta from '../assets/instagram.png'
import face from '../assets/facebook.png'
import whats from '../assets/whatsapp.png'
import namefeed from '../assets/foto1.png'
import instafeed from '../assets/simulacionInsta.jpeg'
import styles from './Home.module.css'
// import InstagramEmbed from 'react-instagram-embed';


const Home = () => {
  return (
    <>
      <div className={styles.Navbar}>
        <ul>
          <li><img src={arbol} width={150}></img></li>
          <li>INICIO</li>
          <li>RESERVA TU CITA</li>
          <li>SERVICIOS</li>
          <li>SOBRE NOSOTROS</li>
          <li>CONTACTO</li>
        </ul>
      </div>
      <div className={styles.lista}>
        <div className={styles.Imagenes}>          
          <img src={Img1} className={styles.Img1}></img>
          <div className={styles.logo2}>
            <img src={Logo} className={styles.logo}></img>
            <img src={Img3} className={styles.Img2}></img>
          </div>
          <img src={Img2} className={styles.Img1}></img>
        </div>
      </div>
      <div className={styles.FirstDiv}>
        <div className={styles.MiddleDiv}>
          <p className={styles.Title}>RESERVA TU CITA</p>
          <p style={{color:'purple', margin: '30px 0'}}>Consulta nuestros horarios, servicios y disponibilidad.</p>
          <button className={styles.boton}>RESERVAS</button>
        </div>
        <div className={styles.MiddleDiv}>
          <p className={styles.Title}>SERVICIOS</p>
          <p style={{color:'purple', margin: '30px 0'}}>Conoce acá nuestros servicios de depilación laser, micropigmentación, limpiezas faciales, manicura rusa, semipermanente, pedicuras y</p>
          <button className={styles.boton}>TRATAMIENTOS</button>
        </div> 
      </div>
      <div className={styles.FirstDiv}>
        <img src={nails1} className={styles.ImgNails}></img>
        <img src={nails2} className={styles.ImgNails}></img>
      </div> 
      <div className={styles.FirstDiv}>
        <div className={styles.SobreNosotros}>
          <p className={styles.Title1}>SOBRE NOSOTROS</p>
          <p style={{color:'white', margin: '30px 0'}}>Truelaser, con el nombre hoy en día de Truestudio, en conjunto con Truenails, nace en el año 2019 cuando su fundadora <b>Jessica Ridente</b>, decide 
            crear su propia empresa de tratamiento laser y manicura.</p>
          <button className={styles.boton2}>SABER MÁS</button>
        </div>
        <div>
          <img src={Img4} className={styles.Img} />
        </div>
      </div>
      <div className={styles.FirstDiv}>
        <div className={styles.MiddleDiv}>
          <p className={styles.Title}>SIGUENOS EN NUESTRAS</p>
          <p className={styles.Titlex}>REDES SOCIALES</p>
          <div className={styles.Icons}>
            <img src={insta} width={60}></img>
            <img src={face} width={60}></img>
          </div>
        </div>
        <div className={styles.instaSimula}>
          <div className={styles.InstaTitles}>
            <img src={arbol} width={50} height={50} />
            <p>truestudio.es</p>
          </div>
          <img src={instafeed} className={styles.Insta} />
        </div>
      </div>




      {/* <InstagramEmbed
        url='https://www.instagram.com/truestudio.es/'
        clientAccessToken='123|456'
        maxWidth={320}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      /> */}
    </>
  )
}

export default Home
