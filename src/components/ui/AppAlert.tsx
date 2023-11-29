import React from "react";
import { Alert } from "react-bootstrap";

interface IAppAlertProps {
  variant?: string;
  message?: string;
}

const AppAlert: React.FC<IAppAlertProps> = ({
  variant,
  message,
}): JSX.Element => {
  return (
    <Alert variant={variant} dismissible>
      {message}
    </Alert>
  );
};

export default AppAlert;
