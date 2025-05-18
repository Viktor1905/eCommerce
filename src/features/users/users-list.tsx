// src/features/users/UserList.tsx
import { useQuery } from '@tanstack/react-query';

interface User {
  id: number;
  name: string;
}

import { z } from 'zod';

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
});
const usersSchema = z.array(userSchema);

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  console.log(response);
  const json: unknown = await response.json(); // safer: mark as unknown
  const result = usersSchema.parse(json);
  return result;
};

export default function UserList() {
  const { data, error, isLoading } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return <ul>{data?.map((user) => <li key={user.id}>{user.name}</li>)}</ul>;
}
