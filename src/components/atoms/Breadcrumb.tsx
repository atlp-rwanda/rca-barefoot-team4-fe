import Link from 'next/link';
import { ChevronRight } from 'tabler-icons-react';

export default function Breadcrumb() {
  return (
    <div className="mb-5 flex w-1/2 justify-between text-xs uppercase md:w-1/3 lg:w-1/6 ">
      <Link href="/" className="text-gray-700">
        HOME
      </Link>

      <span>
        <ChevronRight strokeWidth={1} />
      </span>

      <Link href="#" className="text-gray-700">
        explore destination
      </Link>
    </div>
  );
}
