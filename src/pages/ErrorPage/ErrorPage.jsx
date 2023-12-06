import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
        <div className="text-center text-white">
          <h1 className="text-9xl font-bold mb-4 animate__animated animate__bounceInDown">
            404
          </h1>
          <p className="text-4xl font-semibold mb-8 animate__animated animate__fadeIn">
            Oops! Page not found
          </p>
          <p className="text-lg mb-8 animate__animated animate__fadeIn">
            It seems like you've ventured into uncharted space. Let's guide you
            back to familiar territory!
          </p>
          <Link
            to="/"
            className="bg-white text-purple-500 py-2 px-4 rounded-full font-semibold transition-transform transform hover:scale-105 animate__animated animate__fadeIn"
          >
            Return Home
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-[-1]">
          <div className="h-96 bg-gradient-to-b from-purple-700 via-pink-700 to-red-700 animate__animated animate__parallax" />
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
