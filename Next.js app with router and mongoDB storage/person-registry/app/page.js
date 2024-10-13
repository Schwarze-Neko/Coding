import Link from "next/link";
import styles from "./page.module.css";

async function getData() {
  try {
    const response = await fetch("http://localhost:3000/api", {
      next: { revalidate: 5 },
    });
    return response.json();

  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Home() {
  const entries = await getData();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Person Registry</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry._id}>
              <td>{entry._id}</td>
              <td>{entry.firstName}</td>
              <td>{entry.lastName}</td>
              <td>{entry.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/entries" className={styles.link}>Add New Person</Link>
    </main>
  );
}
