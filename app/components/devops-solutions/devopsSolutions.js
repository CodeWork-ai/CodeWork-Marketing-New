import React from "react";
import ShineBorder from "../../../components/ui/shine-border";

const DevopsSolutions = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Black Container 1 with ShineBorder */}
        <ShineBorder
          className="pt-12 mt-16 bg-black text-white py-8 px-32 w-[1200px] h-[556px] 
          rounded-tr-[530px] rounded-br-[530px] relative overflow-hidden ml-[-320px]"
          color={["#1dcaf5", "#f04f57"]}
          borderRadius="0 530px 530px 0"
        >
          {/* Title Section */}
          <div className="relative w-full">
            <h2 className="absolute left-[-10px] text-white text-2xl font-semibold flex items-center">
              <span className="inline-block w-2 h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-4 rounded-tr-md rounded-br-md"></span>
              Our AI Model Training Process
            </h2>
          </div>

          <div className="flex justify-start  w-full">
            {/* New Section Matching Image Layout */}
            <div className="space-y-6  mt-24">
              {[
                {
                  title: "Personalized Functionality",
                  description: "Tailored to specific workflows and operations.",
                },
                {
                  title: "Scalability & Adaptability",
                  description: "Grows with business expansion.",
                },
                {
                  title: "Seamless Integration",
                  description: "Works effortlessly with existing systems.",
                },
                {
                  title: "Advanced Security",
                  description:
                    "Implements industry-leading security standards.",
                },
                {
                  title: "Competitive Edge",
                  description:
                    "Offers exclusive features to enhance market positioning.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#f04f57] text-white flex items-center justify-center rounded-full font-bold text-xl">
                    ✔
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1dcaf5]">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ShineBorder>
 {/* Title Section */}
 <h2 className="text-white text-2xl font-semibold pt-32  -ml-48 flex items-center justify-start">
          <span className="inline-block w-2 h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-4 rounded-tr-md rounded-br-md"></span>
          Comprehensive Software Development Solutions        </h2>

        {/* Black Container 2 with ShineBorder */}
        <ShineBorder
          className="w-[1200px] h-[556px] bg-black relative ml-2 overflow-hidden flex flex-col mt-32 rounded-tl-[530px] rounded-bl-[530px]"
          color={["#1dcaf5", "#f04f57"]}
          borderRadius="530px 530px"
        >
          <div className="pt-12 text-white py-8  px-32 w-full flex flex-col text-left">
            <div className="relative z-10 w-full">
              {/* Section 1 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold pt-16 pb-1">
                  Model Training and Evaluation
                </h3>
                <div className="relative w-[450px] h-[1px] bg-white overflow-hidden">
                  <div
                    className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
                      animate-[shine_2s_linear_infinite]"
                  ></div>
                </div>
                <p className="text-gray-300 w-[70%] mt-2">
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
                <div className="relative w-[450px] h-[1px] bg-white overflow-hidden">
                  <div
                    className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
                      animate-[shine_2s_linear_infinite]"
                  ></div>
                </div>
                <p className="text-gray-300 w-[70%] mt-2">
                  Once trained, the AI model is deployed into your environment.
                  We continuously monitor and optimize its performance, adapting
                  to new data and improving accuracy over time.
                </p>
              </div>
               {/* Section 3 */}
               <div>
                <h3 className="text-lg font-semibold pb-1">
                  Deployment and Optimization
                </h3>
                <div className="relative w-[450px] h-[1px] bg-white overflow-hidden">
                  <div
                    className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
                      animate-[shine_2s_linear_infinite]"
                  ></div>
                </div>
                <p className="text-gray-300 w-[70%] mt-2">
                  Once trained, the AI model is deployed into your environment.
                  We continuously monitor and optimize its performance, adapting
                  to new data and improving accuracy over time.
                </p>
              </div>
            </div>
          </div>
        </ShineBorder>

        {/* Black Container 3 with ShineBorder */}
        <ShineBorder
          className="pt-12 mt-32 bg-black text-white py-8 px-32 w-[1200px] h-[456px] 
          rounded-tr-[530px] rounded-br-[530px] relative overflow-hidden ml-[-320px]"
          color={["#1dcaf5", "#f04f57"]}
          borderRadius="0 530px 530px 0"
        >
          <div className="relative z-10">
            {/* Section 1 */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold pt-16 pb-1">
                Continuous Learning and Improvement
              </h3>
              <div className="relative w-[450px] h-[1px] bg-white overflow-hidden">
                <div
                  className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
                      animate-[shine_2s_linear_infinite]"
                ></div>
              </div>
              <p className="text-gray-300 w-[70%] mt-2">
                AI is ever-evolving. We integrate feedback loops, retrain models
                with new data, and implement adaptive learning strategies to
                ensure your AI solutions remain relevant and effective.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-lg font-semibold pb-1">
                Business Impact and Insights
              </h3>
              <div className="relative w-[450px] h-[1px] bg-white overflow-hidden">
                <div
                  className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
                      animate-[shine_2s_linear_infinite]"
                ></div>
              </div>
              <p className="text-gray-300 w-[70%] mt-2">
                Our AI-driven solutions are designed to provide actionable
                insights. We analyze model performance, extract key trends, and
                enable data-driven decision-making for sustained business
                success.
              </p>
            </div>
          </div>
        </ShineBorder>
      </div>
    </div>
  );
};

export default DevopsSolutions;
