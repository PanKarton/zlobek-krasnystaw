import React from 'react';

export const ContactInfoContext = React.createContext({
  phoneNumber: '',
  email: '',
  adress: {
    name: '',
    street: '',
    number: '',
    city: '',
  },
});

export const ContactInfoProvider = () => {};
