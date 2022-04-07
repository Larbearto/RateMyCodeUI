import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackItems from './FeedbackItems'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return (
      <p>
        <strong>No Feedback Yet</strong>
      </p>
    )
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItems key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
