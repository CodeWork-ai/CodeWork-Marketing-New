import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rizwan Joseph",
      role: "UI/UX Engineer",
      avatar: "/test.jpg",
      quote:
        "Duis aute dolor in reprehenderit in voluptate officia deserunt mollit anim laborum.",
    },
    {
      name: "Jason",
      role: "Backend Engineer",
      avatar: "/test.jpg",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.",
    },
    {
      name: "Sarah Lee",
      role: "Data Scientist",
      avatar: "/test.jpg",
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
  ];

  return (
    <section className="relative text-white px-6 lg:px-20 py-16">
      {/* Content */}
      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#ffffff] mb-4">
            What People Say
          </h2>
          <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
            Hear from our amazing clients and collaborators.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
