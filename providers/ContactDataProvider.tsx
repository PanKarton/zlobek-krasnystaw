import { createContext, ReactNode, useContext } from 'react';
import { ContactDataResponse } from 'types/contactData';

type Props = {
  children: ReactNode;
  contactData: ContactDataResponse;
};

export const ContactDataContext = createContext<ContactDataResponse>({});

export const ContactDataProvider = ({ children, contactData }: Props) => {
  return <ContactDataContext.Provider value={contactData}>{children}</ContactDataContext.Provider>;
};

export const useContactData = () => {
  const contactData = useContext(ContactDataContext);

  if (Object.keys(contactData).length === 0) throw Error('useContactData is supposed to be used inside ContactDataContext.Provider');

  return contactData;
};
