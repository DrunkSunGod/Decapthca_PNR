import { Alert } from "@mui/material";

interface IErrorMessageProps {
  isErrorMessageVisible: boolean;
  errorMessage: string;
  onDismissError: () => void;
}

export function ErrorMessage(props: IErrorMessageProps): JSX.Element {
  return props.isErrorMessageVisible ? (
    <Alert severity="error" onClose={props.onDismissError}>
      {props.errorMessage}
    </Alert>
  ) : (
    <></>
  );
}
