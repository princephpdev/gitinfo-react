import React from "react";
import { Row } from "react-bootstrap";
import AppCol, { IAppColProps } from "./AppCol";

interface IAppRowProps {
  cols?: IAppColProps[];
}

const AppRow: React.FC<IAppRowProps> = ({ cols }): JSX.Element => {
  return (
    <Row>
      {cols?.length &&
        cols?.map((col) => (
          <AppCol title={col.title} data={col.data} loading={col.loading} />
        ))}
    </Row>
  );
};

export default AppRow;
