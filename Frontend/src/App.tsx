import { useState, useEffect } from "react";
import "./App.css";
import {
  DataModule,
  IBookingInfo,
  IPassengerData,
} from "./data module/dataModule";

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

  useEffect(() => {
    const fetchAndSetAppData = async () => {
      const dataModule = new DataModule();
      const appData = await dataModule.getAppData("2918332877");
      const [fetchedBookingInfo, fetchedAllPassengerData, fetchedErrorMessage] =
        appData;
      console.log(appData);
      setBookingInfo(fetchedBookingInfo);
      setAllPassengerData(fetchedAllPassengerData);
      setErrorMessage(fetchedErrorMessage);
    };
    fetchAndSetAppData();
  }, [PNR]);

  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}

export default App;
