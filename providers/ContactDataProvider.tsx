import { createContext, ReactNode, useContext } from 'react';
import { ContactInfo } from 'types/contactData';

type Props = {
  children: ReactNode;
  contactData: ContactInfo;
};

const ContactDataContext = createContext<ContactInfo | null>(null);

export const ContactDataProvider = ({ children, contactData }: Props) => {
  return <ContactDataContext.Provider value={contactData}>{children}</ContactDataContext.Provider>;
};

export const useContactData = () => {
  const contactData = useContext(ContactDataContext);

  if (contactData === null) throw Error('useContactData is supposed to be used inside ContactDataProvider');

  return contactData;
};
