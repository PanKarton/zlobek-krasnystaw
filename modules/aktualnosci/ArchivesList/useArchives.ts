import { getMonthsSinceDate } from 'helpers/getMonthsSinceDate';
import { useCallback, useState } from 'react';

export const useArchives = () => {
  const [areAllVisible, setAreAllVisible] = useState(false);

  const releaseDate = '2022-11-01';

  const monthsData = getMonthsSinceDate(new Date(releaseDate));

  const months = areAllVisible ? monthsData : monthsData.slice(0, 5);

  const isButtonVisible = monthsData.length >= 6;

  const handleToggleMonthsList = useCallback(() => setAreAllVisible((prevValue) => !prevValue), []);

  return {
    months,
    isButtonVisible,
    areAllVisible,
    handleToggleMonthsList,
  };
};
