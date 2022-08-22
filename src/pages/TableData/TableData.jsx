import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

export default function TableData() {
  const [data, setData] = useState([]);

  // let person = data[`2022-08-19 04:45:00`];
 
  useEffect(() => {
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`
    )
      .then((res) => res.json())
      .then((data) => {
        let dataV1=data[`Time Series (5min)`];
        let datav2=dataV1[`2022-08-19 04:45:00`];
        let arr=[datav2]
        setData(arr);
      });
  }, []);

//   console.log(person[]);

  //  console.log(person)
    console.log(data["2022-08-19 04:45:00"])

  
  return (
    <>
    {
      data.forEach((crr,index,arr)=>{
        // console.log(crr['1. open']);
        <h2>{crr['1. open']}</h2>
      })
    }
      <h2>hello</h2>
    </>
  );
}
