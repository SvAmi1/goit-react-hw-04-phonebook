import { Btn } from "./ContactItem.styled";

export const ContactItem = ({
    info,
    onDelete,
  }) => {
    return (
      <div>
        <p>{info.name}: {info.number}</p>
      <div>
          <Btn onClick={() => onDelete(info.id)}>Delete</Btn>
        </div>
      </div>
    );
  };