import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import Head from 'next/head'
import Loading from 'react-loading';
import moment from 'moment';

import {fetchForeCast, changeAddress, showLoadingIcon} from '../actions'

import GeoCodeSuggest from '../components/geocode-suggest'
import WeatherCards from '../components/Weather-card'


class Page extends Component {
  constructor(props) {
    super(props)
  }

	componentDidMount() { 
		let { lat, lng, location } = this.props;		
		this.props.fetchForeCast({ lat, lng, location });
	}
	render () {
		let wrapper = { paddingTop: '3em' }
		let blueText = { color: 'blue' }

	  return (
	  	<div>
			  <Head>
				  <meta charset="utf-8"/>
				  <title>Seattle weather app</title>
				  <meta name="weather-app" content=""/>
				  <meta name="jlim" content=""/>
			    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
			    <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css"></link>
					<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDBC00bJRz6DF1Z2IPSaJHlpQOFMNhGXLw&libraries=places"></script> 
			    <link rel="stylesheet" type="text/css" href="css/normalize.css"></link>
			    <link rel="stylesheet" href="css/skeleton.css"></link>
			    <link rel="stylesheet" href="css/main.css"></link>
			  </Head>
			 
			  <div className="container" style={wrapper}>
			  	<p>{moment().format('MM-DD-YYYY')}</p>
			  	{ this.props.isFetching === true ? 'Fetching Data for:' : '' }
			  	<GeoCodeSuggest changeAddress={this.props.changeAddress} 
			  		location={this.props.location} 
			  		showLoadingIcon={this.props.showLoadingIcon}
			  		changeLocation={this.props.fetchForeCast}/>
			  	
			  	<div className="row">
			  		{ this.props.isFetching === true ? <Loading type='balls' color='#e3e3e3'/>: '' }
			  	</div>
			  </div>

			  <WeatherCards data={this.props.foreCastData} isFetching={this.props.isFetching}/>
	  	</div>
	  )		
	}
}

const mapStateToProps = (state) => ({
	foreCastData: state.foreCastData,
	isFetching: state.isFetching,
	address: state.address,
	lat: state.lat,
	lng: state.lng,
	location: state.location
});

export default connect(mapStateToProps, {
	fetchForeCast,
	changeAddress,
	showLoadingIcon
})(Page);