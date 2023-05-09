import { useState } from 'react';

import type { IAccomodation } from '@/services/interfaces';

import AssignRooms from './assign-rooms';
import RegisterDestination from './register-destination';

const RegIndex = () => {
  const [page, setPage] = useState(0);
  const [accomodationState, setAccomodationState] = useState<IAccomodation>({
    destinationName: '',
    address: '',
    contact: '',
    description: '',
    websiteUrl: '',
  });

  const componentsList = [
    <RegisterDestination
      page={page}
      setPage={setPage}
      key={page}
      accomodationState={accomodationState}
      setAccomodationState={setAccomodationState}
    />,
    <AssignRooms
      page={page}
      setPage={setPage}
      key={page}
      accomodationState={accomodationState}
    />,
  ];
  return <div>{componentsList[page]}</div>;
};

export default RegIndex;
