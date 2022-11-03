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
    { name: 'Jadwiga Bartycka', job: 'pracowniczka pralni' },
    { name: 'Emilia Troć', job: 'pracowniczka prac lekkich' },
    { name: 'Ewa Rozwałko', job: 'pracowniczka prac lekkich' },
    { name: 'Honorata Kuc', job: 'pracowniczka prac lekkich' },
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
