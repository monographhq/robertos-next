# Roberto's Next.js GraphQL API

## Lessons Learned

If I had a chance to do this over, I would have thought more about how the final arrangement of entry data, column definitions, and the nested table would be structured as components. Instead, I worked from the inside out, starting with sorting. I didn't get beyond that, unfortunately.

## If I were to continue to work on this project

Obviously I would begin to add CSS. I'd probably use something like Tailwind to add styles within the HTML for the sake of the exercise. I'd use the team's design system if it were a part of a product.

In EntryTable I would not include details of the entry columns. Rather, I would continue to create a kind of column definition structure like I started in EntryTable. The column definition structure would also include functions for how to render each table value (e.g., date formatting, enum conversion to strings, React Components for button actions, etc.). It would be defined outside the component and passed in as a prop with the table data.

I would create a NestedTable component that takes the column definitions and the table data. It would manage rendering the outer grouping/expandable tables when row grouping is selected. When row grouping is disabled, it would render an EntryTable with all of the entries. When row grouping is enabled, it would show/hide EntryTable components within each grouped row. Since EntryTable is rendered as an HTML <table>, the grouped rows that contain these tables would be rendered as divs. They'd be aligned vertically using CSS `grid`.

I would want to add some basic component tests for abstract functions like managing sorting state in EntryTable and grouping rendering for NestedTable.

I suspect the list of entries will eventually become too large to load all at once. Eventually I'd want to move sorting and grouping into the GraphQL resolvers. I've not yet worked with Apollo Server, so I decided not to go that route for the exercise.

The nested tables would probably be queried as they are expanded by the user, rather than at the beginning.

### If I were to work on this project long term

If I knew that this was going to be a long-term project, I'd assess it from the perspective of a phone or narrow layout. In that case I'd have to think critically about how to render tabular data with little real estate.
