import "./table.css"

export function TableHead  ({
  value,
  className
  })
  {
    return (
      <thead>
        <tr className="headerTable">
          {value.map((item, i)=><th key={i} className="tableHeaderCell">{item}</th>)}
        </tr>
      </thead>
    );
  };