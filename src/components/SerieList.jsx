import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SerieList = () => {
  const { series, setSeries } = useState([]);

  const getSeries = async () => {
    debugger;
    let response = await axios.get(
      'https://content.viaplay.se/pc-se/serier/samtliga'
    );
    setSeries(response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']);
  };

  useEffect(() => {
    getSeries();
  }, []);

  let listOfSeries = series.map((serie) => {
    return (
      <div>
        <img key={serie.id} src={serie.content.images.boxart.url} alt="series-list" />
      </div>
    );
  });
  return <div data-cy="series-container">{listOfSeries}</div>;
};

export default SerieList;
