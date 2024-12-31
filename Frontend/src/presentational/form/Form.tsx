import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import TrainIcon from "@mui/icons-material/Train";
import "./Form.css";
interface IFormProps {
  isFormVisible: boolean;
  onSubmitForm: (inputValue: string) => void;
}
export function Form(props: IFormProps) {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => setInputValue(""), [props]);
  return props.isFormVisible ? (
    <div className="form-container">
      <TextField
        className="input"
        onChange={(event) => setInputValue(event.target.value)}
        placeholder={"Please enter your PNR"}
      ></TextField>
      <Button
        onClick={() => props.onSubmitForm(inputValue)}
        color="success"
        startIcon={<TrainIcon></TrainIcon>}
        variant="outlined"
        className="button"
      >
        Check
      </Button>
    </div>
  ) : (
    <></>
  );
}
