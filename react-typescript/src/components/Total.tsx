import React from 'react'
import { CoursePart } from '../types'

const Total = ({ courseParts }: { courseParts: CoursePart[] }) => {
  return (
    <p>
      Number of exercises{' '}
      {courseParts.reduce((prev, curr) => prev + curr.exerciseCount, 0)}
    </p>
  )
}

export default Total
