import Image from 'next/image';

export default function Logo({ withText = true, width = 30, height = 30 }) {
  return (
    <div className="flex">
      <Image
        src={'/assets/images/plan-red-logo.png'}
        width={width}
        height={height}
        alt="Logo"
      />
      {withText ? (
        <h4 className="ml-1 mt-2 text-sm font-medium text-red-default">
          Barefoot Nomad
        </h4>
      ) : null}
    </div>
  );
}
