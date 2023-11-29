import { useState } from "react";
import AppInput from "./ui/AppInput";
import { useDebounce } from "../hooks/useDebounce";
import AppAlert from "./ui/AppAlert";
import AppRow from "./ui/AppRow";

const GithubInfo = (): JSX.Element => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const debouncedRequest = useDebounce(() => {
    if (username && username !== "") {
      console.log(username);
    }
  });

  const handleUserName = (e: any) => {
    setUsername(e.target.value);
    debouncedRequest(username);
  };

  return (
    <div className="githubinfo">
      <div className="py-3" id="githubuserinput">
        <AppInput value={username} handleChange={handleUserName} />
        {error && <AppAlert variant="danger" message={error} />}
      </div>
      <div className="py-3" id="githubdetails">
        <AppRow></AppRow>
      </div>
    </div>
  );
};

export default GithubInfo;
