import React, { createContext, useState } from "react";



interface ILoginContext {
    customerID: string
    customerName: string
    customerLastName: string
}

export const LoginContext = createContext<ILoginContext>({} as ILoginContext)


export const LoginContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

    return (
        <LoginContext.Provider value={{
            customerID: 'gabs',
            customerName: '',
            customerLastName: ''
        }}>
            {children}
        </LoginContext.Provider>
    )
}