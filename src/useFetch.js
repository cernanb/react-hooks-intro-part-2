import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('There was an error');
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    getData();
  }, []);

  return { data, error, loading };
};

export default useFetch;
