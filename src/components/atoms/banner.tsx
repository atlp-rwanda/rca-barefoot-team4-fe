import Image from 'next/image';
import React from 'react';

type Props = {
  position: 'top' | 'bottom';
};
export default function Banner(props: Props) {
  return (
    <React.Fragment>
      {props.position === 'top' ? (
        <div className="absolute right-0">
          <Image
            className="hidden md:inline"
            src={'/assets/images/banner-top.png'}
            width={255}
            height={255}
            alt="Logo"
          />
        </div>
      ) : (
        <div className="absolute bottom-0">
          <Image
            className="hidden md:inline"
            src={'/assets/images/banner-bottom.png'}
            width={255}
            height={255}
            alt="Logo"
          />
        </div>
      )}
    </React.Fragment>
  );
}
