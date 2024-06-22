import Form from "react-bootstrap/Form";
import "./form.css";
import Button from "react-bootstrap/Button";
export let PNR: string = "";
function MyForm<T>(changeStates: T): JSX.Element {
  return (
    <div className="form-container">
      <div className="searchbar">
        <Form.Control
          className="input"
          type="text"
          size="lg"
          placeholder="Enter your PNR"
          onChange={(e) => {
            changeStates.setPNR(e.target.value);
          }}
        />
      </div>
      <div className="button">
        <Button
          onClick={() => changeStates.setShowState(true)}
          variant="outline-dark"
          size="lg"
        >
          Check Status
        </Button>
      </div>
    </div>
  );
}
export default MyForm;
