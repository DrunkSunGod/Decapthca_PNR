import { useState } from "react";
import { IPassengerData } from "../../data module/dataModule";
import ReplayIcon from "@mui/icons-material/Replay";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface IAllPassengerCardProps {
  allPassengersData: IPassengerData[] | null;
  chartStatus?: string;
  isWL?: boolean;
}
export function AllPassengerCard(props: IAllPassengerCardProps): JSX.Element {
  const [lastFetchedTime, setLastFetchedTime] = useState(0);
  setTimeout(() => setLastFetchedTime(lastFetchedTime + 1), 60000);
  function getLastFetchedTimeString(lastFetchedTime: number) {
    if (lastFetchedTime === 0) return "just now";
    else if (lastFetchedTime === 1) return "1 minute ago";
    else return lastFetchedTime.toString() + " minutes ago";
  }
  return (
    <div className="allPassengerCard">
      <div className="cardHeader">
        <div className="title">Passenger Status</div>
        <div className="chartStatus">
          <div className="status">{props.chartStatus ?? ""}</div>
          <div className="lastFetchedTime">
            {getLastFetchedTimeString(lastFetchedTime)}
          </div>
          <div className="retryIcon">
            <ReplayIcon></ReplayIcon>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S. No</TableCell>
                <TableCell align="right">Current Status</TableCell>
                <TableCell align="right">Booking Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.allPassengersData?.map((passengerData) => (
                <TableRow
                  key={passengerData.serialNumber}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {passengerData.serialNumber}
                  </TableCell>
                  <TableCell align="right">
                    {passengerData.currentStatus}
                  </TableCell>
                  <TableCell align="right">
                    {passengerData.bookingStatus}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
