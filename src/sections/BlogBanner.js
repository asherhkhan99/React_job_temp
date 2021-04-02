import React from 'react'
import banner from '../img/banner-10.jpg'

var background = {
    backgroundImage: "url(" + { banner } + ")"
    
}

const BlogBanner = () => {
    return (
        <>
        <section className="inner-header-title" style={{ background: `url(${banner})`,}}>
			<div className="container">
				<h1>Blog Page</h1>`
			</div>
		</section>
		<div className="clearfix"></div>
        </>
    )
}

export default BlogBanner