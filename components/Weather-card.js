import React from 'react'

let cardWrapper = {
	color: 'grey',
	border: '1px solid #bbb',
	width: '135px',
	textAlign: 'center',
	borderRadius: '5px',
	padding: '10px 0 10px 0'
}

let dayStyle = {
	fontSize: '20px',
	color: 'light-blue',
	textDecoration: 'underline'
}

let summary = {
	padding: '7px',
	paddingTop: '20px',
	color: 'blue'
}

let apiLink = {
	paddingTop: '2em'
}

export default ({ data, isFetching }) => {	
	if (!data || isFetching) return false;
	else data = data.daily.data;

  return (
	  <div className="container main">
	    <section className="services">
	      <div className="row">
	      	{data.map((item, i) => {
	      		return (
			        <div className="two columns card" key={i} style={cardWrapper}>	
			          <div className="row card">
			          	<h2 style={dayStyle}>{item.day}</h2>
			          	<p><img src={item.iconLink}/></p>
			          	<p className="min">Min-temp: {Math.round(item.temperatureMin)}°</p>
			          	<p className="max">Max-temp: {Math.round(item.temperatureMax)}°</p>
			          	<p className="summary" style={summary}>Summary: {item.summary}</p>
			          	<style jsx>{` p { margin-bottom: 0; } `}</style>
				          <style jsx>{` 
				          	.row > .card > .more-cards:hover { color: black; } 
				          `}</style>			          	
			          </div>
			          <style jsx>{` 
			          	div > .card:hover { color: black; } 
			          `}</style>
			        </div>
	      		)
	      	})}
	      </div>
	    </section>
	  	
	  	<div className="row" style={apiLink}>
	  		<a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
	  	</div>	    
	  </div>
  )
}