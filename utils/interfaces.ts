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
  timeOfDeparture: string;
  timeOfReturn: string;
  status: string;
}
