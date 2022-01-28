import { useState } from 'react';
import sortBy from 'lodash/sortBy';
import SortableColumnHeader from './SortableColumnHeader';

// TODO: move columns, orderedColumns outside of EntryTable to separate concerns.
// This is becoming a kind of column definition, and should include how to render
// each column's value, rather than hardcoding the structure as a part of this
// component. 
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
  const [isSortAscending, setIsSortAscending] = useState(true);

  const sortedEntriesAscending = sortBy(entries, [sortColumn.sortIteratee]);
  const sortedEntries = isSortAscending ? sortedEntriesAscending : sortedEntriesAscending.reverse();
  const renderEntries = isTruncated ? sortedEntries.slice(0, initialLimit) : sortedEntries;

  const showAllButton = <form><button type="button" onClick={() => setIsTruncated(false)}>View all ⭲</button></form>;

  const handleHeaderClick = (column) => {
    if(sortColumn === column) {
      setIsSortAscending(!isSortAscending);
    } else {
      setIsSortAscending(true);
    }

    setSortColumn(column);
  }

  return (
    <>
    <table>
      <thead>
        <tr>
          {orderedColumns.map((name) => {
            return (
              <SortableColumnHeader
                key={name}
                onClick={() => handleHeaderClick(columns[name])}
                isSorted={sortColumn === columns[name]}
                isSortAscending={isSortAscending}
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
