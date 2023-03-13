export interface HeadmasterResponse {
  headmaster: Staff;
}

export interface Staff {
  data: StaffData;
}

export interface StaffData {
  attributes: StaffDataAttributes;
}

export interface StaffDataAttributes {
  imieNazwisko: string;
}
