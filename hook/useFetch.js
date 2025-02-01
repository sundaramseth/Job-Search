import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'd5e50051a6msh869b1d57a2ce04fp18e502jsn0bfb801bc14a',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
      };

      const fetchData = async () => {
        setisLoading(true);
        try{
           const response = await axios.request(options);
           setData(response.data.data);
           setisLoading(false);
        }catch (error){
           setError(error);
           alert('There is an error');
        } finally {
           setisLoading(false);
        }

      }

    useEffect(()=> {
        fetchData();
    }, []);
    
    const refetch = () => {
        setisLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch};
      
}

export default useFetch