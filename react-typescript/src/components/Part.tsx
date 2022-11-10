import React from 'react'
import { CoursePart } from '../types'

const Part = ({ part }: { part: CoursePart }) => {
  const { name, exerciseCount, type } = part

  switch (part.type) {
    case 'normal':
      return (
        <ul>
          <li>name: {name}</li>
          <li>exerciseCount: {exerciseCount}</li>
          <li>type: {type}</li>
          <li>description: {part.description}</li>
        </ul>
      )
    case 'group':
      return (
        <ul>
          <li>name: {name}</li>
          <li>exerciseCount: {exerciseCount}</li>
          <li>type: {type}</li>
          <li>description: {part.groupProjectCount}</li>
        </ul>
      )
    case 'submission':
      return (
        <ul>
          <li>name: {name}</li>
          <li>exerciseCount: {exerciseCount}</li>
          <li>type: {type}</li>
          <li>description: {part.description}</li>
          <li>exerciseSubmissionLink: {part.exerciseSubmissionLink}</li>
        </ul>
      )
    case 'special':
      return (
        <ul>
          <li>name: {name}</li>
          <li>exerciseCount: {exerciseCount}</li>
          <li>type: {type}</li>
          <li>description: {part.description}</li>
          <li>requirements: {part.requirements}</li>
        </ul>
      )
    default:
      return null
  }
}

export default Part
