import { createContext, useReducer, useState } from "react"
import { data } from "../db/data";

export const DataContext = createContext();

export function DataProvider({children}) {

    const [dataState, setDataState] = useState([...data.continents])

    return (
        <>
        <DataContext.Provider value={{dataState}}>{children}</DataContext.Provider>
        </>
    )
}