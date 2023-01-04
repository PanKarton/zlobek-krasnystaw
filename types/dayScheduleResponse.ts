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
  planDnia: DayScheduleElement[];
}

export interface DayScheduleElement {
  id: string;
  godziny: string;
  nazwa: string;
}
