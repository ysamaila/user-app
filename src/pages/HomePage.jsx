import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { users, loading } = useContext(UserContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <nav className="bg-blue-500 text-white py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-lg font-bold">
            Users App
          </Link>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-8">Users</h1>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users?.map((user) => (
            <li
              key={user?.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{user?.name}</h2>
              <Link
                to={`/user/${user?.id}`}
                className="inline-block mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
