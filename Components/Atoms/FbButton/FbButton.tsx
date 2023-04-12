import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const FbButton = ({ children }: Props) => {
  const FB_URL = 'https://www.facebook.com/profile.php?id=100064091741121';

  return (
    <a
      href={FB_URL}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Przycisk przekierowujący do nowej karty z facebookiem żłobka. Otwiera się w nowym oknie">
      {children}
    </a>
  );
};
