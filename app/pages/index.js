import ListCard from '../components/ListCard'

export const getStaticProps = async () => {
  const data = await fetch(
      'http://localhost:8000/api/courses/',
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