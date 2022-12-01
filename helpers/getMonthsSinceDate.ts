const polishMonthsNames = [
  'Styczeń',
  'Luty',
  'Marzec',
  'Kwiecień',
  'Maj',
  'Czerwiec',
  'Lipiec',
  'Sierpień',
  'Wrzesień',
  'Październik',
  'Listopad',
  'Grudzień',
];

export type MonthData = {
  year: number;
  month: number;
  monthName: string;
  nextMonth: number;
  nextYear: number;
};

export const getMonthsSinceDate = (fromDate: Date) => {
  const toDate = new Date();
  const fromYear = fromDate.getFullYear();
  const fromMonth = fromDate.getMonth();
  const toYear = toDate.getFullYear();
  const toMonth = toDate.getMonth();
  const months = [];

  function aZero(n: number) {
    return n.toString().length == 1 ? (n = '0' + n) : n;
  }

  for (let year = fromYear; year <= toYear; year++) {
    let monthNum = year === fromYear ? fromMonth : 0;
    const monthLimit = year === toYear ? toMonth : 11;

    for (; monthNum <= monthLimit; monthNum++) {
      let month = monthNum + 1;

      const isDecember = month === 12;
      let nextMonth = isDecember ? 1 : month + 1;
      let nextYear = isDecember ? year + 1 : year;

      const monthName = polishMonthsNames[monthNum];
      months.push({ year, month: aZero(month), monthName, nextMonth: aZero(nextMonth), nextYear });
    }
  }
  return months;
};
