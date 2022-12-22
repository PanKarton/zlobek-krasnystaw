export interface StaffResponse {
  staff: Staff;
}

export interface Staff {
  data: StaffData;
}

export interface StaffData {
  attributes: StaffDataAttributes;
}

export interface StaffDataAttributes {
  directors: Employee[];
  serviceWorkers: Employee[];
  babysitters: Employee[];
}
export interface Employee {
  id: string;
  name: string;
  job?: string;
}
