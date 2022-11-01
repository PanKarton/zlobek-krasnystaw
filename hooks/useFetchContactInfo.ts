export const useFetchContactInfo = () => {
  const contactInfo = {
    phoneNumber: '82 576 31 82',
    email: 'zlobek.krasnystaw@gmail.pl',
    openDays: 'Poniedziałek - Piątek',
    openHours: {
      openTime: '6:00',
      closeTime: '16:00',
    },
    adress: {
      city: '22-300 Krasnystaw',
      name: 'Żłobek Miejski',
      street: 'ul. Poniatowskiego 48',
    },
  };

  return contactInfo;
};
