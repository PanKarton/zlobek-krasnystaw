import useLoader from './useLoader';

const Loader = () => {
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
export default Loader;
