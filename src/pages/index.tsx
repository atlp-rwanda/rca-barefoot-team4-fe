import { useState } from 'react';

import RootLayout from '@/layouts/layout';

import AssignRooms from './accomodation/assignRooms';
import RegisterDestination from './accomodation/registerDestination';

const Index = () => {
  const [page, setPage] = useState(0);

  const componentsList = [
    <RegisterDestination page={page} setPage={setPage} key={page} />,
    <AssignRooms page={page} setPage={setPage} key={page} />,
  ];
  return (
    <RootLayout>
      <div>{componentsList[page]}</div>
    </RootLayout>
  );
};

export default Index;
