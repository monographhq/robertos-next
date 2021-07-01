# Roberto's Next.js GraphQL API

Our fearless CEO Roberto is not only [a pizzaiolo](https://github.com/monographhq/robertos/blob/main/README.md#roberto-il-pizzaiolo-), he's also a big fan of modern javascript and APIs. When he's not spending time proving dough, he's crafting a GraphQL backend to handle all the update madness that his vendors send him.

## Problemo

Build a sortable, nestable, groupable table view in React using the GraphQL API. The image below is for reference, please feel free to take creative liberties with the implementation on both design and product. [Figma file](https://www.figma.com/file/dmMcy9QvRHpWaxrOEQQrbG/Robertos-Dashboard?node-id=8%3A509) for additional reference. 

View all: For the nested entries, only show a few (10) then have a button to show the rest of the entries. Product implementation is up to you

Bonus: Add one little special feature that you personally think is important in developing features (examples: updated design, animations, performance, graphql refactor, testing, etc).

Once you're finished please invite me to the repo and send a quick email. Github username: `moeamaya`

![flat](https://user-images.githubusercontent.com/1373293/124149320-521a8380-da45-11eb-827b-7eae897ad87b.jpg)
![grouped](https://user-images.githubusercontent.com/1373293/124194357-4945a400-da7d-11eb-98be-9ae4e8bb1015.jpg)




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

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
