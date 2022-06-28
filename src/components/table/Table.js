import TableBody from "./TableBody.js";
import TableHead from "./TableHead.js";
import { useSortableTable } from "../../useSortableTable.js";

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
