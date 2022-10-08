function Users({ data }) {
    const listItems = data.map((x, i) => { return <li key={i}>{x.name}</li> })
    return (<div>
        <h1>You are now user list page</h1>
        <ul>
            {listItems}
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
