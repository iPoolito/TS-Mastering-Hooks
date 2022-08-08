import { createContext } from "react";

const initialState={
    first:'Pool',
    last:'Ortega'
}

export type UserState=typeof initialState

const context=createContext<typeof initialState>(initialState)

export default context