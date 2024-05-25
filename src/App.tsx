import { useEffect, useState } from "react";
import Axios from "axios";
import Card from "./components/Card";
// import Card from "./components/Card";
function App() {
  const [data, setData] = useState([]);
  const [image, setImage] = useState('');
  const apikey =
    "yRyuc91Q3g1w6BB62KSDc1F3cnwDkBEz4NXnMWQUzn5m_RF6vXc6bBRP/YMU0gJ4Bm4o0mVdLqZ6nJQ";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "https://api.nmwclinic.co.id/legacy/testing?page&limit",
          {
            headers: {
              Authorization: `Bearer ${apikey}`,
            },
            
          }
        );
        const warpData = response.data.result.data[0];
        setData(warpData);
        console.log(warpData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };


    fetchData();
  }, []);

//   const productImage = data[0].product[0];
//   setImage(productImage);
console.log("Echo " +data.name)

  return (
    <>
     {/* <Card SKU={data} /> */}
    </>
  );
}

export default App;
