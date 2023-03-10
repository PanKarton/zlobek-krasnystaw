import { getMonthsSinceDate, MonthData } from 'helpers/getMonthsSinceDate';
import { useNewsPosts } from 'providers/NewsPostsProvider';
import { useCallback, useState } from 'react';

export const useArchives = () => {
  const [areAllVisible, setAreAllVisible] = useState(false);
  // Index -1 means first initial posts
  const [activeMonth, setActiveMonth] = useState<number | null>(null);
  const { getPostsByMonth, getInitPosts } = useNewsPosts();

  const releaseDate = '2023-03-01';

  const monthsData = getMonthsSinceDate(new Date(releaseDate));

  const months = areAllVisible ? monthsData : monthsData.slice(0, 5);

  const isButtonVisible = monthsData.length >= 6;

  const handleToggleMonthsList = useCallback(() => setAreAllVisible((prevValue) => !prevValue), []);

  const handleLoadInitPosts = useCallback(() => {
    getInitPosts();
    setActiveMonth(null);
  }, [getInitPosts]);

  const handleLoadPostsOfMonth = useCallback(
    (monthData: MonthData, monthIndex: number) => {
      getPostsByMonth(monthData);
      setActiveMonth(monthIndex);
    },
    [getPostsByMonth],
  );

  return {
    months,
    isButtonVisible,
    areAllVisible,
    activeMonth,
    handleToggleMonthsList,
    handleLoadPostsOfMonth,
    handleLoadInitPosts,
  };
};
