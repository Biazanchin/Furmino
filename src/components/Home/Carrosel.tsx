import { useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  img: string;
}

const slides: Slide[] = [
  { id: 2, title: 'Inner Peace', subtitle: '01 - Bed Room', img: 'https://desafio3furniro.s3.us-east-2.amazonaws.com/home/carrosel1.png' },
  { id: 1, title: 'Another Room', subtitle: 'Living Room', img: 'https://desafio3furniro.s3.us-east-2.amazonaws.com/home/carrosel2.png' },
  { id: 3, title: 'Testing', subtitle: 'Hope that is work', img: 'https://desafio3furniro.s3.us-east-2.amazonaws.com/home/Rectangle+26.png' },
];

const Carrossel = () => {
  const splideRef = useRef<any>(null);

  const handleNextClick = () => {
    if (splideRef.current && splideRef.current.splide) {
      splideRef.current.splide.go('>');
    }
  };

  return (
    <div className="container mx-auto mt-8 lg:flex lg:items-center bg-backgroundColor">
      <div className="lg:w-1/2 lg:mr-4">
        <div className="text-center mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold">50+ Beautiful rooms inspiration</h2>
          <p className="mt-2 text-gray-500">
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>
          <button className="mt-4 px-4 py-2 bg-primary text-white font-semibold rounded">Explore More</button>
        </div>
      </div>
      <div className="lg:w-1/2 lg:ml-4 relative lg:h-96">
        <Splide
          ref={splideRef}
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
              640: {
                perPage: 1,
                focus: 'center',
              },
            },
          }}
          className="mt-2 h-full"
        >
          {slides.map((slide) => (
            <SplideSlide key={slide.id} className="flex-shrink-0 w-2/5">
              <div className="relative h-64 lg:h-full">
                <img src={slide.img} alt={slide.title} className="object-cover w-full h-full" />
                <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-75">
                  <p className="text-sm">{slide.subtitle}</p>
                  <h3 className="text-xl font-semibold">{slide.title}</h3>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
        <button className="absolute top-1/2 right-0 transform -translate-y-1/2" onClick={handleNextClick}>
          <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/seta.png" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Carrossel;
