//active test PNR: 2918332877
export interface IDateOfJourney {
  day: string;
  date: string;
  month: string;
}

export interface IBookingInfo {
  PNR: string;
  trainNumber: string;
  trainName: string;
  sourceStation: string;
  startTime: string;
  destinationStation: string;
  endTime: string;
  dateOfJourney: IDateOfJourney;
  journeyClass: string;
  quota: string;
  chartStatus: string;
  isWL: boolean;
}

export interface IPassengerData {
  serialNumber: number;
  currentStatus: string;
  bookingStatus: string;
}

export class DataModule {
  private readonly PNRDetailsBaseURL: string;
  private readonly stationNameBaseURL: string;

  constructor() {
    this.PNRDetailsBaseURL =
      "https://decaptcha-pnr-backend.onrender.com/finpredict?pnrnumber=";
    this.stationNameBaseURL =
      "https://www.ixigo.com/action/content/trainstation?searchFor=trainstationsLatLon&anchor=false&value=";
  }

  public async getPNRData(PNR: string) {
    const PNRDetailsEndpoint = this.PNRDetailsBaseURL + PNR;
    const PNRData = fetch(PNRDetailsEndpoint)
      .then((response) => response.json())
      .then((data) => data);
    console.log(PNRData);
    return PNRData;
  }

  public async getStationName(stationCode: string): Promise<string> {
    const stationNameEndPoint = this.stationNameBaseURL + stationCode;
    let stationName: string = "";

    try {
      //the API returns a list of suggested stations.
      //Result that matches exactly with the given stationCode is stored at 0th index.
      //The full stationName is stored at station.e
      fetch(stationNameEndPoint)
        .then((response) => response.json())
        .then((data) => (stationName = data[0].e));
    } catch (error) {
      console.log(error);
      stationName = stationCode;
    }

    return stationName;
  }

  public hasErrorMessage(rawPNRData): boolean {
    return "errorMessage" in rawPNRData;
  }

  public async getBookingInfo(rawPNRData): Promise<IBookingInfo | null> {
    if (this.hasErrorMessage(rawPNRData)) return null;
    //Partial used for declaring empty object
    let bookingInfo: Partial<IBookingInfo> = {};
    bookingInfo = {
      PNR: rawPNRData.pnrNumber,
      trainNumber: rawPNRData.trainNumber,
      trainName: rawPNRData.trainName,
      sourceStation: await this.getStationName(rawPNRData.sourceStation),
      destinationStation: await this.getStationName(
        rawPNRData.destinationStation
      ),
      journeyClass: rawPNRData.journeyClass,
      quota: rawPNRData.quota,
      chartStatus: rawPNRData.chartStatus,
      isWL: this.isWL(rawPNRData),
    };
    return bookingInfo as IBookingInfo;
  }

  private isWL(rawPNRData): boolean {
    return rawPNRData.isWL === "Y";
  }
}
