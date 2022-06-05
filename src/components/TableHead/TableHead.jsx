import TableRow from '../TableRow';
import TableHeadCell from '../TableHeadCell';

const TableHead = () => (
  <thead>
    <TableRow>
      <TableHeadCell key="name" title="Name" />
      <TableHeadCell key="phone" title="Phone" />
    </TableRow>
  </thead>
);

export default TableHead;
