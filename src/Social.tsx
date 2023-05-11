import Header from './components/Header';
import Card from 'react-bootstrap/Card';
import perfil from './assets/perfil.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Social() {
    useEffect(() => {
        AOS.init();
    });
    return (
        <body>
            <div className='app'>
                <Header />
                <main>
                    <div className='container-fluid mt-3'>
                        <Card className='colorCard' style={{ background: 'transparent' }}>
                            <div className='row mt-3'>
                                <div data-aos="zoom-in-down" data-aos-duration="1500" className='col-md-7 text-center'>
                                    <img className='imgSocial' src={perfil} alt="Perfil" />
                                </div>
                                <div className='col-md-5'>
                                    <div className='row'>
                                        <div className='col-md-2'>
                                            <FaFacebook style={{ fontSize: '100px' }} />
                                        </div>
                                        <div className='col-md-10 mt-3'>
                                            <h1><span><a target='_blank' className='socialLink' href="https://www.facebook.com/jesus.delacruz.1675">Facebook</a></span></h1>
                                        </div>
                                    </div>
                                    <div className='row mt-5'>
                                        <div className='col-md-2'>
                                            <FaGithub style={{ fontSize: '100px' }} />
                                        </div>
                                        <div className='col-md-10 mt-3'>
                                            <h1><span><a target='_blank' className='socialLink' href="https://github.com/Jisus1840">GitHub</a></span></h1>
                                        </div>
                                    </div>
                                    <div className='row mt-5'>
                                        <div className='col-md-2'>
                                            <FaLinkedin style={{ fontSize: '100px' }} />
                                        </div>
                                        <div className='col-md-10 mt-3'>
                                            <h1><span><a target='_blank' className='socialLink' href="https://www.linkedin.com/in/jesus-davila-661071193/">Linkedin</a></span></h1>
                                        </div>
                                    </div>
                                    <div className='row mt-5'>
                                        <div className='col-md-2'>
                                            <FaInstagram style={{ fontSize: '100px' }} />
                                        </div>
                                        <div className='col-md-10 mt-3'>
                                            <h1><span><a target='_blank' className='socialLink' href="https://instagram.com/jesusdela394?igshid=NTc4MTIwNjQ2YQ==">Instagram</a></span></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </main>
            </div>
        </body>
    );
}

export default Social;