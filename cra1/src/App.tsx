import React from 'react';
import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
  query GetBooks {
    books {
      id
      title
      author {
        id
        name
      }
    }
  }
`;

function App() {
  const { data } = useQuery(QUERY)

  console.log({ data })
  return (
    <ul>
      {data?.books?.map((book: any) => (
        <li key={book.id}>
          <strong>{book.title}</strong> <em>{book.author?.name}</em>
        </li>
      ))}
    </ul>
  );
}

export default App;
