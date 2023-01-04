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
  dyrektorzy: Employee[];
  opiekunki: Employee[];
  pracownicyAdministracjiOrazObslugi: Employee[];
}

export interface Employee {
  id: string;
  imieNazwisko: string;
  stanowisko?: string;
}
