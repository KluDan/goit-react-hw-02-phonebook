import { FilterStyled } from './Filter.styled';

export const Filter = ({ filter, onChangeName }) => {
  return (
    <FilterStyled>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={evt => onChangeName(evt.target.value)}
      />
    </FilterStyled>
  );
};
