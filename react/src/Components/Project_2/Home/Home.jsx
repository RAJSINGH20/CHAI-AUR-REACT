import React, { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/RAJSINGH20')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  if (!data) {
    return <h2 className="text-center mt-10 text-lg text-gray-600">Loading...</h2>;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-center bg-white shadow-lg rounded-lg mt-8">
      <img
        src={data.avatar_url}
        alt="GitHub Avatar"
        width={200}
        className="mx-auto rounded-full border-4 border-blue-500"
      />
      <h2 className="text-3xl font-bold text-blue-700 mt-6">RAJ SINGH</h2>
      <p className="text-lg text-gray-700 mt-2">Software Developer</p>

      <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
        <div className="bg-blue-100 p-4 rounded-md shadow-sm">
          <h6 className="font-semibold">Address</h6>
          <p>ABL Township Durgapur, West Bengal</p>
          <p>pin-code: 713206</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-md shadow-sm">
          <h6 className="font-semibold">Phone-no</h6>
          <p>+91 7384302670</p>
          <h6 className="font-semibold">Alternate Phone-no</h6>
          <p>+91 9475017971</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-md shadow-sm">
          <h6 className="font-semibold">Email</h6>
          <p>rajsinghdurgapur26@gmail.com</p>
          <h6 className="font-semibold">Alternate Email</h6>
          <p>rajsinghdurgapur5@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
