import Image from "next/image";

interface GameCardProps {
  title: string;
  image: string;
  isNew?: boolean;
  jackpot?: string;
}

export default function GameCard({ title, image, isNew, jackpot }: GameCardProps) {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group">
      {/* Jackpot Badge */}
      {jackpot && (
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
          {jackpot}
        </div>
      )}

      {/* NEW Ribbon */}
      {isNew && (
        <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-bl">
          NEW
        </div>
      )}

      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full h-40 object-cover"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white font-bold text-sm mb-2 px-2 text-center">{title}</p>
        <button className="bg-green-500 text-black font-bold px-4 py-1 rounded hover:bg-yellow-500 hover:cursor-pointer">
          Play
        </button>
      </div>
    </div>
  );
}
