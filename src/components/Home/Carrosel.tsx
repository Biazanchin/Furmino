import { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

const Carrossel = () => {
  const [splideInstance, setSplideInstance] = useState<any>();

  useEffect(() => {
    if (splideInstance) { //Se a intância existe
      splideInstance.on('mounted', () => { //.on() escuta o evento mounted(slider reparado)
        setSplideInstance(splideInstance); //Atualiza o estado para a instância atual
      });
    }
  }, [splideInstance]); //Executa toda vez que o valor for alterado

  const handleNextSlide = () => {
    if (splideInstance) {
      splideInstance.go('>');
    }
  };

  return (
    <div className="mx-auto mt-8 lg:flex p-4 pb-10 lg:items-center bg-backgroundColor">
      <div className="lg:w-1/2 lg:mr-4 px-24">
        <div className="text-left mb-8 lg:mb-0">
          <h2 className="text-4xl font-extrabold">50+ Beautiful rooms inspiration</h2>
          <p className="mt-2">
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>
          <button className="mt-8 px-4 py-2 bg-primary text-white font-semibold">Explore More</button>
        </div>
      </div>
      <div className="lg:w-4/6 lg:ml-4 relative lg:h-96">
        <Splide
          options={{
            type: 'loop',
            perPage: 2.5,
            perMove: 1,
            autoplay: false,
            pauseOnHover: false,
            resetProgress: false,
            arrows: false,
            pagination: true,
            gap: '1rem',
            focus: 'left',
            breakpoints: {
              768: {
                perPage: 1.5,
              },
            },
          }}
          className="splide-custom"
          onMounted={setSplideInstance}
        >
          <SplideSlide>
            <div className="relative h- lg:h-full">
              <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/carrosel1.png" alt="Inner Peace" className="carousel-image" />
              <div className="absolute bottom-4 left-10 p-6 bg-white bg-opacity-75">
                <p className="text-sm">01 - Bed Room</p>
                <h3 className="text-xl font-semibold">Inner Peace</h3>
              </div>
              <span className='bg-primary absolute right-12 bottom-4 p-2'>
                <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/Right+16px.png" alt="seta" />
              </span>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="relative h-64 lg:h-full">
              <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/carrosel2.png" alt="Another Room" className="carousel-image" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="relative h-64 lg:h-full">
              <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/Rectangle+26.png" alt="Dinner" className="carousel-image" />
            </div>
          </SplideSlide>
        </Splide>
        <button className="absolute top-1/2 right-0 transform -translate-y-1/2" onClick={handleNextSlide}>
          <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/seta.png" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Carrossel;
