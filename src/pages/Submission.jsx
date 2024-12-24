import Header from "@/components/Header";
import { Link, useLocation } from "react-router-dom";
import utils from "../lib/utils";

function Submission() {
  const location = useLocation();
  return (
    <div className="min-h-screen w-full bg-zinc-50 px-4 py-2 md:px-8 md:py-4">
      <Header />
      <div className="rounded-lg bg-lime-400 p-5 text-center">
        <h1 className="text-4xl font-bold">
          🎊Hurray!🎊 Your form has been submitted Successfully🎉
        </h1>
        <p className="text-lg">
          Your Form has been submitted successfully. You can Check{" "}
          <Link to={utils.entriesUrl} className="text-blue-800 underline">
            Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Submission;
