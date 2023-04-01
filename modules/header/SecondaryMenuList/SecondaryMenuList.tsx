import { NavLink } from 'modules/header/NavLink/NavLink';
import { useRef } from 'react';
import { StyledList } from './SecondaryMenuList.styles';
import { useToggleSecondaryMenuList } from './useToggleSecondaryMenuList';

type Props = {
  handleCloseMenu: (_e: KeyboardEvent | MouseEvent) => void;
};

export const SecondaryMenuList = ({ handleCloseMenu }: Props) => {
  const secondaryMenuRef = useRef<HTMLUListElement>(null);
  const {} = useToggleSecondaryMenuList(secondaryMenuRef, handleCloseMenu);

  return (
    <StyledList ref={secondaryMenuRef}>
      <li>
        <NavLink hasNarrowHitbox direction="rekrutacja">
          Rekrutacja
        </NavLink>
      </li>
      <li>
        <NavLink hasNarrowHitbox direction="wyprawka">
          Wyprawka
        </NavLink>
      </li>
      <li>
        <NavLink hasNarrowHitbox direction="oplaty">
          Opłaty
        </NavLink>
      </li>
      <li>
        <NavLink hasNarrowHitbox direction="plan-dnia">
          Plan dnia
        </NavLink>
      </li>
      <li>
        <NavLink hasNarrowHitbox direction="kadra">
          Nasza kadra
        </NavLink>
      </li>
    </StyledList>
  );
};
