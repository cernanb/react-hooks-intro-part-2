import React from 'react';
import useFetch from './useFetch';

export default function GithubProfile() {
  const response = useFetch('https://api.github.com/users/crnanb');
  console.log(response);
  if (response.loading) return <h1>Loading...</h1>;
  if (response.error) return <h1>There was an error</h1>;
  return (
    <div>
      <h1>{response.data.login}</h1>
      <h6>{response.data.bio}</h6>
    </div>
  );
}
