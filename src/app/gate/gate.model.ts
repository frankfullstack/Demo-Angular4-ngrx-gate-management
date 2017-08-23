export interface IGateModel {
  Gate: string;
  Collection: Array<FlightModel>;
}
export interface IDuration {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
export class Duration implements IDuration {
  constructor(public days: number, public hours: number, public minutes: number, public seconds: number) {}
}
export interface IFlightModel {
  Flight: string,
  CurrentSequence: string,
  CurrentStatus: string,
  BoardingSequence: string,
  CurrentBoardingBy: string,
  DepartureDue: Date
}

export class GateModel implements IGateModel {
  constructor(public Gate: string, public Collection: Array<FlightModel>) {}
}
export class FlightModel implements IFlightModel {
  CountdownTime: Duration;

  constructor(
    public Flight: string,
    public CurrentSequence: string,
    public CurrentStatus: string,
    public BoardingSequence: string,
    public CurrentBoardingBy: string,
    public DepartureDue: Date
  ) {}
}
