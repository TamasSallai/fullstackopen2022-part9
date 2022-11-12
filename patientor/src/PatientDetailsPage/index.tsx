import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { apiBaseUrl } from '../constants'
import { saveSelectedPatient, useStateValue } from '../state'
import { Patient } from '../types'

const PatientDetailsPage = () => {
  const { id } = useParams<{ id: string }>()
  const [{ patient }, dispatch] = useStateValue()

  useEffect(() => {
    if (id && patient?.id !== id) {
      console.log('Hello World')

      axios
        .get<Patient>(`${apiBaseUrl}/patients/${id}`)
        .then((response) => {
          dispatch(saveSelectedPatient(response.data))
        })
        .catch((e) => console.log(e.message))
    }
  }, [id])

  return (
    <div>
      {patient && (
        <div>
          <h2>
            {patient.name}{' '}
            {patient.gender === 'male' ? (
              <span>&#9794;</span>
            ) : (
              <span>&#9792;</span>
            )}
          </h2>
          <div>ssn: {patient.ssn}</div>
          <div>occupation: {patient.occupation}</div>{' '}
        </div>
      )}
    </div>
  )
}

export default PatientDetailsPage
