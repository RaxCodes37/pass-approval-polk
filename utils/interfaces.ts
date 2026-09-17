export interface RequestingPass {
  studentName: string,
  classDepartedFrom: string,
  destination: string,
  reason: string,
}

export interface getPassRequests {
  teacherName: string, //unique id
}