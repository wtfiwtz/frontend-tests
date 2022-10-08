import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Users() {
    const { data, error } = useSWR('/api/users', fetcher)

    if (error) return <p>Failed to load</p>
    if (!data) return <p>Loading...</p>

    return (<div>
        <h1>Here's your list of users:</h1>
        <ul>
            {
                data.map((x, i) => {
                    return <li key={i}>{x.name}</li>
                })
            }
        </ul>
    </div>)
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/users`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default Users
