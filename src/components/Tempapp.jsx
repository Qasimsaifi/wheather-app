import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Tempapp = () => {

  const [city, setCity] = useState(null)
  const [search, setSearch] = useState("Gawan")
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=98d2847a5e78a571634496acd4c5d122`
      const response = await fetch(url);
      const resJson = await response.json()
      setCity(resJson.main);
    }
    fetchApi();
  }, [search])

  return (
    <div className='container'>
      <div className="box">
        <input type="search" className="inputSearch" onChange={(event) => {
          setSearch(event.target.value)
        }} />

      </div>

      {!city ? (
        <p className='notFound'>No data found</p>
      ) : (
        <div className="info">
          <Image width="90" height="90" src="/favicon.ico"></Image>
          <h2 className="location">{search}</h2>
          <h2 className="temp">{city.temp}</h2>
          <p className="tempMinMax">Min Temp {city.temp_min} Max temp {city.temp_max}</p>
        </div>

      )

      }
    </div>
  )
}

export default Tempapp;