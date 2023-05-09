'use client'

import React, { ReactNode } from "react"
import { Toaster } from "react-hot-toast"

interface ProvidersProps {
  children: ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </React.Fragment>
  )
}

export default Providers;