import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  useQuery,
  gql
} from '@apollo/client';
import EntryTable from '../components/EntryTable';

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

export default function Home() {
  const { loading, error, data } = useQuery(ENTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Robertos</title>
        <meta name="description" content="Robertos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Robertos Dashboard</h1>

        <EntryTable entries={data.entries} initialLimit={10} />
      </main>
    </div>
  )
}
