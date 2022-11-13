import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiBaseUrl } from '../constants'
import { saveSelectedPatient, useStateValue } from '../state'
import { Diagnosis, Patient } from '../types'
import EntryDetails from './EntryComponent'

const PatientDetailsPage = () => {
  const { id } = useParams<{ id: string }>()
  const [{ patient }, dispatch] = useStateValue()
  const [, setDiagnoses] = useState<{ [code: string]: Diagnosis }>({})

  useEffect(() => {
    if (id && patient?.id !== id) {
      axios
        .get<Patient>(`${apiBaseUrl}/patients/${id}`)
        .then((response) => {
          dispatch(saveSelectedPatient(response.data))
        })
        .catch((e) => console.log(e.message))

      axios
        .get<Diagnosis[]>(`${apiBaseUrl}/diagnoses`)
        .then((response) => {
          const diagnosisDictionary = response.data.reduce(
            (memo, diagnosis) => ({ ...memo, [diagnosis.code]: diagnosis }),
            {}
          )
          setDiagnoses(diagnosisDictionary)
        })
        .catch((e) => console.log(e))
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
          <div>occupation: {patient.occupation}</div> <br />
          <div>
            <h3>entries</h3>
            {patient.entries.map((entry) => (
              <EntryDetails key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PatientDetailsPage
