import React from "react";
import styled from "styled-components";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const TableWrapper = styled.div`
  padding-bottom: 20px;
`;

function UserTable({ users, inputvalue }) {
  return (
    <TableWrapper>
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>이름</Table.HeaderCell>
            <Table.HeaderCell>학과</Table.HeaderCell>
            <Table.HeaderCell>핸드폰 번호</Table.HeaderCell>
            <Table.HeaderCell>헬퍼 여부</Table.HeaderCell>
            <Table.HeaderCell>관리</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users &&
            users
              .filter((user) => user.name.indexOf(inputvalue) > -1)
              .map((user) =>
                user.name !== "admin" ? (
                  <Table.Row>
                    <Table.Cell>{user.name}</Table.Cell>

                    <Table.Cell>
                      {user.department ? user.department : "미입력"}
                    </Table.Cell>

                    <Table.Cell>
                      {user.phone ? user.phone : "미입력"}
                    </Table.Cell>

                    <Table.Cell>{user.helper ? "O" : "X"}</Table.Cell>

                    <Table.Cell>
                      <Link to={`/user/${user.accessToken}`} exact>
                        <Button>관리</Button>
                      </Link>
                    </Table.Cell>
                  </Table.Row>
                ) : null
              )}
        </Table.Body>
      </Table>
    </TableWrapper>
  );
}

export default UserTable;
