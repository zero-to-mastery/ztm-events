import Link from 'next/link'

const CategoryBox = ({ ztmevent }) => {
    
    return (
        <div className="bg-white rounded-lg shadow-lg">
        <Link href={`/${ztmevent.categoryName}`}>
        <img
            src={ztmevent.categoryImage}
            alt={ztmevent.categoryName}
            className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="p-4">
            <h3 className="text-lg font-semibold">{ztmevent.categoryName}</h3>
        </div>
        </Link>
    </div>
    )
  }
  
  export default CategoryBox