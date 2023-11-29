import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "./App";

const mockStore = configureStore();

test("GithubInfo component renders repositories and organizations", async () => {
  const store = mockStore({
    github: {
      repos: [
        {
          id: 1,
          url: "https://github.com/test-repo-1",
          name: "TestRepo1",
        },
        {
          id: 2,
          url: "https://github.com/test-repo-2",
          name: "TestRepo2",
        },
      ],
      orgs: [
        {
          id: 1,
          url: "https://github.com/test-org-1",
          name: "Org1",
        },
        {
          id: 2,
          url: "https://github.com/test-org-2",
          name: "Org2",
        },
      ],
    },
  });

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const input = screen.getByLabelText(/Username/i);

  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    userEvent.type(input, "testuser");
  });

  expect(screen.getByTestId("Repositories")).toHaveTextContent(
    /TestRepo1.*TestRepo2/
  );
  expect(screen.getByTestId("Organisations")).toHaveTextContent(/Org1.*Org2/);
});
