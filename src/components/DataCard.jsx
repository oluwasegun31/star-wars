// Datacard component
export default function DataCard({ data }) {
  // Function to generate a tag for the ID, taking the first 4 characters and converting to lowercase
  const idTag = (id) => {
    return id.toString().slice(0, 4).toLowerCase();
  };
  // Function to truncate a name if it's too long, adding ellipsis
  const nameTag = (name) => {
    return name.length > 13 ? name.slice(0, 12) + "..." : name;
  };

  return (
    <section className="bg-red-800 backdrop-blur-3xl w-full sm:h-[200px] h-[180px] rounded-b-xl rounded-t-lg relative cursor-pointer flex sm:flex-row flex-col sm:justify-start justify-between items-end p-4 hover:scale-95 transition-all duration-300">
      <p className="absolute -top-6 left-0 bg-red-800 py-2 pl-2 md:pr-10 pr-6 rounded-t-md clippy -z-10">
        {idTag(data.id)}
      </p>
      <img
        src={data.image}
        alt={`image of ${data.name}`}
        className="sm:w-28 w-24 object-contain sm:absolute relative sm:-top-6 top-auto sm:right-10 right-auto mx-auto"
        width={112}
        height={"auto"}
      />
      <p className="sm:text-xl text-base leading-none font-medium">
        {nameTag(data.name)}
      </p>
    </section>
  );
}
