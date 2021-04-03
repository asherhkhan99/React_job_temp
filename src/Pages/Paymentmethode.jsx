import React from "react"
import Nav from '../sections/Nav'
import Paybanner from '../sections/Paymentbanner'
import Design from '../sections/Design'
import Footer from '../sections/Footer'


function Paymentmethod(){
    return(
        <>
        <div className="Loader"></div>
        <div className='wrapper' >
            <div className="clearfix"></div>
            <Nav/>
            <div className="clearfix"></div>
            <Paybanner/>
            <Design/>
            <Footer/>

        </div>


        </>
    )
}

export default Paymentmethod;