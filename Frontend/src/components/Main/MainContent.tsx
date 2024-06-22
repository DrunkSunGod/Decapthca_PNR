import MyForm from "./Form/form";
import Display from "./Display/Display";
import { useState } from "react";
function MainContent() {
  const [show, setShow] = useState(false);
  const [PNR, setPNR] = useState("");
  return (
    <>
      <MyForm setShowState={setShow} setPNR={setPNR} />
      <Display showDisplay={show} PNR={PNR} />
    </>
  );
}
export default MainContent;
