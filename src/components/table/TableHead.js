import "./table.css"

export function TableHead  ({
  value,
  className
  })
  {
    return (
      <thead>
        <tr className="headerTable">
          {value.map(item=><th className="tableHeaderCell">{item}</th>)}
        </tr>
      </thead>
    );
  };