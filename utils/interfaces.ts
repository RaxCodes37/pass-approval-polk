export interface RequestingPass {
  studentName: string;
  classDepartedFrom: string;
  destination: string;
  reason: string;
}

export interface PassRequest {
  passId: string;
  studentName: string;
  classDepartedFrom: string;
  destination: string;
  reason: string;
  timeOfDeparture: Date;
  timeOfReturn: Date;
  status: string;
}
