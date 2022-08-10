import { useGetHorsesQuery } from '../redux/api';
import { Table, TableHead, TableBody, TableRow, HeaderCell, BodyCell } from './RacingTable.style';

export function RacingTable() {
  const { data: horses } = useGetHorsesQuery();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <HeaderCell title="racing_header">The Horse's Name</HeaderCell>
          <HeaderCell title="racing_header">The Distance</HeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {horses &&
          horses.map((horse, index) => {
            return (
              <TableRow key={horse.name} title="racing_row">
                <BodyCell>
                  {index + 1}. {horse.name}
                </BodyCell>
                <BodyCell data-testid="distance">{horse.distance}</BodyCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
}
