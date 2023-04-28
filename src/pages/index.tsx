import RootLayout from '@/layouts/layout';

import ReactQueryTest from './users/page';

const Index = () => {
  return (
    <RootLayout>
      <h2>Content</h2>
      <ReactQueryTest />
    </RootLayout>
  );
};

export default Index;
