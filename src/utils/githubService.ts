import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
});

export const getUserRepo = async (username: string) => {
  return await octokit.request("GET /users/:username/repos", {
    username: username,
  });
};

export const getUserOrgs = async (username: string) => {
  return await octokit.request("GET /users/:username/orgs", {
    username: username,
  });
};
