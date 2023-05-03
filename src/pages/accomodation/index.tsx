import { useState } from 'react';

import AccomodationLayout from '@/layouts/accomodation/layout';

import AssignRooms from './assign-rooms';
import RegisterDestination from './register-destination';

export interface IAccomodation {
  destinationName: string;
  address: string;
  contact: string;
  description: string;
  websiteUrl: string;
}

const Index = () => {
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
  return (
    <AccomodationLayout>
      <div>{componentsList[page]}</div>
    </AccomodationLayout>
  );
};

export default Index;
