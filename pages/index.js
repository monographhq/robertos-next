import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useQuery, gql } from "@apollo/client";

const ENTRIES = gql`
  query getEntries {
    entries {
      date
      ingredient
      count
      quality
      verify
      vendor {
        name
      }
    }
  }
`;

// @todo ROBERTO: Wire up API!
// const STATS = gql`
//   query getVendorStats {
//     vendorStats {
//       name
//       averageQuality
//       contactMethod
//     }
//   }
// `;

export default function Home() {
  const { loading, data } = useQuery(ENTRIES);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Robertos</title>
        <meta name="description" content="Robertos" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.header}>Robertos Dashboard</h1>

        {/* @todo ROBERTO: Wire up API! */}
        {/* <ul>
          {data.vendorStats.map((vendor) => {
            return (
              <li key={vendor.name}>
                {vendor.name}, {vendor.averageQuality}, {vendor.contactMethod}
              </li>
            );
          })}
        </ul> */}

        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>Date</th>
              <th className={styles.tableHeader}>Ingredient</th>
              <th className={styles.tableHeader}>Count</th>
              <th className={styles.tableHeader}>Quality</th>
              <th className={styles.tableHeader}>Vendor</th>
            </tr>
          </thead>
          {data.entries.map((entry) => {
            return (
              <tr key={entry.date}>
                <td>{new Date(entry.date).toLocaleDateString("en-US")}</td>
                <td>{entry.ingredient}</td>
                <td>{entry.count}</td>
                <td>{entry.quality}</td>
                <td>{entry.vendor.name}</td>
              </tr>
            );
          })}
        </table>
      </main>
    </div>
  );
}
