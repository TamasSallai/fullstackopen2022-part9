import React from 'react'
import { Entry } from '../types'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined'
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined'

const HealthCareEntry = ({ entry }: { entry: Entry }) => {
  const { date, description, specialist } = entry
  return (
    <div
      style={{
        border: '1px solid black',
        borderRadius: '10px',
        padding: '1rem',
      }}
    >
      <div>{date}</div>
      <div>{description}</div>
      <HealingOutlinedIcon />
      <div>diagnosed by {specialist}</div>
    </div>
  )
}

const HospitalEntry = ({ entry }: { entry: Entry }) => {
  const { date, description, specialist } = entry
  return (
    <div
      style={{
        border: '1px solid black',
        borderRadius: '10px',
        padding: '1rem',
      }}
    >
      <div>{date}</div>
      <div>{description}</div>
      <LocalHospitalIcon />
      <div>diagnosed by {specialist}</div>
    </div>
  )
}

const OccupationalHealthcareEntry = ({ entry }: { entry: Entry }) => {
  const { date, description, specialist } = entry
  return (
    <div
      style={{
        border: '1px solid black',
        borderRadius: '10px',
        padding: '1rem',
      }}
    >
      <div>{date}</div>
      <div>{description}</div>
      <MedicalInformationOutlinedIcon />
      <div>diagnosed by {specialist}</div>
    </div>
  )
}

const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  switch (entry.type) {
    case 'HealthCheck':
      return <HealthCareEntry entry={entry} />
    case 'Hospital':
      return <HospitalEntry entry={entry} />
    case 'OccupationalHealthcare':
      return <OccupationalHealthcareEntry entry={entry} />
  }
}

export default EntryDetails
