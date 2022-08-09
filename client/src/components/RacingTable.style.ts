import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border: 1px solid #fff;
  border-collapse: collapse;
  font-size: 1.5rem;
  font-weight: 600;
`;

const TableHead = styled.thead`
  color: #ffcc66;
`;

const TableRow = styled.tr`
  background-color: #7c795d;
`;

const HeaderCell = styled.th`
  border: 2px solid #fff;
  border-collapse: collapse;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
`;

const TableBody = styled.tbody``;

const BodyCell = styled.td`
  border: 2px solid #fff;
  border-radius: 0.3rem;
  border-collapse: collapse;
  color: #fff;
  padding: 0.5rem 1rem;

  &:nth-child(even) {
    text-align: right;
  }
`;

export { Table, TableHead, TableRow, HeaderCell, TableBody, BodyCell };
