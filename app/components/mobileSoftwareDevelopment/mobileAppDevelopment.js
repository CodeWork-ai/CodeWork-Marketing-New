import ShineBorder from "@/components/ui/shine-border";
import React from "react";

const MobileAppDevelopment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Title Section */}
        <h2 className="text-white text-2xl font-semibold mb-6 md:-ml-48 flex items-center justify-start">
          <span className="inline-block w-2 h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-4 rounded-tr-md rounded-br-md"></span>
          Comprehensive Software Development Solutions
        </h2>

        {/* Black Container 1 with ShineBorder */}
        <ShineBorder
          className="pt-12 mt-16 bg-black text-white py-8 px-8 md:px-32 w-full md:w-[1200px] h-auto md:h-[456px] 
          rounded-tr-[530px] rounded-br-[530px] relative overflow-hidden md:ml-[-320px]"
          color={["#1dcaf5", "#f04f57"]}
          borderRadius="0 530px 530px 0"
        >
          <div className="relative z-10">
              {/* Section 1 */}
              <div className="mb-6">
              <h3 className="text-lg font-semibold pt-16 pb-1">
                Continuous Learning and Improvement
              </h3>
              <div className="relative w-full md:w-[450px] h-[1px] bg-white overflow-hidden">
                  <div className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
                      animate-[shine_2s_linear_infinite]"
                  ></div>
              </div>
              <p className="text-gray-300 w-full md:w-[70%] mt-2">
                AI is ever-evolving. We integrate feedback loops, retrain models
                with new data, and implement adaptive learning strategies to
                ensure your AI solutions remain relevant and effective.
              </p>
            </div>
            {/* Section 2 */}
            <div>
              <h3 className="text-lg font-semibold pb-1">
                Data Collection and Preprocessing
              </h3>
              <div className="relative w-full md:w-[450px] h-[1px] bg-white overflow-hidden">
                  <div className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
                      animate-[shine_2s_linear_infinite]"
                  ></div>
              </div>
              <p className="text-gray-300 w-full md:w-[70%] mt-2">
                Quality data is the foundation of any AI model. Our experts
                assist in data collection, cleaning, and preprocessing,
                eliminating inconsistencies to ensure that the model is trained
                on accurate, structured, and relevant datasets for optimal
                performance.
              </p>
            </div>
          </div>
        </ShineBorder>

        {/* Black Container 2 with ShineBorder */}
        <ShineBorder
          className="w-full md:w-[1200px] h-auto md:h-[556px] bg-black relative md:ml-2 overflow-hidden flex flex-col mt-32 rounded-tl-[530px] rounded-bl-[530px]"
          color={["#1dcaf5", "#f04f57"]}
          borderRadius="530px 530px"
        >
          <div className="pt-12 text-white py-8 px-8 md:px-32 w-full flex flex-col text-left">
            <div className="relative z-10 w-full">
              {/* Section 1 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold pt-16 pb-1">
                  Model Training and Evaluation
                </h3>
                <div className="relative w-full md:w-[450px] h-[1px] bg-white overflow-hidden">
                  <div className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
                      animate-[shine_2s_linear_infinite]"
                  ></div>
                </div>
                <p className="text-gray-300 w-full md:w-[70%] mt-2">
                  Our AI model undergoes rigorous training using advanced
                  techniques. We continuously test, validate, and refine the
                  model to ensure it meets performance benchmarks and aligns
                  with your business goals.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="text-lg font-semibold pb-1">
                  Deployment and Optimization
                </h3>
                <div className="relative w-full md:w-[450px] h-[1px] bg-white overflow-hidden">
                  <div className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
                      animate-[shine_2s_linear_infinite]"
                  ></div>
              </div>
                <p className="text-gray-300 w-full md:w-[70%] mt-2">
                  Once trained, the AI model is deployed into your environment.
                  We continuously monitor and optimize its performance,
                  adapting to new data and improving accuracy over time.
                </p>
              </div>
            </div>
          </div>
        </ShineBorder>

         {/* Black Container 3 with ShineBorder */}
         <ShineBorder
          className="pt-12 mt-16 bg-black text-white py-8 px-8 md:px-32 w-full md:w-[1200px] h-auto md:h-[456px] 
          rounded-tr-[530px] rounded-br-[530px] relative overflow-hidden md:ml-[-320px]"
          color={["#1dcaf5", "#f04f57"]}
          borderRadius="0 530px 530px 0"
        >
          <div className="relative z-10">
              {/* Section 1 */}
              <div className="mb-6">
              <h3 className="text-lg font-semibold pt-16 pb-1">
                Continuous Learning and Improvement
              </h3>
              <div className="relative w-full md:w-[450px] h-[1px] bg-white overflow-hidden">
                  <div className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
                      animate-[shine_2s_linear_infinite]"
                  ></div>
              </div>
              <p className="text-gray-300 w-full md:w-[70%] mt-2">
                AI is ever-evolving. We integrate feedback loops, retrain models
                with new data, and implement adaptive learning strategies to
                ensure your AI solutions remain relevant and effective.
              </p>
            </div>
            {/* Section 2 */}
            <div>
              <h3 className="text-lg font-semibold pb-1">
                Data Collection and Preprocessing
              </h3>
              <div className="relative w-full md:w-[450px] h-[1px] bg-white overflow-hidden">
                  <div className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
                      animate-[shine_2s_linear_infinite]"
                  ></div>
              </div>
              <p className="text-gray-300 w-full md:w-[70%] mt-2">
                Quality data is the foundation of any AI model. Our experts
                assist in data collection, cleaning, and preprocessing,
                eliminating inconsistencies to ensure that the model is trained
                on accurate, structured, and relevant datasets for optimal
                performance.
              </p>
            </div>
          </div>
        </ShineBorder>

        {/* Title Section */}
        <h2 className="text-white text-2xl font-semibold mb-20 pt-10 md:-ml-48 flex items-center justify-start">
          <span className="inline-block w-2 h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-4 rounded-tr-md rounded-br-md"></span>
          Streamlined Mobile App Development Process
        </h2>
      </div>
    </div>
  );
};

export default MobileAppDevelopment;