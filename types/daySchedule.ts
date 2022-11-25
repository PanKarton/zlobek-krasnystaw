export interface DayScheduleResponse {
  typename: string;
  data: Data;
}

export interface Data {
  typename: string;
  attributes: Attributes;
}

export interface Attributes {
  typename: string;
  daySchedule: DaySchedule[];
}

export interface DaySchedule {
  typename: Typename;
  id: string;
  hours: string;
  name: string;
}

export enum Typename {
  ComponentDayScheduleDayScheduleItem = 'ComponentDayScheduleDayScheduleItem',
}
