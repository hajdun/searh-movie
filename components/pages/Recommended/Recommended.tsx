import React from 'react'
import { useRouter } from 'next/router'
import { BasePage } from '../../templates/BasePage'
import { RecommendedResultList } from '../../organisms/RecommendedResultList'

const Recommended: React.FC = () => {
  const router = useRouter()
  const { movieId } = router.query

  const singleMovieId = typeof movieId === 'string' ? movieId : Array.isArray(movieId) ? movieId[0] : ''

  return (
    <BasePage>
      <RecommendedResultList movieId={singleMovieId}/>
    </BasePage>
  )
}

export default Recommended
