import react from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>This is an Error Page ⚠️</h1>
      <Link to="/" className="bg-red-500">
        Go back to Home
      </Link>
      <br />
      <Link to="/submission" className="bg-blue-500">
        Go to Submission Page
      </Link>
    </div>
  );
}

export default Error;