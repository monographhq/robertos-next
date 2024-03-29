import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  useQuery,
  gql
} from '@apollo/client';

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

        <ul>
          {data.entries.map( entry => {
            return (
              <li key={entry.date}>
                {entry.date}, {entry.ingredient}, {entry.count}, {entry.quality}, {entry.verify}, {entry.vendor.name} 
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}
