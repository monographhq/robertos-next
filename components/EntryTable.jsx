import { useState } from 'react';
import sortBy from 'lodash/sortBy';
import SortableColumnHeader from './SortableColumnHeader';

const columns = {
  date: {
    sortIteratee: (entry) => entry.date,
    heading: 'Date',
  },
  vendor: {
    sortIteratee: (entry) => entry.vendor.name,
    heading: 'Vendor',
  },
  ingredient: {
    sortIteratee: (entry) => entry.ingredient,
    heading: 'Ingredient',
  },
  notes: {
    sortIteratee: (entry) => entry.notes,
    heading: 'Notes',
  },
  quality: {
    sortIteratee: (entry) => entry.quality,
    heading: 'Quality',
  },
  count: {
    sortIteratee: (entry) => entry.count,
    heading: 'Count',
  },
  action: {
    sortIteratee: (entry) => entry.verify,
    heading: 'Action',
  }
};

const orderedColumns = [
  'date',
  'vendor',
  'ingredient',
  'notes',
  'quality',
  'count',
  'action',
];

export default function EntryTable({entries, initialLimit}) {
  const [isTruncated, setIsTruncated] = useState(true);
  const [sortColumn, setSortColumn] = useState(columns.date);

  const sortedEntries = sortBy(entries, [sortColumn.sortIteratee]);
  const renderEntries = isTruncated ? sortedEntries.slice(0, initialLimit) : sortedEntries;

  const showAllButton = <form><button type="button" onClick={() => setIsTruncated(false)}>View all ⭲</button></form>;

  return (
    <>
    <table>
      <thead>
        <tr>
          {orderedColumns.map((name) => {
            return (
              <SortableColumnHeader
                key={name}
                onClick={() => setSortColumn(columns[name])}
                isSorted={sortColumn === columns[name]}
              >
                {columns[name].heading}
              </SortableColumnHeader>
            )
          })}
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
