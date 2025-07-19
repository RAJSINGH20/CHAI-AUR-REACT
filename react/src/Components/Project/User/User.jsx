import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { RAJ } = useParams();
  return (
    <div className="bg-gray-700 text-white text-3xl p-6 rounded-xl shadow-lg text-center mt-10 w-1/2 mx-auto">
      User ID {RAJ}
    </div>
  );
}

export default User;
