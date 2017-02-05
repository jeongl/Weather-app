import Link from 'next/link'
import Head from 'next/head'
import { connect } from 'react-redux'
import Clock from './Clock'

let style = {
	color: 'black',
	border: '1px solid',
	width: '135px',
	height: '160px'
}

// export default connect(state => state)(({ title, linkTo, lastUpdate, light }) => {
//   return (
//     <div>
//     	weather-app

//     	another piece of text
//     	<p style={style}>{lastUpdate}</p>
//       <h1 style={style}>{title}</h1>
//       <Clock lastUpdate={lastUpdate} light={light} />
//       <Clock lastUpdate={lastUpdate} light={light} />
//       <nav style={style}>
//         <Link href={linkTo}><a>Navigate</a></Link>
//       </nav>
//     </div>
//   )
// })

export default connect(state => state)(() => {
  return (
  	<div>
		  <Head>
		    <title>My page title</title>
		    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
		    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
		  </Head>  	


		  <div className="container">
		    <section className="services">
		      <div className="row">
		       
		        <div className="two columns" style={style}>
		          <div className="row">
		          	<p>test</p>
		          	<p>another</p>
		          </div>
		        </div>

		        <div className="two columns" style={style}>
		          <div className="row">
		          	<p>test</p>
		          	<p>another</p>
		          </div>
		        </div>

		        <div className="two columns" style={style}>
		          <div className="row">
		          	<p>test</p>
		          	<p>another</p>
		          </div>
		        </div>

		        <div className="two columns" style={style}>
		          <div className="row">
		          	<p>test</p>
		          	<p>another</p>
		          </div>
		        </div>

		        <div className="two columns" style={style}>
		          <div className="row">
		          	<p>test</p>
		          	<p>another</p>
		          </div>
		        </div>

		      </div>
		    </section>
		  </div>

  	</div>
  )
})