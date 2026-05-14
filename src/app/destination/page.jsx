import DestinationCard from "@/components/Destinationcard/DestinationCard";


const Destinations = async() => {


    const res = await fetch("http://localhost:5000/destination");
    const destination = await res.json();

    console.log('destination', destination);
    
    return (
        <div>
           <h1>all Destinations </h1>

           <div className="grid grid-cols-4 gap-5">
            {
                destination.map((data) => <DestinationCard key={data._id} data={data}></DestinationCard>)
            }
           </div>
        </div>
    );
};

export default Destinations;