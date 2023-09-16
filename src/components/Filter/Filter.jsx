import { Field } from "./Filter.styled";

export const Filter = ({ value, onChange }) => {
    return (
      <div>
        <h2>Find contacts by name</h2>
        <Field
          type="text"
          value={value}
          onChange={evt => onChange(evt.target.value)}
        ></Field>
      </div>
    );
  };