import React from "react";

const cnxt = React.createContext()

const  CnxtProvider = cnxt.Provider

const CnxtConsum = cnxt.Consumer

export {CnxtConsum , CnxtProvider}