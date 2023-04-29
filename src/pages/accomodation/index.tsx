import { useState } from 'react';

import RootLayout from '@/layouts/layout';

import AssignRooms from './assign-rooms';
import RegisterDestination from './register-destination';

const Index = () => {
  const [page, setPage] = useState(0);

  const componentsList = [
    <RegisterDestination page={page} setPage={setPage} key={page} />,
    <AssignRooms page={page} setPage={setPage} key={page} />,
  ];
  return (
    // <RootLayout>
    <div>{componentsList[page]}</div>
  );
};

export default Index;
