import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // Can use hook useEffect to call API also
  const data = useLoaderData();

  return (
    <div className="flex items-center justify-center h-screen bg-blue-400">
      <div className="p-8 text-white bg-gray-700 rounded-lg">
        <h1 className="mb-4 text-3xl font-bold">Github Profile</h1>
        <div className="flex items-center">
          <div className="mr-4">
            <img src={data.avatar_url} width={300} alt="Profile" />
          </div>
          <div>
            <p>
              <strong>User Name:</strong> {data.login}
            </p>
            <p>
              <strong>Followers:</strong> {data.followers}
            </p>
            <p>
              <strong>Following:</strong> {data.following}
            </p>
            <p>
              <strong>Bio:</strong> {data.bio}
            </p>
            <p>
              <strong>Joined On:</strong> {data.created_at}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;
