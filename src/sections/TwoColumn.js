import React from 'react'
import TwoColumnCard from  '../components/TwoColumnCard'
import {TwoColumnData} from '../data/details'

const TwoColumn = () => {
    return (
       <>
       <div className="clearfix"></div>
		<section className="call-to-act">
			<div className="container-fluid">
                {TwoColumnData.map((data) => {
                const {cname,btncontent} = data;
                return (
                  <TwoColumnCard
                    key={btncontent}
                    cname = {cname}
                    btncontent = {btncontent}
                  />);
                })}  	
					
			</div>
			</section>
       </> 
    )
}

export default TwoColumn