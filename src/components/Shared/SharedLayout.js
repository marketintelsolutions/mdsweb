import React from 'react'
import Footer from '../Footers/Footer'
import NavBar from '../NavBar/NavBar'

const SharedLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            <div className='mt-12'>{children}</div>
            <Footer />
        </>
    )
}

export default SharedLayout