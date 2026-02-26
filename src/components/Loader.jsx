import { Spinner } from "react-bootstrap";

const Loader = ({ variant = "success", className = "py-5" }) => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${className}`}
    >
      <Spinner animation="border" variant={variant} role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
