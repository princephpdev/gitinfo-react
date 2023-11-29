import React from "react";
import { Card, CardBody, CardTitle, Col } from "react-bootstrap";
import AppPlaceholder from "./AppPlaceholder";
import AppList, { data } from "./AppList";

export interface IAppColProps {
  title?: string;
  data?: data[];
  loading?: boolean;
}

const AppCol: React.FC<IAppColProps> = ({
  title,
  data,
  loading,
}): JSX.Element => {
  return (
    <Col sm>
      <Card className="shadow py-2" data-testid={title}>
        <CardTitle className="text-center">
          <strong>{title}</strong>
        </CardTitle>
        <CardBody>
          {loading ? (
            <AppPlaceholder lines={4} />
          ) : data?.length ? (
            <AppList data={data}></AppList>
          ) : (
            "Nothing found"
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AppCol;
