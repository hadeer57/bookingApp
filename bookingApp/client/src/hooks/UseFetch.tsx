import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url:any) => {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
     
      try {
        const res = await axios.get('/hotels');
        setData(res.data);
      } catch (err) {
        console.error();
        
      }    };
    fetchData();
  }, ['hotels']);

  const reFetch = async () => {
    try {
      const res = await axios.get('/hotels');
      setData(res.data);
    } catch (err) {
console.error();
    }
  };

  return { data, reFetch };
};

export default useFetch;