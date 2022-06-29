// import { Header } from "../header/Header"
import "./table.css"

export function TableHead  ({
value,
className
})
{
  return (
    <thead>
      <tr className="headerTable">
        {value.map((item, i)=><th key={i} className="tableHeaderCell">{item}"oi"</th>)}
      </tr>
    </thead>
  );
};