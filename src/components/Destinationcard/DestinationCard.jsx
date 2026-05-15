import Image from "next/image";
import Link from "next/link";


const DestinationCard = ({data}) => {
  return (
    <div>
      <div className="max-w-sm rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-100">
        {/* Image */}
        <div className="relative overflow-hidden">
          <Image
            src={data.imageUrl}
            width={300}
            height={300}
            alt="Travel"
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
            <h2 className="text-2xl font-bold text-gray-900">{data.destinationName}</h2>
            <p className="text-gray-500 text-sm mt-1">Bangladesh</p>
          </div>

          {/* Info */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-2">
              ⏳<span>4 hourse</span>
            </div>

            <div className="flex items-center gap-2">
              📅
              <span>0002-12-21</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{data.description}</p>

          {/* Button */}
          <Link href={`/destination/${data._id}`}>
          <button className="w-full mt-4 bg-black hover:bg-gray-900 text-white py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02]">
            Explore Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
