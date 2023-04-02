import ListCard from '../components/ListCard'

export const getStaticProps = async () => {
  const data = await fetch(
      process.env.ALL_COURSES_URL,
      {
          method: 'get'
      }
  )
  let allCourses = await data.json();

  return {
      props: {
          allCourses: allCourses
      }
  }
}

const Home = ({ allCourses }) => {
  return (
    <ListCard courses={allCourses}/>
  )
}

export default Home