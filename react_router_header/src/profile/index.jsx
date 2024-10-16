import React from "react";
import { useParams } from "react-router-dom";

const users = [
  { id: 1, name: "Alice", age: 25, bio: "Loves hiking" },
  { id: 2, name: "Bob", age: 30, bio: "Enjoys coding" },
  { id: 3, name: "Charlie", age: 28, bio: "A foodie" },
];

function Profile() {
  const { userId } = useParams();
  const user = users.find((user) => user.id === parseInt(userId));

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}'s Profile</h1>
          <p>Age: {user.age}</p>
          <p>Bio: {user.bio}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}

export default Profile;
