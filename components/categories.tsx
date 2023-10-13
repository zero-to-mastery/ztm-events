'use client';
import { useEffect, useState } from 'react';
import CategoryBox from './categorybox';

// passing index as id for place-holder, we can remove whem original id is in place

interface Event {
  eventName: string;
  eventImage: string;
  eventLocation: string;
  eventDescription: string;
}

export interface ZtmEventCategory {
  events: Event[];
  categoryName: string;
  categoryImage: string;
  categoryDescription: string;
}

const EventCategories = () => {
  const [categories, setCategories] = useState<ZtmEventCategory[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://mocki.io/v1/88939729-ef81-414b-bb38-8e8ef4406d5d '
        );
        const jsonData = await response.json();
        setCategories(jsonData.eventCategories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (categories.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-wrap'>
      {categories.map((ztmeventcategory: ZtmEventCategory, index: number) => (
        <div
          key={ztmeventcategory.categoryName}
          className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4'
        >
          <CategoryBox ztmevent={ztmeventcategory} id={index} />
        </div>
      ))}
    </div>
  );
};

export default EventCategories;
