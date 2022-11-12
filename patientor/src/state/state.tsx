import React, { createContext, useContext, useReducer } from 'react'
import { Patient } from '../types'

import { Action } from './reducer'

export type State = {
  patient: Patient | null
  patients: { [id: string]: Patient }
}

const initialState: State = {
  patient: null,
  patients: {},
}

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState,
])

type StateProviderProps = {
  reducer: React.Reducer<State, Action>
  children: React.ReactElement
}

export const StateProvider = ({ reducer, children }: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
}
export const useStateValue = () => useContext(StateContext)

export const setPatientList = (patients: Patient[]): Action => {
  return {
    type: 'SET_PATIENT_LIST',
    payload: patients,
  }
}

export const addPatient = (patient: Patient): Action => {
  return {
    type: 'ADD_PATIENT',
    payload: patient,
  }
}

export const saveSelectedPatient = (patient: Patient): Action => {
  return {
    type: 'SELECT_PATIENT',
    payload: patient,
  }
}
