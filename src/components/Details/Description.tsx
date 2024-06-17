const Description = () => {
  return (
    <div className=" border-b-2 border-light-gray ">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-center space-x-36 mt-6 mb-4">
          <h2 className="text-2xl font-semibold hover:underline">Description</h2>
          <a href="/addInformation">
            <h2 className="text-2xl text-gray hover:text-black hover:underline transition duration-100">Additional Information</h2>
          </a>
        </div>
        <div>
          <p className="text-gray mb-4">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-gray">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-6">
          <div className="p-4">
            <img 
              src="https://desafio3furniro.s3.us-east-2.amazonaws.com/product/sofa6.png" 
              alt="Sofa 1" 
              className="rounded-lg mb-4"
            />
          </div>
          <div className="p-4">
            <img 
              src="https://desafio3furniro.s3.us-east-2.amazonaws.com/product/sofa7.png" 
              alt="Sofa 2" 
              className="rounded-lg mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
