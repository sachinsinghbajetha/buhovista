const GradientCard = ({ id, title, desc }) => {
  return (
    <div
      className="p-5 lg:p-10 border border-[#4c5e5e] rounded-[11px] transition-all duration-500 hover:border-[#6b7c7c] hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.4)] group relative overflow-hidden"
      style={{
        background: "linear-gradient(#345566 0%, #20364f 100%)",
      }}
    >
      <div className="text-[rgb(175_203_204)] text-5xl lg:text-6xl font-lora mb-6 font-semibold">
        {id}
      </div>
      <h3 className="text-white text-xl lg:text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-[rgb(182_205_206)] text-sm lg:text-base font-medium">{desc}</p>
    </div>
  );
};

export default GradientCard;
