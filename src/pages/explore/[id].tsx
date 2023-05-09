// import { useRouter } from 'next/router'
import ViewOne from '@/components/molecules/exploration/ViewOne';

import RootLayout from '../../layouts/layout';

export default function viewOne() {
  // const { id } = useRouter().query
  return (
    <RootLayout>
      <ViewOne />
    </RootLayout>
  );
}
