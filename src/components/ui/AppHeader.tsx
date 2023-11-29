import React from "react";
import { Container, Navbar } from "react-bootstrap";

interface IAppHeaderProps {
  title: string;
}

const AppHeader: React.FC<IAppHeaderProps> = ({ title }): JSX.Element => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
