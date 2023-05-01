import { useState } from 'react';

import RootLayout from '@/layouts/layout';

import AssignRooms from './assign-rooms';
import RegisterDestination from './register-destination';

export interface IAccomodation {
  destinationName: String;
  address: String;
  contact: String;
  description: String;
  websiteUrl: String;
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
      setAccomodationState={setAccomodationState}
    />,
  ];
  return (
    <RootLayout>
      <div>{componentsList[page]}</div>
    </RootLayout>
  );
};

export default Index;
