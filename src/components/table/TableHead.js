// import { Header } from "../header/Header"
import "./table.css"

export function TableHead({
   columns,
    key, 
    Header }) {
  return (
    <thead>
      <tr className="headerTable">
        {value.map((item, i)=><th key={i} className="tableHeaderCell">{item}"oi"</th>)}
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