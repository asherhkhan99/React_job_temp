import React from 'react'

const TwoColumnCard = ({cname,btncontent}) => {
    return(
     <>
        <div className={cname}>
            <div className="call-to-act-caption">
				<h2>We Are Expert In Web design and development</h2>
				<h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</h3>
				<a href="#" className="btn bat-call-to-act">{btncontent}</a>
			</div>
		</div>
    </>
    )
}

export default TwoColumnCard;