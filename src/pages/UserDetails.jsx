import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        User not found.
      </div>
    );
  }

  return (
    <div>
      <nav className="bg-blue-500 text-white py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="flex items-center">
            &larr; Back to User List
          </Link>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8 flex justify-center items-center">
        <div className="w-full max-w-md">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
            <p className="mb-2">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> {user.phone}
            </p>
            <p className="mb-2">
              <strong>Website:</strong>{" "}
              <a href={`http://${user.website}`} className="text-blue-500">
                {user.website}
              </a>
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {`${user.address.suite}, ${user.address.street}, ${user.address.city}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
