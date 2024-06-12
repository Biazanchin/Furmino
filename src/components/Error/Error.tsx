const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink font-poppins">
      <div className="max-w-lg p-8 rounded-lg shadow-2xl text-center">
        <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/header/logo.png" alt="logo" className="mx-auto mb-4" />
        <h2 className="text-3xl font-semibold mb-4">Error 404</h2>
        <p className="text-gray-600 mb-4">Sorry, the page you're looking for could not be found.</p>
        <p className="text-gray-600 mb-4">Please check the URL or return to <a href="/" className="text-primary hover:underline">home</a>.</p>
      </div>
    </div>
  );
};

export default Error;
