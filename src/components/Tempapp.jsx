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
<>
<h1 className='main-heading'>❤Coding Chaska❤</h1>
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
          <Image className='img' width="90" height="90" src="/favicon.ico"></Image>
          <h2 className="location">{search}</h2>
          <h2 className="temp">{Math.ceil(city.temp - 273.15)}</h2>
          <p className="tempMinMax">Min Temp{Math.ceil(city.temp_min - 273.15)} Max temp {Math.floor(city.temp_max - 273.15)}</p>
        </div>

      )

      }
    </div>
</>
  )
}

export default Tempapp;