import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SerieList = () => {
  const { series, setSeries } = useState([])

  const getSeries = async () => {
    let response = await axios.get('https://content.viaplay.se/pc-se/serier/samtliga')
    setSeries(response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products'])
  }

  useEffect(() => {
    getSeries()
  }, [])

    let listOfSeries = series.map((serie) => {
      return <SerieCard serie={serie} />
    })
  return (
    <div data-cy='series-container'>
      {series}
    </div>
  )
}

export default SerieList
