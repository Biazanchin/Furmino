import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  img: string;
}

const slides: Slide[] = [
  { id: 1, title: 'Inner Peace', subtitle: 'Bed Room', img: 'https://desafio3furniro.s3.us-east-2.amazonaws.com/home/carrosel1.png' },
  { id: 2, title: 'Another Room', subtitle: 'Living Room', img: 'https://desafio3furniro.s3.us-east-2.amazonaws.com/home/carrosel2.png' },
  { id: 3, title: 'Testing', subtitle: 'Hope that is work', img: 'https://desafio3furniro.s3.us-east-2.amazonaws.com/home/Rectangle+26.png'},
]

const Carrossel = () => {
  return (
    <div className="container mx-auto mt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between bg-backgroundColor">
      <div className="lg:w-1/2 lg:mr-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">50+ Beautiful rooms inspiration</h2>
          <p className="mt-2 text-gray-500">
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>
          <button className="mt-4 px-4 py-2 bg-primary text-white font-semibold rounded">Explore More</button>
        </div>
      </div>
      <div className="lg:w-1/2 lg:ml-4">
        <Splide
          options={{
            type: 'loop',
            perPage: 1,
            perMove: 1,
            autoplay: false,
            pauseOnHover: false,
            resetProgress: false,
            arrows: true,
            pagination: false,
            gap: '1rem',
          }}
          className="mt-8"
        >
          {slides.map((slide) => (
            <SplideSlide key={slide.id}>
              <div className="relative">
                <img src={slide.img} alt={slide.title} className="object-cover" />
                <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-75">
                  <p className="text-sm">{slide.subtitle}</p>
                  <h3 className="text-xl font-semibold">{slide.title}</h3>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Carrossel;
