import { useState } from "react";
import "./App.css";
import {
  DataModule,
  IBookingInfo,
  IPassengerData,
} from "./data module/dataModule";
import { ErrorMessage } from "./presentational/errorMessage/ErrorMessage";
import { Form } from "./presentational/form/Form";
import { CircularLoading } from "./presentational/circularLoading/CircularLoading";
import { PNRStatus } from "./presentational/PNRStatus/PNRStatus";

function App() {
  //State of the App
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isErrorMessageVisible, setIsErrorMessageVisible] =
    useState<boolean>(false);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [bookingInfo, setBookingInfo] = useState<IBookingInfo | null>(null);
  const [allPassengerData, setAllPassengerData] = useState<
    IPassengerData[] | null
  >(null);
  const [isDataVisible, setIsDataVisibe] = useState<boolean>(false);
  //"291833287"
  const fetchAndSetAppData = async (PNR: string) => {
    setIsFormVisible(false);
    if (isDataVisible) setIsDataVisibe(false);
    const dataModule = new DataModule();
    const appData = await dataModule.getAppData(PNR);
    const [fetchedBookingInfo, fetchedAllPassengerData, fetchedErrorMessage] =
      appData;
    console.log(appData);
    setBookingInfo(fetchedBookingInfo);
    setAllPassengerData(fetchedAllPassengerData);
    if (fetchedBookingInfo) {
      setIsDataVisibe(true);
    }
    if (fetchedErrorMessage.length) {
      setErrorMessage(fetchedErrorMessage);
      setIsErrorMessageVisible(true);
    }
    setIsFormVisible(true);
    setIsDataVisibe(true);
  };

  const onDismissError = (): void => {
    setIsErrorMessageVisible(false);
  };

  async function onSubmitForm(inputValue: string) {
    setIsErrorMessageVisible(false);
    setIsLoading(true);
    await fetchAndSetAppData(inputValue);
    setIsLoading(false);
  }
  return (
    <div className="app">
      <ErrorMessage
        isErrorMessageVisible={isErrorMessageVisible}
        errorMessage={errorMessage}
        onDismissError={onDismissError}
      ></ErrorMessage>
      <h1 className="title">PNR Status</h1>
      <Form isFormVisible={isFormVisible} onSubmitForm={onSubmitForm}></Form>
      <CircularLoading isLoading={isLoading}></CircularLoading>
      <PNRStatus
        bookingInfo={bookingInfo}
        allPassengersData={allPassengerData}
        isDataVisible={isDataVisible}
      ></PNRStatus>
    </div>
  );
}

export default App;
