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
  opiekunki: Employee[];
  pracownicyAdministracjiOrazObslugi: Employee[];
}

export interface Employee {
  id: string;
  imieNazwisko: string;
  stanowisko?: string;
}
