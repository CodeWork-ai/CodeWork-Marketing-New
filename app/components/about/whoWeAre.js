import React from "react";

const WhoWeAre = () => {
  return (
    <section className="bg-gradient-to-b from-[#FBF8E6] to-[#ebf9ff] py-10">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* ─── Who We Are ─────────────────────────────────────── */}
        <div></div>

        {/* ─── Why Choose Codework? ───────────────────────────── */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Why Choose Codework?
          </h3>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>AI-Driven Solutions:</strong> We specialize in crafting
              innovative AI-based products tailored to your business needs.
            </li>
            <li>
              <strong>End-to-End Expertise:</strong> From development to
              deployment, we ensure seamless technology integration.
            </li>
            <li>
              <strong>User-Centric Approach:</strong> We design solutions that
              prioritize user experience and real-world impact.
            </li>
            <li>
              <strong>Proven Technologies:</strong> Proficiency in React.js,
              Java, Python, Azure, AWS, R, Next.js, and more.
            </li>
            <li>
              <strong>Scalable & Secure Systems:</strong> Ensuring reliability,
              scalability, and security in every solution we build.
            </li>
          </ul>
        </div>

        {/* ─── Our Mission ──────────────────────────────────────── */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Our Mission
          </h3>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Our mission is to leverage our expertise in software development to
            create meaningful solutions that benefit society while ensuring that
            our top talent shares in our organization’s success.
          </p>
          <p className="mt-2 text-base leading-relaxed text-gray-600">
            At Pro Codework, we’re not just building technology. We’re shaping
            the future of businesses. Let’s innovate together!
          </p>
        </div>
        {/* ─── Our vision ──────────────────────────────────────── */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Our vision
          </h3>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Our vision is to lead the way in delivering innovative and
            transformative technology solutions that reshape industries and
            Empower businesses globally. We strive to create a future where our
            Software and services drive digital transformation, helping
            organizations optimize operations, boost efficiency, and unlock new
            growth opportunities. At the core of our mission is a commitment to
            staying ahead of technological advancements, consistently pushing
            the limits of innovation to deliver cutting-edge solutions to our
            clients.
          </p>
        </div>

        {/* ─── What Makes Us Different? ────────────────────────── */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            What Makes Us Different?
          </h3>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Human-Centric Solutions:</strong> We don’t just deliver
              technology; we create human-centric solutions powered by AI.
            </li>
            <li>
              <strong>Expert Team:</strong> Our expert team transforms your
              ideas into results using artificial intelligence and next-gen
              technologies.
            </li>
            <li>
              <strong>Alignment with Your Goals:</strong> With a focus on
              simplicity, innovation, and business growth, we align technology
              with your goals.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
