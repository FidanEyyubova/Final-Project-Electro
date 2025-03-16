import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
import "animate.css"
const NotFound = () => {
  return (
    <div className="not-found text-center d-flex justify-center align-items-center ">
      <div className="row mx-auto ">
        <div className="col-12">
          <MdError className="icon mb-4 animate__animated animate__tada animate__infinite animate__slower" />
          <h1>Sorry!</h1>
          <h3>Page not found</h3>
          <p>
            The requested <span>URL</span> was not found on this server
          </p>
          <button>
            <Link to={"/"} className="link">
              GO HOME
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
