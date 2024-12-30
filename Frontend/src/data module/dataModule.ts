//active test PNR: 2918332877
export class dataModule {
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
    //the API returns a list of suggested stations.
    //Result that matches exactly with the given stationCode is stored at 0th index.
    //The full stationName is stored at station.e
    const stationName = fetch(stationNameEndPoint)
      .then((response) => response.json())
      .then((data) => data[0].e);
    return stationName;
  }
}
