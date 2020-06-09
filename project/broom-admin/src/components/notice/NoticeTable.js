import React from "react";
import { Table } from "semantic-ui-react";
import { changeDataFormat } from "../../lib/changeDataFormat";
import { Link } from "react-router-dom";

function NoticeTable({ notices }) {
  return (
    <div>
      <Table basic="very" style={{ marginBottom: "20px" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>제목</Table.HeaderCell>
            <Table.HeaderCell>날짜</Table.HeaderCell>
            <Table.HeaderCell>조회</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {notices &&
            notices.map((notice) => (
              <Table.Row>
                <Table.Cell>
                  <Link
                    to={`/notice/id/${notice._id}`}
                    exact
                    style={{ color: "black" }}
                  >
                    {notice.title ? notice.title : ""}
                  </Link>
                </Table.Cell>

                <Table.Cell>{changeDataFormat(notice.updateAt)[0]}</Table.Cell>
                <Table.Cell>123</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default NoticeTable;
