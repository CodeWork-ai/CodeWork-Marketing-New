import React from 'react'
import Blog32 from '../components/blogs/blog32'
import ComputerVisionFaq from '../components/FAQsforBlog/computerVisionFaq'
import { Metadata } from 'next'

export const metadata = {
  title: 'Computer Vision: AI, CNNs, Facial Recognition & Self-Driving',
  description: 'Master Computer Vision, the AI field that teaches machines to "see." Learn CNNs, image preprocessing, and feature extraction for real-world apps like self-driving cars.',
  keywords: [
    'computer vision how machines learn to see',
    'convolutional neural networks (cnns) for vision',
    'computer vision applications in healthcare',
    'computer vision vs image processing explained',
    'self-driving cars and computer vision systems',
    'feature extraction and model training computer vision',
    'computer vision challenges and future trends',
    'computer vision for quality control and retail',
    'deep learning models for image recognition',
    'edge ai and computer vision deployment'
  ]
}

const page = () => {
  return (
    <div>
      <Blog32 />
      {/* <ComputerVisionFaq /> */}
    </div>
  )
}

export default page
