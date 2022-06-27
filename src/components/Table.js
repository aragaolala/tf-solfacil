import TableBody from "../components/TableBody.js";
import TableHead from "../components/TableHead.js";
import { useSortableTable } from "../useSortableTable.js";

const Table = ({ caption, data, columns }) => {
  const [tableData, handleSorting] = useSortableTable(data, columns);

  return (
    <>
      <table className="table">
        <caption>{caption}</caption>
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData }} />
      </table>
    </>
  );
};

export default Table;
