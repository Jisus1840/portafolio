import { useEffect, useRef } from 'react';
import foto from './assets/foto.png';
import Header from './components/Header';
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';


function Home() {
  const el = useRef(null);

  useEffect(() => {
    AOS.init();
    const typed = new Typed(el.current, {
      strings: ["Hi, it's me"],
      typeSpeed: 100
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className='app'>
      <Header />
      <main>
        <div className='container-fluid mt-5'>
          <Card className='colorCard' style={{ background: 'transparent' }}>
            <div className='row'>
              <div className='col-md-6 text-center mt-5' data-aos="fade-up"
                data-aos-duration="1500">
                <img className='imgPersonal' src={foto} alt="Foto Personal" />
              </div>
              <div className='col-md-6 texto'>
                <h2><span ref={el} /></h2>
                <div data-aos="fade-down"
                  data-aos-duration="600">
                  <h1 className='nombre'>Jesús Dávila.</h1>
                  <p className='mt-4 me-3'>Welcome to my web portfolio as a full-stack web developer! Here,
                    you will find a showcase of my work as a professional in the field of web application development,
                    as well as my skills and experience in the industry. As a full-stack web developer,
                    I have experience in both front-end and back-end development, enabling me to create complete and functional web applications.
                    From designing and implementing the user interface to programming the server logic, I ensure that all parts of an application
                    work together seamlessly to provide an exceptional user experience. I hope you enjoy exploring my portfolio and discovering
                    what I can offer as a full-stack web developer.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main >
    </div >
  );
}

export default Home;