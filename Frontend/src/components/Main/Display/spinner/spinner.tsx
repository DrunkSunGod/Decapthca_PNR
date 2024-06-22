import Spinner from "react-bootstrap/Spinner";
import "./spinner.css";
function MySpinner() {
  return (
    <div className="spinner-container">
      <Spinner animation="border" variant="dark" />
    </div>
  );
}

export default MySpinner;
