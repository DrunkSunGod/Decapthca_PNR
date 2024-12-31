import { IBookingInfo } from "../../data module/dataModule";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
type IBookingInfoCardProps = Partial<IBookingInfo | null>;
export function BookingInfoCard(props: IBookingInfoCardProps): JSX.Element {
  return props ? (
    <div className="bookingInfoCard">
      <div className="cardHeader">
        <div className="PNR">PNR: {props.PNR}</div>
        <div className="changeLink">CHANGE</div>
      </div>
      <div className="trainInfo">
        <div className="trainNumber">{props.trainNumber} -</div>
        <div className="trainName">{props.trainName}</div>
      </div>
      <div className="sourceAndDestination">
        <div className="source">
          {props.sourceStation},{props.startTime}
        </div>
        <div className="arrowIcon">
          <ArrowForwardIcon></ArrowForwardIcon>
        </div>
        <div className="destination">
          {props.destinationStation},{props.endTime}
        </div>
      </div>
      <div className="cardFooter">
        {props.dateOfJourney?.day}, {props.dateOfJourney?.date}{" "}
        {props.dateOfJourney?.month} | {props.journeyClass} | {props.quota}
      </div>
    </div>
  ) : (
    <></>
  );
}
