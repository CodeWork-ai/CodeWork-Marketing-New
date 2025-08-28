// pages/blog21.jsx
"use client";
import React from "react";
import Image from "next/image";
import { FiClock } from "react-icons/fi";
import Link from "next/link";

const Blog21 = () => {
  return (
    <div className="bg-primary py-12 pt-40 min-h-screen">
      <div className="max-w-screen-lg mx-auto px-4">

        {/* TITLE - Main heading is 5xl and secondary color */}
        <h1 className="text-5xl font-extrabold text-secondary mb-8 drop-shadow-glow">
          What is a Neural Network?
        </h1>

        {/* FEATURE IMAGE */}
        <div className="relative w-full h-[400px] border-4 border-secondary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
          <Image
            src="/blog/blog21.jpg"
            alt="What is a Neural Network"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* META */}
        <div className="flex items-center text-sm text-white mb-10 space-x-3">
          <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-extrabold drop-shadow-glow">
            F
          </div>
          <span className="uppercase tracking-wide font-semibold">Felista</span>
          <span>•</span>
          <div className="flex items-center">
            <FiClock className="mr-1 text-cyan-400" />
            <span>16 July 2025</span>
          </div>
        </div>

        {/* INTRODUCTION */}
        <p className="text-white/80 text-xl leading-relaxed mb-6">
          A neural network is a type of machine learning model inspired by the way neurons in the human brain communicate. It consists of layers of interconnected nodes (neurons) that process input data to produce an output. These models are trained on large datasets to learn patterns and improve accuracy over time.
        </p>
        <p className="text-white/80 text-xl leading-relaxed mb-6">
          For example, when you upload a photo to your phone and it recognizes your face, a neural network is working in the background to identify facial features.
        </p>

        {/* SECTION: How Do Neural Networks Work? */}
        <h2 className="text-2xl font-bold text-white mb-4">How Do Neural Networks Work?</h2>
        <p className="text-white/80 leading-relaxed mb-4">
          Neural networks consist of layers of artificial neurons that process data in a structured manner. These layers enable the system to recognize patterns, identify connections, and make informed decisions based on that analysis.
        </p>
        <p className="text-white/80 leading-relaxed mb-4">
          Let's go through it step by step using a practical example.
        </p>

        <h3 className="text-xl font-semibold text-white mb-2">1. Input Layer</h3>
        <p className="text-white/80 leading-relaxed mb-4">
          This is where the data enters the neural network. Each neuron in the layer corresponds to a specific feature extracted from the input data.
        </p>
        <p className="text-white/80 leading-relaxed mb-4">
          <strong>Example:</strong> Suppose you're training a neural network to recognize handwritten digits (like from the MNIST dataset). Each 28x28 pixel image of a digit is flattened into 784 inputs (28 × 28 = 784). The input layer receives pixel values that range from 0 to 255.
        </p>

        <h3 className="text-xl font-semibold text-white mb-2">2. Hidden Layers</h3>
        <p className="text-white/80 leading-relaxed mb-4">
          This is the "brain" of the network. It calculates values by applying weights, adjusting for biases, and using activation functions to determine the significance of each input feature.
        </p>
        <p className="text-white/80 leading-relaxed mb-4">
          Each neuron in a hidden layer:
        </p>
        <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
          <li>Receives inputs from the previous layer</li>
          <li>Applies weights and a bias to each input</li>
          <li>Passes the result through an activation function (like ReLU, Sigmoid, or Tanh)</li>
        </ul>
        <p className="text-white/80 leading-relaxed mb-4">
          Think of it like this: Weights determine how much influence a feature has (e.g., is the top-left pixel important?). Activation functions apply non-linear transformations that enable the network to capture intricate patterns in the data.
        </p>
        <p className="text-white/80 leading-relaxed mb-4">
          <strong>Continuing the Example:</strong> If the image shows a handwritten "3", the neurons in the hidden layer learn the shape, curves, and pixel density patterns that distinguish it from a "2" or "8".
        </p>

        <h3 className="text-xl font-semibold text-white mb-2">3. Output Layer</h3>
        <p className="text-white/80 leading-relaxed mb-4">
          The final layer gives the prediction. In classification problems, each node in the output layer represents a class (for example, digits 0 to 9, which comprise 10 classes).
        </p>
        <p className="text-white/80 leading-relaxed mb-4">
          Softmax activation typically transforms outputs into probabilities that add up to 1.
        </p>
        <p className="text-white/80 leading-relaxed mb-4">
          <strong>Example Output:</strong> Here's an example of what the output layer could generate: [0.01, 0.02, 0.10, 0.80, 0.01, 0.01, 0.02, 0.01, 0.01, 0.01] It means there's an 80% chance the input is the digit "3".
        </p>

        {/* SECTION: Types of Neural Networks */}
        <h2 className="text-2xl font-bold text-white mb-4">Types of Neural Networks</h2>
        <p className="text-white/80 leading-relaxed mb-4">
          Neural networks come in different architectures based on the task they are meant to perform:
        </p>
        <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
          <li><strong>Feedforward Neural Networks (FNN):</strong> Data moves in one direction. Ideal for basic prediction models.</li>
          <li><strong>Convolutional Neural Networks (CNNs):</strong> Primarily applied in computer vision tasks like image classification and detection.</li>
          <li><strong>Recurrent Neural Networks (RNNs):</strong> Tailored for processing sequential data such as natural language, time series, or audio.</li>
          <li><strong>Generative Adversarial Networks (GANs):</strong> Consist of two networks that compete with each other to generate new data.</li>
        </ul>
        <p className="text-white/80 leading-relaxed mb-4">
          Each type has its specific use case in industries such as healthcare, finance, marketing, and entertainment.
        </p>

        {/* SECTION: Neural Networks vs. Deep Learning */}
        <h2 className="text-2xl font-bold text-white mb-4">Neural Networks vs. Deep Learning</h2>
        <p className="text-white/80 leading-relaxed mb-4">
          Although the terms are frequently swapped, there’s a slight distinction between them.
        </p>
        <p className="text-white/80 leading-relaxed mb-4">
          Neural networks serve as the foundation for many machine learning systems. Deep learning involves constructing neural networks with multiple hidden layers, enabling them to model highly complex relationships within data.
        </p>
        <p className="text-white/80 leading-relaxed mb-4">
          Simply put, deep learning relies on neural networks—but not every neural network is deep enough to be classified as deep learning. Deep learning enables more complex, layered architectures capable of handling large-scale data and achieving high accuracy.
        </p>

        {/* SECTION: History of Neural Networks */}
        <h2 className="text-2xl font-bold text-white mb-4">History of Neural Networks</h2>
        <p className="text-white/80 leading-relaxed mb-4">
          The concept of neural networks dates back to the 1940s with the creation of the first artificial neuron, the McCulloch-Pitts model. Back in the 1980s, the introduction of backpropagation made neural network training more feasible. Massive datasets and improved computing power sparked a major revival in the field during the 2010s.
        </p>
        <p className="text-white/80 leading-relaxed mb-4">
          Key milestones include:
        </p>
        <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
          <li>1958 – Perceptron by Frank Rosenblatt</li>
          <li>1986 – Backpropagation algorithm popularized</li>
          <li>2012 – CNN breakthrough in ImageNet competition</li>
        </ul>
        <p className="text-white/80 leading-relaxed mb-4">
          Today, Neural networks power tools like ChatGPT, Siri, and self-driving cars.
        </p>

        {/* SECTION: Conclusion */}
        <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
        <p className="text-white/80 leading-relaxed mb-6">
          Neural networks are revolutionizing how machines learn and make decisions. From recognizing images to translating languages, their applications are vast and growing. As technology advances, understanding these foundational models is essential for anyone interested in AI and machine learning.
        </p>

        {/* SECTION: Internal Link */}
        <p className="text-white/80 leading-relaxed mb-6">
          <strong>Explore More:</strong> Discover the broader impact of AI <Link href="/ai-transforming-software" className="text-secondary hover:underline font-medium"> How is AI Transforming Software Development?</Link>
        </p>

        <style jsx>{`
          .drop-shadow-glow {
            text-shadow: 0 0 12px #1ddfea66, 0 0 2px #223044;
          }
          .shadow-glow {
            box-shadow: 0 0 32px #1ddfea22, 0 0 8px #22304426;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Blog21;
