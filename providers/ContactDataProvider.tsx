import { createContext, ReactNode, useContext } from 'react';
import { ContactInfoDataAttributes } from 'types/contactDataResponse';

type Props = {
  children: ReactNode;
  contactData: ContactInfoDataAttributes;
};

const initContext = {
  numerTelefonu: '',
  email: '',
  dniPracy: '',
  adres: {
    miasto: '',
    nazwa: '',
    ulica: '',
  },
  godzinyPracy: {
    godzinaOtwarcia: '',
    godzinaZamkniecia: '',
  },
};

const ContactDataContext = createContext<ContactInfoDataAttributes>(initContext);

export const ContactDataProvider = ({ children, contactData }: Props) => {
  return <ContactDataContext.Provider value={contactData}>{children}</ContactDataContext.Provider>;
};

export const useContactData = () => {
  const contactData = useContext(ContactDataContext);

  if (contactData === null) throw Error('useContactData is supposed to be used inside ContactDataProvider');

  return contactData;
};
