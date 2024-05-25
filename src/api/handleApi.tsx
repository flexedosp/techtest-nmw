import { useEffect, useState } from "react";
import Axios from 'axios';

export function UseGetData() {
  const [data, setData] = useState([]);
const apikey = 'yRyuc91Q3g1w6BB62KSDc1F3cnwDkBEz4NXnMWQUzn5m_BV7uXMzYRZP/p9JiC-LrpfYwC9C46sZtLg'
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('https://api.nmwclinic.co.id/legacy/testing?page&limit', {
          headers: {
            Authorization: `Bearer ${apikey}`,
          },
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once

  return data;
}
