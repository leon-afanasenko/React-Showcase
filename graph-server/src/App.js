import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      emoji
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Country List</h1>
      {data.countries.map(({ code, name, emoji }) => (
        <div key={code}>
          <h3>
            {name} {emoji}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default App;
