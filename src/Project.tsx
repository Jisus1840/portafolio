import Header from './components/Header';
import { useEffect, useRef } from "react";
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';
import foto2 from './assets/tresamigosyjumper.png';
import foto3 from './assets/infopatente.png';
import foto4 from './assets/MEAN.png';
import foto5 from './assets/alcoholes.png';
import foto6 from './assets/formularioVark.png';
import Typed from 'typed.js';

function Project() {
    const htmlCss = useRef(null);
    const htmlCss2 = useRef(null);
    const htmlCss3 = useRef(null);

    useEffect(() => {
        AOS.init();
        const typedHtml = new Typed(htmlCss.current, {
            strings: ["HTML AND CSS"],
            typeSpeed: 100
        });

        const typedHtml2 = new Typed(htmlCss2.current, {
            strings: ["LARAVEL"],
            typeSpeed: 100
        });

        const typedHtml3 = new Typed(htmlCss3.current, {
            strings: ["MEAN"],
            typeSpeed: 100
        });

        return () => {
            typedHtml.destroy();
            typedHtml2.destroy();
            typedHtml3.destroy();
        }
    }, []);

    return (
        <body>
            <div className='app'>
                <Header />
                <main>
                    <div className='container-fluid mt-3'>
                        <Card className='colorCard' style={{ background: 'transparent' }}>
                            <div className='row mt-3'>
                                <div className='col-md-12'>
                                    <h1 className='texto'><span ref={htmlCss}></span></h1>
                                </div>
                            </div>

                            <div className='row'>
                                <div data-aos="zoom-out-right" data-aos-duration="1000" className='col-md-7 text-center mt-5'>
                                    <img className='imgProyecto' src={foto2} alt="tres amigos y jumper" />
                                </div>
                                <div data-aos="zoom-out-right" data-aos-duration="1000" className='col-md-5 texto mt-5'>
                                    <p className='mt-5'>tresamigosyjumper - System for registering roosters and hens, where bloodlines are tracked, and control is kept over the roosters and hens belonging to a coop, the quantity of eggs produced per coop, and the number of hatchlings, as well as their sale.</p>
                                </div>
                            </div>

                            <div className='row mt-5'>
                                <div className='col-md-12 mt-5'>
                                    <h1 className='texto'><span ref={htmlCss2}></span></h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div data-aos="zoom-out-left" data-aos-duration="1000" className='col-md-5 text-center mt-5'>
                                    <p className='mt-5'>infoPatente - System for patent registration where patents can be stored and tracked. It is a subscription-based system that is secure and accessible to anyone.</p>
                                    <p><a href="http://www.infopatente.mx/">InfoPatente</a></p>
                                </div>
                                <div data-aos="zoom-out-left" data-aos-duration="1000" className='col-md-7 texto mt-5'>
                                    <img className='imgProyecto' src={foto3} alt="InfoPatente" />
                                </div>
                            </div>

                            <div className='row mt-5'>
                                <div data-aos="zoom-out-right" data-aos-duration="1000" className='col-md-7 text-center mt-5'>
                                    <img className='imgProyecto' src={foto6} alt="Formulario Vark" />
                                </div>
                                <div data-aos="zoom-out-right" data-aos-duration="1000" className='col-md-5 texto mt-5'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic porro ipsam magnam necessitatibus, laboriosam unde, quidem doloremque enim dicta aliquam vitae minima perspiciatis nostrum? Totam reprehenderit iusto architecto ducimus sequi?</p>
                                </div>
                            </div>

                            <div className='row mt-5'>
                                <div data-aos="zoom-out-left" data-aos-duration="1000" className='col-md-7 text-center mt-5'>
                                    <img className='imgProyecto' src={foto5} alt="Alcoholes" />
                                </div>
                                <div data-aos="zoom-out-left" data-aos-duration="1000" className='col-md-5 texto mt-5'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic porro ipsam magnam necessitatibus, laboriosam unde, quidem doloremque enim dicta aliquam vitae minima perspiciatis nostrum? Totam reprehenderit iusto architecto ducimus sequi?</p>
                                </div>
                            </div>

                            <div className='row mt-5'>
                                <div data-aos="zoom-out-left" data-aos-duration="1000" className='col-md-7 text-center mt-5'>
                                    <img className='imgProyecto' src={foto5} alt="Alcoholes" />
                                </div>
                                <div data-aos="zoom-out-left" data-aos-duration="1000" className='col-md-5 texto mt-5'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic porro ipsam magnam necessitatibus, laboriosam unde, quidem doloremque enim dicta aliquam vitae minima perspiciatis nostrum? Totam reprehenderit iusto architecto ducimus sequi?</p>
                                </div>
                            </div>

                            <div className='row mt-5'>
                                <div className='col-md-12 mt-5'>
                                    <h1 className='texto'><span ref={htmlCss3}></span></h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div data-aos="zoom-out-right" data-aos-duration="1000" className='col-md-7 text-center mt-5'>
                                    <img className='imgProyecto' src={foto4} alt="MEAN" />
                                </div>
                                <div data-aos="zoom-out-right" data-aos-duration="1000" className='col-md-5 texto mt-5'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic porro ipsam magnam necessitatibus, laboriosam unde, quidem doloremque enim dicta aliquam vitae minima perspiciatis nostrum? Totam reprehenderit iusto architecto ducimus sequi?</p>
                                </div>
                            </div>


                        </Card>
                    </div>
                </main >
            </div >
        </body>
    );
}

export default Project;