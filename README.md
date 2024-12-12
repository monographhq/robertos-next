# Roberto's Next.js GraphQL API

Our fearless CEO Roberto is not only [a pizzaiolo](https://github.com/monographhq/robertos/blob/main/README.md#roberto-il-pizzaiolo-), he's also a big fan of modern javascript and APIs. When he's not spending time proving dough, he's crafting a GraphQL backend to handle all the update madness that his vendors send him.

## Getting Started

First, run the development server:

```bash
npm i && npm run dev
# or
yarn && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js and Apollo, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Apollo Client Documentation](https://www.apollographql.com/docs/react)

## Problemos

- Unfortunately, Roberto's API is a bit unstable and sometimes returns errors. Let's:
  - Figure out how to determine that an error was thrown.
  - Handle these gracefully. What's a good approach?
- Wow, Roberto's business is really taking off. It'd be great to get some insight into our vendors. Let's create some reporting so he can get insight into his vendors. For each vendor, we'd like to see:
  - Name of vendor
  - Average quality
  - Contact method

What else could we do to improve Roberto's dashboard? Search? Notifications? Scaling?

## API

This is the current verison of the query, but feel free to change it up using the generator file (`generate.js`) to a format you think works better. You can play with the GraphQL API at `http://localhost:3000/api/graphql`

```
{
  entries {
    date
    ingredient
    count
    quality
    notes
    verify
    vendor {
      name
      ingredients
      source {
        api
        frequency
      }
    }
  }
}
```

Build a sortable, nestable, groupable table view in React using the GraphQL API. The image below is for reference, please feel free to take creative liberties with the implementation on both design and product. [Figma file](https://www.figma.com/file/dmMcy9QvRHpWaxrOEQQrbG/Robertos-Dashboard?node-id=8%3A509) for additional reference.

**Group by:** To help Roberto organize the entry updates, please add a way to group the entry rows by ingredient. The image shows a dropdown, but you can implement with a simple button.

**View all:** For the nested entries, only show a few (10) then have a button to show the rest of the entries. Product implementation is up to you

![flat](https://user-images.githubusercontent.com/1373293/124149320-521a8380-da45-11eb-827b-7eae897ad87b.jpg)
![grouped](https://user-images.githubusercontent.com/1373293/124194357-4945a400-da7d-11eb-98be-9ae4e8bb1015.jpg)
