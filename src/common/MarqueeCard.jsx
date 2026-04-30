const MarqueeCard = ({ image, title, desc }) => {
  return (
    <div className="w-[300px] lg:w-[350px] xl:w-[400px] shrink-0 bg-[#fffdf9] rounded-[17px] p-3 border border-[#e2ddd6] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]">
      <div className="rounded-[17px] overflow-hidden mb-8 border border-[#e2ddd6]">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover aspect-16/10"
        />
      </div>
      <div className="px-5 pb-5">
        <h3 className="text-xl font-semibold text-[#2a2c2b] mb-4">
          {title}
        </h3>
        <p className="text-[#6e6e6e] text-md font-medium">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default MarqueeCard;
