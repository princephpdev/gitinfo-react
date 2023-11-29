import React from "react";
import { Row } from "react-bootstrap";
import AppCol, { IAppColProps } from "./AppCol";

interface IAppRowProps {
  loading: boolean;
  repos: [];
  orgs: [];
}

const AppRow: React.FC<IAppRowProps> = ({
  loading,
  repos,
  orgs,
}): JSX.Element => {
  const cols: IAppColProps[] = [
    {
      title: "Repositories",
      data: repos,
      loading,
    },
    {
      title: "Organisations",
      data: orgs,
      loading,
    },
  ];
  return (
    <Row>
      {cols?.length &&
        cols?.map((col, index) => (
          <AppCol
            title={col.title}
            data={col.data}
            loading={col.loading}
            key={index}
          />
        ))}
    </Row>
  );
};

export default AppRow;
