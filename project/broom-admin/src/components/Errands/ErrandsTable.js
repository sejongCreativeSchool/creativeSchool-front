import React, { useEffect } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { filterErrandTableByFilter } from "../../lib/filterErrandTableByFilter";

function ErrandsTable({ errands, input, category, progress }) {
  useEffect(() => {
    console.log(errands);
  }, []);
  return (
    <div>
      <Table basic="very" style={{ marginBottom: "20px" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>제목</Table.HeaderCell>
            <Table.HeaderCell>가격</Table.HeaderCell>
            <Table.HeaderCell>카테고리</Table.HeaderCell>
            <Table.HeaderCell>경로</Table.HeaderCell>
            <Table.HeaderCell>작성자</Table.HeaderCell>
            <Table.HeaderCell>진행 상태</Table.HeaderCell>
            <Table.HeaderCell>관리</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {errands && (
          <Table.Body>
            {filterErrandTableByFilter(errands, input, category, progress).map(
              (errand) => (
                <Table.Row>
                  <Table.Cell>{errand.desc}</Table.Cell>
                  <Table.Cell>{`${errand.price}원`}</Table.Cell>
                  <Table.Cell>{errand.category}</Table.Cell>
                  <Table.Cell>{`${errand.from} -> ${errand.to}`}</Table.Cell>
                  <Table.Cell>
                    {errand.user ? errand.user.name : " "}
                  </Table.Cell>
                  <Table.Cell>{errand.done ? "완료" : "미완료"}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/errands/${errand._id}`} exact>
                      <Button>관리</Button>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>
        )}
      </Table>
    </div>
  );
}

export default ErrandsTable;
