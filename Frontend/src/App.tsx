import { useState } from "react";
import "./App.css";
import {
  DataModule,
  IBookingInfo,
  IPassengerData,
} from "./data module/dataModule";
const logResponses = async () => {
  const dataModule = new DataModule();
  const a = await dataModule.getPNRData("2918332877");
  console.log(dataModule.getAllPassengerData(a));
};
function App() {
  //State of the App
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isErrorMessageVisible, setIsErrorMessageVisisble] =
    useState<boolean>(false);
  const [PNR, setPNR] = useState<string>("");
  const [isFormVisible, setIsFormVisible] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [bookingInfo, setBookingInfo] = useState<IBookingInfo | null>(null);
  const [allPassengerData, setAllPassengerData] = useState<
    IPassengerData[] | null
  >(null);
  const [isDataVisible, setIsDataVisibe] = useState<boolean>(false);
  logResponses();
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}

export default App;
