import HomeScreen from "./pages/HomeScreen";
import AppHeader from "./components/ui/AppHeader";

function App(): JSX.Element {
  return (
    <>
      <AppHeader title="Github User Info" />
      <HomeScreen />
    </>
  );
}

export default App;
