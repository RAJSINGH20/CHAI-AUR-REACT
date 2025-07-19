import React, { useEffect, useState } from 'react';

const Github = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/RAJSINGH20')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  if (!data) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 rounded-2xl">
      <h2 className="text-2xl mb-4">GitHub Followers: {data.followers}</h2>
      <img src={data.avatar_url} alt="GitHub Avatar" width={200} className="mx-auto rounded-full" />
    </div>
  );
};

export default Github;
