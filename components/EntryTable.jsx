import { useState } from 'react';

export default function EntryTable({entries, initialLimit}) {
  const [isTruncated, setIsTruncated] = useState(true);

  const renderEntries = isTruncated ? entries.slice(0, initialLimit) : entries;

  const showAllButton = <form><button type="button" onClick={() => setIsTruncated(false)}>View all ⭲</button></form>;

  return (
    <>
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
      {renderEntries.map(entry => {
        return (
          <tr key={entry.date}>
            <td>{entry.date}</td>
            <td>{entry.vendor.name}</td>
            <td>{entry.ingredient}</td>
            <td>{entry.notes}</td>
            <td>{entry.quality}</td>
            <td>{entry.count}</td>
            <td>{entry.verify} (Action)</td>
          </tr>
        )
      })}
      </tbody>
    </table>
    { isTruncated ? showAllButton : '' }
    </>
  );
}
