import { useQuery } from 'react-query';

import { fetchUserData } from '@/services/api.service';

export default function ReactQueryTest() {
  const { isLoading, error, data } = useQuery(`fetch-users`, () =>
    fetchUserData()
  );
  return (
    <div>
      <h3>User data</h3>

      <p>{!isLoading && !error ? data.first_name + data.last_name : null}</p>
    </div>
  );
}
