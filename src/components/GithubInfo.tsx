import { useState } from "react";
import AppInput from "./ui/AppInput";
import { useDebounce } from "../hooks/useDebounce";
import AppAlert from "./ui/AppAlert";
import AppRow from "./ui/AppRow";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { githubActions } from "../redux/github/slice";
import { getUserOrgs, getUserRepo } from "../utils/githubService";

const GithubInfo = (): JSX.Element => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { repos, orgs } = useAppSelector((state) => state.github);
  const dispatch = useAppDispatch();

  const debouncedRequest = useDebounce(() => {
    if (username && username !== "") {
      fetchUserRepoAndOrgs(username);
    }
  });

  const handleUserName = (e: any) => {
    setUsername(e.target.value);
    debouncedRequest(username);
  };

  const fetchUserRepoAndOrgs = async (username: string) => {
    try {
      setLoading(true);
      setError("");

      const userRepos = (await getUserRepo(username)).data.map((item: any) => {
        return {
          id: item?.id,
          url: item?.clone_url,
          name: item?.name,
        };
      });

      const userOrgs = (await getUserOrgs(username)).data.map((item: any) => {
        return {
          id: item?.id,
          url: item?.url,
          name: item?.title,
        };
      });

      dispatch(githubActions.setRepo(userRepos));
      dispatch(githubActions.setOrgs(userOrgs));

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setUsername("");
      setError("Invalid Username or permission denied");
      console.log("Error while fetching the details", error);
    }
  };

  return (
    <div className="githubinfo">
      <div className="py-3" id="githubuserinput">
        <AppInput value={username} handleChange={handleUserName} />
        {error && <AppAlert variant="danger" message={error} />}
      </div>
      {username && (
        <div className="py-3" id="githubdetails">
          <AppRow loading={loading} repos={repos} orgs={orgs}></AppRow>
        </div>
      )}
    </div>
  );
};

export default GithubInfo;
