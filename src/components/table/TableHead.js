/* eslint-disable no-lone-blocks */
import "./table.css";

export function TableHead({
   columns,
    key, 
    Header }) {
  return (
    <thead>
      <tr className="headerTable">
          <th className="tableHeaderCell">{columns}</th>
      </tr>
    </thead>
  );
}

{/* <tr className="headerTable">
React.Children.toArray(
    columns.map(({ key,Header }) => 
    <th className="tableHeaderCell">{Header}</th>)
  )
</tr> */}