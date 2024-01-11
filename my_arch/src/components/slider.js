import React, { useState, useEffect } from 'react';
import slider1 from '../images/slider/slider1.jpeg';
import slider2 from '../images/slider/slider2.jpeg';
import slider3 from '../images/slider/slider3.jpeg';
import slider4 from '../images/slider/slider4.jpeg';
import slider5 from '../images/slider/slider5.jpeg';
import './slider.css';

function Slider() {
    const slideShow = [slider1, slider2, slider3, slider4, slider5];
    const [indice, setIndice] = useState(0);

    const changeSlide = (e) => {
        const id = e.target.id;
        setIndice(parseInt(id));
    };

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndice((indice + 1) % slideShow.length);
        }, 3000); // Intervalo de 3 segundos

        return () => clearInterval(intervalo); // Limpa o intervalo quando o componente é desmontado
    }, [indice, slideShow.length]);

    return (
        <div>
             <div className='slider'>
                {slideShow.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`Imagem ${i + 1}`}
                        className={`slider_image ${i === indice ? 'active' : ''}`}
                    />
                ))}
                
            </div>
            <div className='container_buttons'>
                    {slideShow.map((_, i) => (
                        <button
                            key={i}
                            className={`slider_button ${i === indice ? 'active' : ''}`}
                            id={i.toString()}
                            onClick={changeSlide}
                        ></button>
                    ))}
                </div>
        </div>
    );
}

export default Slider;
