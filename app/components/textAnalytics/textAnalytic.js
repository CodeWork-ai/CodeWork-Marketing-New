import React from 'react'

function TextAnalytic() {
  return (
    <div className="container mx-auto px-16 py-12">
      {/* Top headline + intro */}
      <h2 className="text-3xl font-bold text-gray-800">
        Challenges in Caregiver Communication
      </h2>
      
      {/* Optional introductory paragraph if needed */}
      <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl">
        Common issues faced in caregiver communication include:
      </p>

      {/* List moved outside <p> */}
      <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
        <li>
          <span className="font-medium">
            Misinterpretations: Conversations sometimes lose their true meaning.
          </span>
        </li>
        <li>
          <span className="font-medium">
            Emotional Disconnects: It’s hard to pick up and respond to emotional cues effectively.
          </span>
        </li>
        <li>
          <span className="font-medium">
            Inefficiencies: Pinpointing areas that need better communication can be challenging.
          </span>
        </li>
      </ul>

      {/* Illustration */}
       <div className="mt-8 flex space-x-36">
  <img
    src="\CaseStudies\Text.jpg"
    alt="Person translating a PDF on their laptop"
    className="w-[400px] h-[300px]"
  />
  <img
    src="/CaseStudies/text2.jpg"
    alt="Description of the second image"
    className="w-[400px] h-[300px]"
  />
</div>


      {/* Two-column feature blocks */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Strategic Response */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            Problem-Solving Approach
          </h3>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">
                Comprehensive Analysis: Audio recordings are transcribed, making it easier to understand context.
              </span>
            </li>
            <li>
              <span className="font-medium">
                Emotional Intelligence: Sentiment analysis shines a light on emotional tones and feedback patterns.
              </span>
            </li>
            <li>
              <span className="font-medium">
                Data-Driven Solutions: Insights are transformed into actionable strategies, helping organizations take meaningful steps forward.
              </span>
            </li>
          </ul>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            Key Features
          </h3>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">
                Speech-to-Text Transcription: Turning spoken words into accurate text ensures nothing gets lost in translation.
              </span>
            </li>
            <li>
              <span className="font-medium">
                NLP Contextual Analysis: Unlocking valuable insights hidden within conversations.
              </span>
            </li>
            <li>
              <span className="font-medium">
                Sentiment Analysis: Detecting emotions and pinpointing areas for improvement.
              </span>
            </li>
            <li>
              <span className="font-medium">
                Feedback Trend Detection: Spotting recurring patterns to guide informed decision-making.
              </span>
            </li>
            <li>
              <span className="font-medium">
                Visualized Reports: Simplifying complex data into easy-to-use formats that organizations can act on.
              </span>
            </li>
          </ul>
          <div>
            <p className="text-gray-600 pt-7">
              Beyond technology, the Text Analytics Project builds stronger connections and revolutionizes caregiver support. With advancements like real-time sentiment tracking ahead, the potential for empathetic caregiving is boundless.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextAnalytic
