import React from "react";
import ShineBorder from "../../../components/ui/shine-border";

const AiModalLanding = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-4xl">
        {/* Title Section */}
<h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 ml-4 sm:-ml-24 md:-ml-48 flex items-center justify-start">
  <span className="inline-block w-1 h-6 sm:w-2 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-2 sm:mr-4 rounded-tr-md rounded-br-md"></span>
  Our AI Model Training Process
</h2>

<ShineBorder
  className="pt-6 sm:pt-10 mt-8 sm:mt-16 bg-black text-white py-6 sm:py-8 px-4 sm:px-8 md:px-32 w-full sm:w-[800px] md:w-[1200px] h-[350px] sm:h-[300px] md:h-[356px] 
          rounded-tr-[100px] sm:rounded-tr-[400px] md:rounded-tr-[530px] rounded-br-[100px] sm:rounded-br-[400px] md:rounded-br-[530px] relative overflow-hidden ml-[-20px] sm:ml-[-100px] md:ml-[-320px]"
          color={["#1dcaf5", "#f04f57"]}
          borderRadius="0 100px 100px 0"  
          style={{
            borderRadius: "0 100px 100px 0", /* Mobile default (right-side rounding) */
            ["@media (min-width: 768px)"]: { /* md: breakpoint */
              borderRadius: "0 530px 530px 0", /* Medium screens and above */
            },
          }}
>
  <div className="relative z-10 mt-2 sm:mt-0">
    {/* Section 1 */}
    <div className="mb-4 sm:mb-6">
      <h3 className="text-sm sm:text-base font-semibold pt-6 sm:pt-12 pb-1">
        Understanding Business Requirements
      </h3>
      <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-sm">
        A successful AI implementation starts with a clear goal. We collaborate with you to understand your business challenges, 
        industry-specific needs, and available datasets, ensuring the development of an AI model that delivers measurable results.
      </p>
    </div>
    {/* Section 2 */}
    <div>
      <h3 className="text-sm sm:text-base font-semibold pb-1">
        Data Collection and Preprocessing
      </h3>
      <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-sm">
        Quality data is the foundation of any AI model. Our experts assist in data collection, cleaning, and preprocessing,
        eliminating inconsistencies to ensure that the model is trained on accurate, structured, and relevant datasets for optimal performance.
      </p>
    </div>
  </div>
</ShineBorder>

<ShineBorder
  className="w-full sm:w-[800px] md:w-[1200px] h-[350px] sm:h-[370px] md:h-[356px] bg-black relative ml-[20px] sm:ml-2 overflow-hidden flex flex-col mt-8 sm:mt-16 md:mt-32 rounded-tl-[100px] sm:rounded-tl-[400px] md:rounded-tl-[530px] rounded-bl-[100px] sm:rounded-bl-[400px] md:rounded-bl-[530px]"
  color={["#1dcaf5", "#f04f57"]}
  borderRadius="100px 0 0 100px" 
  style={{
    borderRadius: "100px 0 0 100px", /* Mobile default (left-side rounding) */
    ["@media (min-width: 640px)"]: { /* sm: breakpoint */
      borderRadius: "400px 0 0 400px", /* Small screens */
    },
    ["@media (min-width: 768px)"]: { /* md: breakpoint */
      borderRadius: "530px 0 0 530px", /* Medium screens and above */
    },
  }}
>
  <div className="pt-6 sm:pt-10 text-white py-6 sm:py-8 px-4 sm:px-8 md:px-32 w-full flex flex-col text-left">
    <div className="relative z-10 w-full mt-2 sm:mt-0"> {/* Added mt-2 for mobile */}
      {/* Section 1 */}
      <div className="mb-4 sm:mb-6">
        <h3 className="text-sm sm:text-base font-semibold pt-6 sm:pt-12 pb-1">
          Model Training and Evaluation
        </h3>
        <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-sm">
          Our AI model undergoes rigorous training using advanced techniques. We continuously test, validate, and refine the
          model to ensure it meets performance benchmarks and aligns with your business goals.
        </p>
      </div>
      {/* Section 2 */}
      <div>
        <h3 className="text-sm sm:text-base font-semibold pb-1">
          Deployment and Optimization
        </h3>
        <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-sm">
          Once trained, the AI model is deployed into your environment. We continuously monitor and optimize its performance,
          adapting to new data and improving accuracy over time.
        </p>
      </div>
    </div>
  </div>
</ShineBorder>

<ShineBorder
  className="pt-6 sm:pt-10 mt-8 sm:mt-16 md:mt-32 bg-black text-white py-6 sm:py-8 px-4 sm:px-8 md:px-32 w-full sm:w-[800px] md:w-[1200px] h-[350px] sm:h-[360px] md:h-[356px] 
          rounded-tr-[100px] sm:rounded-tr-[400px] md:rounded-tr-[530px] rounded-br-[100px] sm:rounded-br-[400px] md:rounded-br-[530px] relative overflow-hidden ml-[-20px] sm:ml-[-200px] md:ml-[-320px]"
          color={["#1dcaf5", "#f04f57"]}
          borderRadius="0 100px 100px 0"  
          style={{
            borderRadius: "0 100px 100px 0", /* Mobile default (right-side rounding) */
            ["@media (min-width: 768px)"]: { /* md: breakpoint */
              borderRadius: "0 530px 530px 0", /* Medium screens and above */
            },
          }}
>
  <div className="relative z-10 mt-2 sm:mt-0"> {/* Added mt-2 for mobile */}
    {/* Section 1 */}
    <div className="mb-4 sm:mb-6"> {/* Fixed typo: movingmb-6 to mb-6 */}
      <h3 className="text-sm sm:text-base font-semibold pt-6 sm:pt-12 pb-1">
        Continuous Learning and Improvement
      </h3>
      <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-sm">
        AI is ever-evolving. We integrate feedback loops, retrain models with new data, and implement adaptive learning strategies to
        ensure your AI solutions remain relevant and effective.
      </p>
    </div>
    {/* Section 2 */}
    <div>
      <h3 className="text-sm sm:text-base font-semibold pb-1">
        Business Impact and Insights
      </h3>
      <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-sm">
        Our AI-driven solutions are designed to provide actionable insights. We analyze model performance, extract key trends, and
        enable data-driven decision-making for sustained business success.
      </p>
    </div>
  </div>
</ShineBorder>
      </div>
    </div>
  );
};

export default AiModalLanding;