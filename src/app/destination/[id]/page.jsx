import { EditCard } from "@/components/Editcard/EditCard";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const DestinationDetailsPage = async ({params}) => {
    const {id} = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const data = await res.json();



//   const data = destination.find((i) => i._id == id);

//   console.log('data', data);

  
  
  return (
    <div className="w-[60%] mx-auto my-10">
        <div className="flex gap-1 items-center justify-between my-4">
            <div>

            </div>
            <div className="flex gap-1">
           <EditCard data={data}></EditCard>
            <Button variant="danger">Delete</Button>

            </div>
        </div>
      <div className="rounded-xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-100">
        {/* Image */}
        <div className="relative overflow-hidden">
          <Image
            src={data.imageUrl}
            width={300}
            height={300}
            alt={data.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Category Badge */}
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-sm font-semibold px-4 py-1 rounded-full text-gray-800 shadow">
            Mountain
          </span>

          {/* Price */}
          <div className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded-2xl shadow-lg">
            <p className="text-xs opacity-80">Starting From</p>
            <h2 className="text-lg font-bold">{data.price}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {data.destinationName}
            </h2>
            <p className="text-gray-500 text-sm mt-1">Bangladesh</p>
          </div>

          {/* Info */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-2">
              ⏳<span>{data.duration}</span>
            </div>

            <div className="flex items-center gap-2">
              📅
              <span>{data.country}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{data.description}</p>

          {/* Button */}
          <Link href={`/`}>
            <button className="w-full mt-4 bg-black hover:bg-gray-900 text-white py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02]">
              Go back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
