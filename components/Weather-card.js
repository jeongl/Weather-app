import React from 'react'

let apiLink = { paddingTop: '2em' }

export default ({ data, isFetching }) => {  
  if (!data || isFetching) return false;
  else data = data.daily.data;

  return (
    <div className="container main">
      <section className="services">
        <div className="row">
          {data.map((item, i) => {
            return (
              <div className="two columns cardWrapper" key={i}>  
                <div className="row card">
                  <h2>{item.day}</h2>
                  <p><img src={item.iconLink}/></p>
                  <p className="min">Min-temp: {Math.round(item.temperatureMin)}°</p>
                  <p className="max">Max-temp: {Math.round(item.temperatureMax)}°</p>
                  <p className="summary">Summary: {item.summary}</p>
                </div>
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