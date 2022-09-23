import Image from 'next/image';

const FbButton = props => {
  const FB_URL = 'https://www.facebook.com/profile.php?id=100064091741121';

  return (
    <a
      href={FB_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Przycisk przekierowujący do nowej karty z facebookiem żłobka"
    >
      <Image
        src="/images/facebook-icon.svg"
        alt="Ikonka facebook"
        layout="fixed"
        width="28"
        height="28"
      />
    </a>
  );
};

export default FbButton;
