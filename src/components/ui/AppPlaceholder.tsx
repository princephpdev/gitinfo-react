import React from "react";
import { Placeholder } from "react-bootstrap";

interface IAppPlaceHolder {
  lines: number;
}

const AppPlaceholder: React.FC<IAppPlaceHolder> = ({
  lines = 2,
}): JSX.Element => {
  const placeholders = Array.from({ length: lines }, (_, index) => (
    <Placeholder key={index} as="h3" animation="glow">
      <Placeholder xs={12} />
    </Placeholder>
  ));

  return <>{placeholders}</>;
};

export default AppPlaceholder;
