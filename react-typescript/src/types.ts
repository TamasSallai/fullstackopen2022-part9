interface CoursePartBase {
  name: string
  exerciseCount: number
  type: string
}

interface CoursePartBaseWithDesc extends CoursePartBase {
  description: string
}

interface CoursePartNormal extends CoursePartBaseWithDesc {
  type: 'normal'
}

interface CoursePartProject extends CoursePartBase {
  type: 'group'
  groupProjectCount: number
}

interface CoursePartSubmission extends CoursePartBaseWithDesc {
  type: 'submission'
  exerciseSubmissionLink: string
}
interface CoursePartRequirements extends CoursePartBaseWithDesc {
  type: 'special'
  requirements: ['nodejs', 'jest']
}

export type CoursePart =
  | CoursePartNormal
  | CoursePartProject
  | CoursePartSubmission
  | CoursePartRequirements
