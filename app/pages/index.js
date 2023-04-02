import dynamic from 'next/dynamic'

const ListCard = dynamic(() => import('../components/ListCard'), {
  loading: () => <p>Loading...</p>,
})

export const getStaticProps = async () => {
  let allCourses = []
  try {
    const data = await fetch(
      process.env.ALL_COURSES_URL,
      {
          method: 'get'
      }
    )
    allCourses = await data.json();
  } catch (error) {
    console.log(error)
  }

  return {
      props: {
          allCourses: allCourses
      }
  }
}

const Home = ({ allCourses }) => {
  if (allCourses.length > 0) {
    return (
      <ListCard courses={allCourses}/>
    )
  } else {
    return (<p>No data fetched, check the backend api</p>)
  }
}

export default Home