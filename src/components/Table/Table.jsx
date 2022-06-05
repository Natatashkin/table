import TableHead from '../TableHead';
import TableBody from '../TableBody';
import TableRow from '../TableRow';
import TableData from '../TableData';

const Table = ({ data }) => {
  return (
    <table>
      <TableHead />
      <TableBody>
        {data &&
          data.map(({ id, name, phone }) => (
            <TableRow key={id}>
              <TableData>{name}</TableData>
              <TableData>{phone}</TableData>
            </TableRow>
          ))}
      </TableBody>
    </table>
  );
};
export default Table;
