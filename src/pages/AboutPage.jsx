import { Link } from 'react-router-dom'
import Card from '../component/shared/Card'

function AboutPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>
          This UI was built on the React library. It allows users to submit,
          edit and delete reviews and select a number rating.
        </p>
        <p>
          The UI will also update the number of reviews and the average review
          rating automatically.
        </p>

        <p>
          <Link to='/'>Back to Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
