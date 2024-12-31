import { BookingInfoCard } from "../cards/BookingInfoCard";
import { AllPassengerCard } from "../cards/AllPassengerCard";
import { IBookingInfo, IPassengerData } from "../../data module/dataModule";
interface IPNRStatusProps {
  bookingInfo: IBookingInfo | null;
  allPassengersData: IPassengerData[] | null;
  isDataVisible: boolean;
}
export function PNRStatus(props: IPNRStatusProps) {
  const [bookingInfo, allPassengersData] = [
    props.bookingInfo,
    props.allPassengersData,
  ];
  return props.isDataVisible ? (
    <div className="PNRStatus">
      <BookingInfoCard
        PNR={bookingInfo?.PNR}
        trainName={bookingInfo?.trainName}
        trainNumber={bookingInfo?.trainNumber}
        sourceStation={bookingInfo?.sourceStation}
        startTime={bookingInfo?.startTime}
        destinationStation={bookingInfo?.destinationStation}
        endTime={bookingInfo?.endTime}
        dateOfJourney={bookingInfo?.dateOfJourney}
        journeyClass={bookingInfo?.journeyClass}
        quota={bookingInfo?.quota}
      ></BookingInfoCard>
      <AllPassengerCard
        allPassengersData={allPassengersData}
        chartStatus={bookingInfo?.chartStatus}
        isWL={bookingInfo?.isWL}
      ></AllPassengerCard>
    </div>
  ) : (
    <></>
  );
}
