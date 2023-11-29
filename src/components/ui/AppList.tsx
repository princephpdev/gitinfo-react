import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export type data = {
  id?: string;
  url: string;
  name: string;
};

export interface IAppListProps {
  data: data[];
}

const AppList: React.FC<IAppListProps> = ({ data }): JSX.Element => {
  return (
    <ListGroup as="ol" numbered>
      {data?.map((item) => (
        <ListGroupItem action href={item?.url} key={item?.id}>
          {item?.name}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default AppList;
