export interface DayScheduleResponse {
  daySchedule: DaySchedule;
}

export interface DaySchedule {
  data: DayScheduleData;
}

export interface DayScheduleData {
  attributes: DayScheduleDataAttributes;
}

export interface DayScheduleDataAttributes {
  daySchedule: DayScheduleElement[];
}

export interface DayScheduleElement {
  id: string;
  hours: string;
  name: string;
}
