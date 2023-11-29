import { githubReducer } from "./github/slice";

const rootReducer = {
  github: githubReducer,
};

export default rootReducer;
