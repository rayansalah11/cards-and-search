import React, { useState, useEffect } from "react";
import Search from "../search/Search";
import "./card.css";




function Card() {
  const [fetchData, setFetchData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const requestData = async () => {
    const Response = await fetch("https://restcountries.com/v3.1/all");
    const country = await Response.json();
    setFetchData(country);
    setFilteredData(country);
    console.log(country);
  };

  useEffect(() => {
    requestData();
  }, []);
  
  return (
    <div >
      <Search fetchData={fetchData} setFilteredData={setFilteredData} />
  
      <div >
        {filteredData?.map((data) => {
          return (
            
            <div key={data.name.common} className="card" >
              <img
                 className="content"
                src={data.flags.png}
                alt="nature"
              />
              <div className="content">
                <div >
                  <p>{data.name.common}</p>
                  <p > {data.continents}</p>
                </div>
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
