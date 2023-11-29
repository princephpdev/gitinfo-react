import React from "react";
import { Form, InputGroup } from "react-bootstrap";

interface IAppInputProps {
  value?: string;
  handleChange?: (e: any) => void;
}

const AppInput: React.FC<IAppInputProps> = ({
  value,
  handleChange,
}): JSX.Element => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
      <Form.Control
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        name="username"
        value={value}
        onChange={handleChange}
      />
    </InputGroup>
  );
};

export default AppInput;
