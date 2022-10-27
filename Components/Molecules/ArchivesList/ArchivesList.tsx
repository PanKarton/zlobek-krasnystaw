import TextButton from 'Components/Atoms/TextButton/TextButton';
import { StyledWrapper } from './ArchivesList.styles';

const ArchivesList = () => (
  <StyledWrapper>
    <div className="archives">
      <h3 className="archives__heading">Archiwum</h3>
      <ul className="archives__list">
        <li className="archives__list-item">sierpień 2022</li>
        <li className="archives__list-item">lipiec 2022</li>
        <li className="archives__list-item">czerwiec 2022</li>
        <li className="archives__list-item">maj 2022</li>
        <li className="archives__list-item">kwiecień 2022</li>
      </ul>
      <TextButton className="archives__load-btn">Więcej...</TextButton>
    </div>
  </StyledWrapper>
);

export default ArchivesList;
