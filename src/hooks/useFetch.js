import { useEffect, useState } from 'react';

const useFetch = (endpoint) => {
  const [info, setInfo] = useState([]);
  const [err, setErr] = useState('');

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  const fetchData = async () => {
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      setInfo(data);
    } catch (error) {
      console.log('erroe fetching data' + error);
      setErr('erroe fetching data' + error);
    }
  };
  return [info, err];
};

export default useFetch;
