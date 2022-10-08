// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'

function HomePage() {
  return (<div>
    <h1>Welcome to Next.js!</h1>
    <p>
      <Link href="/users">
        <a>Users</a>
      </Link>
    </p>
  </div>)
}

export default HomePage
