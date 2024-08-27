function Benefits() {
  return (
    <div className="mb-2">
      <div className="bg-light-pink p-8">
        <div className="max-w-screen-xl mx-auto space-y-6">
          <div className="flex justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <img
                  src="/trophy.png"
                  alt="High Quality"
                  className="lg:flex sm:hidden"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">High Quality</h3>
                <p>Crafted from top materials</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <img
                  src="/guarantee.png"
                  alt="Warranty Protection"
                  className="lg:flex sm:hidden"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Warranty Protection</h3>
                <p>Over 2 years</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <img
                  src="/shipping.png"
                  alt="Free Shipping"
                  className="lg:flex sm:hidden"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Free Shipping</h3>
                <p>Order over $50</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <img
                  src="/customer-support.png"
                  alt="24/7 Support"
                  className="lg:flex sm:hidden"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">24/7 Support</h3>
                <p>Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
