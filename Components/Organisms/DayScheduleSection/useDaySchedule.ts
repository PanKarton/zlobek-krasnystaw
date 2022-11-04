export const useDaySchedule = () => {
  const dayScheduleArr = [
    { hours: '6:00 - 8:00', name: 'przyjmowanie dzieci do żłobka' },
    { hours: '8:00 – 8:30', name: 'śniadanie' },
    { hours: '8:30 – 9:00', name: 'dowolne zabawy w grupie' },
    { hours: '9:00 – 10:00', name: 'zajęcia dydaktyczne' },
    { hours: '10:00 – 11:00', name: 'zabawy w grupie' },
    { hours: '11:00 – 11:15', name: 'przygotowanie do obiadu' },
    { hours: '11:15 – 11:45', name: 'obiad' },
    { hours: '11:45 – 12:00', name: 'mycie, przygotowanie do leżakowania' },
    { hours: '12:00 – 14:00', name: 'leżakowanie' },
    { hours: '14:00 – 14:15', name: 'ubieranie' },
    { hours: '14:15 – 14:40', name: 'podwieczorek' },
    { hours: '14:40 – 16:00', name: ' zabawy w grupie, odchodzenie dzieci do domu' },
  ];

  return dayScheduleArr;
};
