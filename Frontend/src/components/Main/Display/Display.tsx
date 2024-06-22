import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import MySpinner from "./spinner/spinner";
import Result from "./success/success";
import Error from "./error/error";
function myDisplay(data, err): JSX.Element {
  if (data === null && err === null) return <MySpinner />;
  else
    return (
      <>
        <Result data={data} err={err} />
        <Error data={data} err={err} />
      </>
    );
}
function Display<T>(props: T) {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  useEffect(() => {
    if (props.showDisplay) {
      console.log(props.PNR);
      axios
        .get(
          `https://decaptcha-pnr-backend.onrender.com/finpredict?pnrnumber=${props.PNR}`
        )
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => setErr(err));
    }
  }, [props.showDisplay]);
  return props.showDisplay ? myDisplay(data, err) : <></>;
}
export default Display;
