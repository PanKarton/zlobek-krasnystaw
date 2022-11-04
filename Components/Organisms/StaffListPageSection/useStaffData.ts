export const useStaffData = () => {
  const directorsData = [
    {
      name: 'Barbara Delikat',
    },
    {
      name: 'Magdalena Weremko',
    },
  ];
  const serviceWorkersData = [
    { name: 'Justyna Piotrowska', job: 'główna księgowa' },
    { name: 'Joanna Kaźmierczak', job: 'intendentka' },
    { name: 'Edyta Hawryluk', job: 'kucharka' },
    { name: 'Zbigniew Rokosz', job: 'konserwator' },
    { name: 'Jadwiga Bartycka', job: 'pracownik pralni' },
    { name: 'Emilia Troć', job: 'pracownik do prac lekkich' },
    { name: 'Ewa Rozwałko', job: 'pracownik do prac lekkich' },
    { name: 'Honorata Kuc', job: 'pracownik do prac lekkich' },
  ];
  const babysittesData = [
    { name: 'Angelika Banach' },
    { name: 'Monika Kostrzewska' },
    { name: 'Justyna Bojarska' },
    { name: 'Sylwia Szymańska' },
    { name: 'Justyna Wiśniewska' },
    { name: 'Magdalena Waręcka' },
    { name: 'Katarzyna Żurek' },
    { name: 'Edyta Mataszek' },
    { name: 'Katarzyna Mąka' },
  ];

  return {
    babysittesData,
    serviceWorkersData,
    directorsData,
  };
};
