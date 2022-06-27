export function TableHead  ({
value,
className
})
{
  return (
    <thead>
      <tr className="headerTable">
        {value.map(item=><th>{item}</th>)}
      </tr>
    </thead>
  );
};