import { Container, Navbar } from "react-bootstrap";
import GithubInfo from "../components/GithubInfo";

const HomeScreen = (): JSX.Element => {
  return (
    <Container fluid>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Github User Info</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <GithubInfo />
      </Container>
    </Container>
  );
};

export default HomeScreen;
