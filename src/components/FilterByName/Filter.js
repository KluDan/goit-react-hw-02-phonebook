export const Filter = ({ filter, onChangeName }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={evt => onChangeName(evt.target.value)}
      />
    </label>
  );
};
