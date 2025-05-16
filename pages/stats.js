import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useQuery, gql } from "@apollo/client";

const STATS = gql`
  query getVendorStats {
    vendorStats {
      name
      ingredients {
        name
      }
      averageQuality
    }
  }
`;

export default function Home() {
  const { loading, data } = useQuery(STATS);

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

        {/* @todo ROBERTO: fix the API! */}
        <ul>
          {data.vendorStats.map((vendor) => {
            return (
              <li key={vendor.name}>
                {vendor.name}, {vendor.averageQuality}, ingredients:{" "}
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
