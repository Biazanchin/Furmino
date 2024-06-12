const Setup = () => {
  return (
    <div className="flex flex-col items-center font-poppins mt-16 p-4">
      <h1 className="text-2xl font-bold mb-4">Share your setup with #FuniroFurniture</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Home Office */}
        <div >
          <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/share1.png" alt="Home Office" />
        </div>

        {/* Cozy Bedroom */}
        <div >
          <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/share2.png" alt="Cozy Bedroom" />
        </div>

        {/* Modern Dining Area */}
        <div >
          <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/share3.png" alt="Modern Dining Area" />
        </div>

        {/* Elegant Living Space */}
        <div >
          <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/share4.png" alt="Elegant Living Space" />
        </div>

        {/* Stylish Wall-mounted Shelves */}
        <div >
          <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/share5.png" alt="Stylish Wall Shelves" />
        </div>
        {/* Additional Photos */}
        <div >
          <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/share6.png" alt="Additional Photo 1" />
        </div>

        <div >
          <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/share7.png" alt="Additional Photo 2" />
        </div>

        <div >
          <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/share8.png" alt="Additional Photo 3" />
        </div>

        <div >
          <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/share9.png" alt="Additional Photo 3" />
        </div>
      </div>
    </div>
  );
};

export default Setup;
