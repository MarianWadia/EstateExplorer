import React from 'react'
import Footer from '@/features/common/modules/Footer/Footery'
import Navigation from '@/features/common/modules/Navigation/Navigationy'

const DefaultLayout = ({children}) => {
  return (
    <>
        <Navigation />
        {children}
        <Footer /> 
    </>
  )
}

export default DefaultLayout