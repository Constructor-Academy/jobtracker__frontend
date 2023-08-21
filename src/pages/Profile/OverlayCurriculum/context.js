import React from 'react'

export const MyContext = React.createContext()

// This data is stored in Context instead of Redux on purpose.
// When I tried to use redux with react-pdf I always got an error that the provider was missing.
// I am not 100% sure, but the issue is probably due to that we are using an iframe and that somehow the connection to redux gets lost with iframes
// The mycontext object is passed as props, as we need to define the provider twice and pass the same object reference.
// Once for our "normal" code and once for the iframe.
const CvGeneratorContext = ({mycontext, children}) => {
    return (
        <MyContext.Provider value={mycontext}>
            {children}
        </MyContext.Provider>
    )
}

export default CvGeneratorContext
