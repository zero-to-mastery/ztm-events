"use client"
import { useEffect, useState } from 'react';
import CategoryBox from './categorybox';


interface Event {
    eventName: string;
    eventLocation: string;
    eventDescription: string;
    eventImage: string;
}

interface ZtmEventCategory {
    eventId: number;
    eventName: string;
    eventLocation: string;
    eventDescription: string;
    eventImage: string;
    eventCategory: string;
    events: Event[];
}



const EventCategories = () => {
    const [categories, setCategories] = useState<ZtmEventCategory[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mocki.io/v1/88939729-ef81-414b-bb38-8e8ef4406d5d ');
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
            {categories.map((ztmeventcategory: ZtmEventCategory) => (
                <div key={ztmeventcategory.eventId} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">

                    <CategoryBox ztmevent={ztmeventcategory} />

                </div>
            ))}
        </div>
    );
};

export default EventCategories;
