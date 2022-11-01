import { useLoader } from './useLoader';

export const Loader = () => {
  const { isLoading } = useLoader();

  return (
    <>
      {isLoading && (
        <div id="loader-wrapper">
          <div id="loader">
            <div className="loader-dot" />
            <div className="loader-dot" />
            <div className="loader-dot" />
            <div className="loader-dot" />
            <div className="loader-dot" />
          </div>
        </div>
      )}
    </>
  );
};
