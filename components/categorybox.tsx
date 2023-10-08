import Link from 'next/link';
import { ZtmEventCategory } from './categories';

interface ZtmEventCategoryBoxProps {
  id: number;
  ztmevent: ZtmEventCategory;
}

const CategoryBox = (ztmeventProps: ZtmEventCategoryBoxProps) => {
  const { ztmevent } = ztmeventProps;
  return (
    <div className='bg-white rounded-lg shadow-lg'>
      <Link href={`/${ztmeventProps.id}`}>
        <img
          src={ztmevent.categoryImage}
          alt={ztmevent.categoryName}
          className='w-full h-40 object-cover rounded-t-lg'
        />
        <div className='p-4'>
          <h3 className='text-lg font-semibold'>{ztmevent.categoryName}</h3>
        </div>
      </Link>
    </div>
  );
};

export default CategoryBox;
