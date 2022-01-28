export default function SortableColumnHeader({onClick, children, isSorted, isSortAscending}) {
  const sortIndicator = (isSorted && isSortAscending && '↓') || (isSorted && '↑') || '';
  return (
    <th>
      <button type="button" onClick={onClick}>
        {children}
        {sortIndicator}
      </button>
    </th>
  );
}
