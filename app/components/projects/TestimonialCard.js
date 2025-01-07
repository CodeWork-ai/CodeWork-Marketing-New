export default function TestimonialCard({ quote, name, role, avatar }) {
  return (
    <div className="backdrop-blur-lg rounded-xl shadow-xl p-6 flex flex-col items-center space-y-6 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 border border-gray-700 relative">
      {/* Quotation Mark Icon */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <div className="text-blue-400 text-5xl font-bold">“</div>
      </div>

      {/* Quote */}
      <p className="text-gray-200 text-center text-base lg:text-lg leading-relaxed italic mt-6">
        {quote}
      </p>

      {/* Avatar */}
      <img
        src={avatar}
        alt={name}
        className="w-24 h-24 rounded-full object-cover border-4 border-orange-500 shadow-lg"
      />

      {/* Name and Role */}
      <div className="text-center">
        <h4 className="text-lg font-bold text-blue-400">{name}</h4>
        <p className="text-sm text-gray-200">{role}</p>
      </div>
    </div>
  );
}
