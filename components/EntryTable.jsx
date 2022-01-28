export default function EntryTable({entries}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Vendor</th>
          <th>Ingredient</th>
          <th>Notes</th>
          <th>Quality</th>
          <th>Count</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {entries.map(entry => {
        return (
          <tr key={entry.date}>
            <td>{entry.date}</td>
            <td>{entry.vendor.name}</td>
            <td>{entry.ingredient}</td>
            <td>{entry.notes} (may be null)</td>
            <td>{entry.quality}</td>
            <td>{entry.count}</td>
            <td>{entry.verify} (Action)</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  );
}
