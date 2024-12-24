import Header from "@/components/Header";
import { Link, useLocation } from "react-router-dom";

function Error() {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full bg-zinc-50 px-4 py-2 md:px-8 md:py-4">
      <Header />

      <div className="rounded-lg bg-red-500 p-3 text-center">
        <h1 className="text-4xl font-bold">
          😥Ohh Noo! This is an Error Page ⚠️
        </h1>
        <p className="text-lg">Your form is flagged for {"badWord"}.</p>
        <p className="text-lg">
          Try resubmitting the form
          <Link to="/" className="text-blue-600 underline">
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Error;
