import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import TrainIcon from "@mui/icons-material/Train";
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
        fullWidth={true}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder={"Please enter your PNR"}
      ></TextField>
      <Button
        onClick={() => props.onSubmitForm(inputValue)}
        color="success"
        startIcon={<TrainIcon></TrainIcon>}
        variant="outlined"
      >
        Check
      </Button>
    </div>
  ) : (
    <></>
  );
}
