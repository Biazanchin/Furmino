function Spaces() {
    return (
      <div className="flex flex-col items-center font-poppins mt-16">
        <h1 className="text-2xl font-bold">Browse The Range</h1>
        <p className="mb-12 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-3 gap-4 w-full max-w-screen-lg mx-auto">
          <div className="flex flex-col items-center h-full">
            <img
              src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/dining.png"
              alt="Dining"
              className="h-full w-full rounded-lg"
            />
            <p className="mt-8 text-center font-semibold">Dining</p>
          </div>
          <div className="flex flex-col items-center h-full">
            <img
              src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/living.png"
              alt="Living"
              className="h-full w-full rounded-lg"
            />
            <p className="mt-8 text-center font-semibold">Living</p>
          </div>
          <div className="flex flex-col items-center h-full">
            <img
              src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/bedroom.png"
              alt="Bedroom"
              className="h-full w-full rounded-lg"
            />
            <p className="mt-8 text-center font-semibold">Bedroom</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Spaces;
  