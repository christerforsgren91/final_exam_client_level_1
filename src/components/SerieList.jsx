import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SerieList = () => {
  const { series, setSeries } = useState([]);

  const getSeries = async () => {
    let response = await axios.get(
      'https://content.viaplay.se/pc-se/serier/samtliga'
      );
      debugger;
    setSeries(
      response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
    );
  };

  useEffect(() => {
    getSeries();
  }, []);

  let serie = series.map((serie) => {
    return (
      <div data-cy="series-card">
        <img
          key={serie.id}
          src={serie.content.images.boxart.url}
          alt="series-list"
        />
      </div>
    );
  });
  return <div data-cy="series-container">{serie}</div>;
};

export default SerieList;
