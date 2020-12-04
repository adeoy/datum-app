import { useState, useEffect } from "react";
import axios from "axios";

const useScrapedResults = (_id_task) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await axios.get(
          `http://127.0.0.1:5000/api/v1/scraping_results?_id_task=${_id_task}`
        );
        setItems(resp.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [_id_task]);

  return items;
};

export default useScrapedResults;
