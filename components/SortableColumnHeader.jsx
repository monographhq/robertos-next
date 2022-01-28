export default function SortableColumnHeader({onClick, children, isSorted}) {
  return (
    <th>
      <button type="button" onClick={onClick}>
        {children}
        {isSorted ? '!' : ''}
      </button>
    </th>
  );
}
