"use client";
import React from 'react';
import { FiArrowRight, FiClock, FiUser } from 'react-icons/fi';
const blogPosts = [
  {
    id: 1,
    date: '2025-01-15',
    image: '/blog/blog1.jpg',
    title: 'Deep Dive Into Activity Launch Modes in Android.',
    description: 'In Android, Activity Launch Modes determine how new instances of an activity are created and how they interact with existing activities. The four main launch modes are:',
    link: '/launch-modes-andorid',
    category: 'Android',
    readTime: '5 min read'
  },
  {
    id: 2,
    date: '2025-02-10',
    image: '/blog/blog2.jpg',
    title: 'From Algorithms to Agents',
    description: 'Artificial Intelligence (AI) has become a transformative force in today\'s world. From language models that can write poetry to autonomous systems solving complex problems, AI is revolutionizing the way we live, work, and create.',
    link: '/algorithms-to-agents',
    category: 'AI',
    readTime: '8 min read'
  },
  {
    id: 3,
    date: '2025-03-05',
    image: '/blog/blog3.jpg',
    title: 'WorkManager. AlarmManager. JobScheduler : A Detailed Guide',
    description: 'This blog will explore WorkManager, AlarmManager, and JobScheduler in detail, comparing their functionality, ideal use cases, and examples.',
    link: '/workmanager-alarmmanager-Jobscheduler',
    category: 'Development',
    readTime: '12 min read'
  },
  {
    id: 4,
    date: '2025-04-18',
    image: '/blog/blog4.jpg',
    title: 'How Model Context Protocol Is Transforming the Future of AI',
    description: 'In the rapidly evolving world of Artificial Intelligence (AI), new concepts are continuously emerging, bringing us closer to machines that think and respond like humans.',
    link: '/model-context-protocol',
    category: 'AI',
    readTime: '10 min read'
  },
  {
    id: 5,
    date: '2025-05-22',
    image: '/blog/blog5.jpg',
    title: 'Tiny Tweaks, Powerful Adaptations',
    description: 'Fine-tuning large language models (LLMs) like LLaMA or GPT-3 can require billions of parameters, massive GPUs, and weeks of training. But what if you could achieve similar results by training just 0.1% of the parameters.',
    link: '/tweaks-powerful-adaptations',
    category: 'Machine Learning',
    readTime: '7 min read'
  },
  {
    id: 6,
    date: '2025-05-28',
    image: '/blog/blog6.jpg',
    title: 'Don\'t Let the Hype Hijack the Goal',
    description: 'Artificial Intelligence (AI) has become the crown jewel of innovation in today',
    link: '/hype-hijack-goal',
    category: 'Opinion',
    readTime: '6 min read'
  },
  {
    id: 7,
    date: '2025-05-29',
    image: '/blog/blog7.jpg',
    title: 'Revolutionizing Virtual Colonoscopy',
    description: 'Colorectal cancer remains one of the leading causes of cancer-related deaths globally. The introduction of virtual colonoscopy through CT colonography offers a non-invasive, patient-friendly diagnostic',
    link: '/revolutionizing-virtual-colonoscopy',
    category: 'Healthcare',
    readTime: '9 min read'
  },
  {
    id: 8,
    date: '2025-05-29',
    image: '/blog/blog8.jpg',
    title: 'UAE Makes History with Free ChatGPT Plus for Every Resident',
    description: 'In a groundbreaking development for the global AI community, the United Arab Emirates (UAE) has become the first nation to offer all its residents free access to ChatGPT Plus.',
    link: '/uae-makes-history',
    category: 'News',
    readTime: '4 min read'
  },
  {
    id: 9,
    date: '2025-05-29',
    image: '/blog/blog9.jpg',
    title: 'The Deepfake Dilemma: What Leaders Must Know',
    description: 'In the age of generative AI, deepfakes represent both an opportunity and a threat. As synthetic media becomes more convincing and accessible, organizations must understand the risks, legal frameworks, and best practices to protect their brand, stakeholders, and public trust',
    link: '/the-deepfake-dilemma',
    category: 'AI Ethics',
    readTime: '11 min read'
  },
  {
    id: 10,
    date: '2025-06-13',
    image: '/blog/blog10.jpg',
    title: 'Revolutionizing Hiring: How CODEWORK is Automating Recruitment with AI',
    description: 'The recruitment process is undergoing a major shift, and CODEWORK is leading the way. CODEWORK transforms traditional hiring into an efficient, data-driven system by integrating AI recruitment tools and automation technologies.',
    link: '/revolutionizing-hiring',
    category: 'Business',
    readTime: '8 min read'
  },
  {
    id: 11,
    date: '2025-06-17',
    image: '/blog/blog11.jpg',
    title: 'The New Era of AI: How Digital Marketing Will Never Be the Same Again',
    description: 'It\'s the backbone of a new age of hyper-intelligent digital marketing. AI impacts businesses in many ways, transforming audience engagement and performance measurement with automation, predictive analytics, audience-specific content creation, and automated real-time decision making using deep learning algorithms.',
    link: '/the-new-era-of-ai',
    category: 'Marketing',
    readTime: '10 min read'
  },
  {
    id: 12,
    date: '2025-07-15',
    image: '/blog/blog12.jpg',
    title: 'How is AI Transforming Software Development?',
    description: 'Artificial intelligence (AI) transforms software development by offering tools and practices that increase efficiency, accuracy, and innovation. Artificial Intelligence, especially generative AI and large language models,',
    link: '/ai-transforming-software',
    category: 'Development',
    readTime: '9 min read'
  },
  {
    id: 13,
    date: '2025-07-16',
    image: '/blog/blog13.jpg',
    title: 'Code Generation Automation: Revolutionizing Software Development with AI',
    description: 'In the fast-paced world of software development, AI-driven code generation automation is transforming how developers write, test, and optimize code. By leveraging machine learning algorithms, AI can generate high-quality code, reducing development time and minimizing errors. This innovation is a key aspect of how AI is transforming software development.',
    link: '/code-generation-automation',
    category: 'Automation',
    readTime: '12 min read'
  },
  {
    id: 14,
    date: '2025-07-16',
    image: '/blog/blog14.jpg',
    title: 'Generative AI is revolutionizing software development.',
    description: 'Development with Intelligent Automation Generative AI is revolutionizing software development',
    link: '/generative-ai',
    category: 'AI',
    readTime: '6 min read'
  },
  {
    id: 15,
    date: '2025-07-21',
    image: '/blog/blog15.jpg',
    title: 'What is Machine Learning? A Comprehensive Guide',
    description: 'Machine learning (ML), a subset of artificial intelligence (AI), empowers machines to learn from experience, operate independently, and enhance accuracy through exposure to data.',
    link: '/machine-learning',
    category: 'Machine Learning',
    readTime: '15 min read'
  },
  {
    id: 16,
    date: '2025-07-22',
    image: '/blog/blog16.jpg',
    title: 'What is Deep Learning? A Comprehensive Guide',
    description: 'Deep learning is a part of machine learning that uses multiple-layered neural networks to imitate the human brain\'s decision-making process.',
    link: '/deep-learning',
    category: 'Deep Learning',
    readTime: '13 min read'
  },
  {
    id: 17,
    date: '2025-07-22',
    image: '/blog/blog17.jpg',
    title: 'Chatbots in 2025: Your Everyday AI Companion',
    description: 'Ever chatted with an online helper and thought, "Wow, this thing almost feels human!"? That\'s the charm of today\'s chatbots—smarter, friendlier, and more helpful than ever.',
    link: '/everyday-ai-companion',
    category: 'Chatbots',
    readTime: '7 min read'
  },
  {
    id: 18,
    date: '2025-07-23',
    image: '/blog/blog18.jpg',
    title: 'Mixture of Experts: Making AI Smarter, Not Just Bigger',
    description: 'Large Language Models (LLMs) like GPT-4 and Claude are impressive - but they\'re also expensive.',
    link: '/mixture-of-experts',
    category: 'AI Architecture',
    readTime: '11 min read'
  },
  {
    id: 19,
    date: '2025-07-23',
    image: '/blog/blog19.jpg',
    title: 'Demystifying Generative AI: A Friendly Guide to Different Model Types',
    description: 'Generative AI has quickly moved from a trending term to a foundational technology powering many modern applications. From powering conversational chatbots',
    link: '/demystifying-generative',
    category: 'AI',
    readTime: '10 min read'
  },
  {
    id: 20,
    date: '2025-07-23',
    image: '/blog/blog20.jpg',
    title: 'What is Predictive Analytics?',
    description: 'Predictive analytics is a powerful branch of data science that utilizes statistical techniques, machine learning, deep learning,',
    link: '/predictive-analytics',
    category: 'Analytics',
    readTime: '8 min read'
  },
  {
    id: 21,
    date: '2025-07-24',
    image: '/blog/blog21.jpg',
    title: 'What is a Neural Network?',
    description: 'A neural network is a type of machine learning model inspired by the way neurons in the human',
    link: '/neural-network',
    category: 'Neural Networks',
    readTime: '9 min read'
  },
  {
    id: 22,
    date: '2025-07-24',
    image: '/blog/blog2.jpg',
    title: ' AI Consulting ',
    description: 'Transform your business with AI consulting and development services that position you as an industry leader.',
    link: '/ai-consulting',
    category: 'AI',
    readTime: '6 min read'
  },
  {
    id: 23,
    date: '2025-07-24',
    image: '/blog/blog23.jpg',
    title: 'What is Artificial Intelligence?',
    description: 'Artificial Intelligence (AI) refers to the capability of machines to carry out tasks that usually demand human intelligence. These tasks include learning from data, recognizing patterns, making decisions, understanding language, and interacting with humans.',
    link: '/artificial-intelligence',
    category: 'AI',
    readTime: '8 min read'
  },
  {
    id: 24,
    date: '2025-07-25',
    image: '/blog/blog24.jpg',
    title: 'Data Engineering: The Backbone of Smart Data Systems',
    description: 'In the rapidly evolving digital landscape, businesses rely on data to drive smart decision-making. However, before it can be analyzed or fed into AI models, data must be gathered, refined, and structured. It is the role of data engineering — a field that builds and maintains the systems responsible for turning raw data into usable information.',
    link: '/data-engineering',
    category: 'Data Engineering',
    readTime: '10 min read'
  },
  {
    id: 25,
    date: '2025-07-25',
    image: '/blog/blog25.jpg',
    title: 'AI in Cybersecurity',
    description: 'At CodeWorkAI, we use AI for real-time detection, prevention, and responsive actions on different threats.',
    link: '/ai-in-cybersecurity',
    category: 'AI',
    readTime: '12 min read'
  },
  {
    id: 26,
    date: '2025-07-26',
    image: '/blog/blog26.jpg',
    title: 'AI Chatbot Integration',
    description: 'AI chatbot integration is the process of connecting a chatbot with existing business systems such as websites,',
    link: '/ai-chatbot-integration',
    category: 'AI',
    readTime: '10 min read'
  },
  {
    id: 27,
    date: '2025-07-26',
    image: '/blog/blog27.jpg',
    title: 'Natural Language Processing (NLP) Essentials',
    description: 'Natural Language Processing (NLP) is the branch of artificial intelligence that focuses on enabling machines to read, ',
    link: '/natural-language-processing',
    category: 'AI',
    readTime: '9 min read'
  },
  {
    id: 28,
    date: '2025-07-27',
    image: '/blog/blog18.jpg',
    title: 'what is SDLC',
    description: 'The Software Development Life Cycle (SDLC) is a structured process used by development teams to design, develop, test, and deploy high-quality software applications. It provides a systematic approach to software development, ensuring that projects are completed on time, within budget, and meet the required standards.',
    link: '/software-development-life-cycle',
    category: 'AI',
    readTime: '10 min read'
  },
  {
    id: 29,
    date: '2025-07-27',
    image: '/blog/blog22.jpg',
    title: 'What is CI/CD?',
    description: 'CI/CD refers to Continuous Integration and Continuous Deployment (or Delivery). bles teams to automate workflows, allowing them to release',
    link: '/continuous-integration-continuous-deployment',
    category: 'AI',
    readTime: '10 min read'
  },
  {
    id: 30,
    date: '2025-09-12',
    image: '/blog/blog12.jpg',
    title: 'The Human Side of AI Projects',
    description: 'Managing Teams Through Digital Transformation is a key aspect of AI-driven software development. In this blog post, we will explore the human side of AI projects, including the importance of human-centered design, user experience, and collaboration.',
    link: '/human-side-ai-projects',
    category: 'AI',
    readTime: '7 min read'
  },
  {
    id: 31,
    date: '2025-09-22', 
    image: '/blog/blog3.jpg',
    title: 'Underground Mapping: A Complete Guide',
    description: 'Underground mapping is the process of creating a detailed digital representation of the underground infrastructure of a city or region. This includes tunnels, tunnels, and other complex structures that are not visible to the naked eye. Underground mapping is used by a variety of industries, including construction, engineering, and the military.',
    link: '/underground-mapping',
    category: 'AI',
    readTime: '7 min read'
    },
    {
      id: 32,
      date: '2025-09-22', 
      image: '/blog/blog2.jpg',
      title: 'Computer Vision: How Machines Learn to See TL,DR',
      description: 'Computer vision is the field of study that focuses on enabling machines to understand and interpret visual data. It involves developing algorithms that can recognize patterns and objects in images or videos. In this blog post, we will explore the basics of computer vision and how it is used in various applications.',
      link: '/computer-vision',
      category: 'AI',
      readTime: '7 min read'
    },
    {
      id: 33,
      date: '2025-10-22', 
      image: '/blog/blog3.jpg',
      title: 'Crowd Management: Ensuring Safety and Order in Large Gatherings',
      description: 'Crowd management is about planning, monitoring, and guiding large groups to ensure safety, comfort, and order. It involves understanding crowd behavior, preparing for risks,',
      link: '/crowd-management',
      category: 'AI',
      readTime: '7 min read'
    },
];

const AllBlogList = () => {
  return (
    <div className="w-full px-4 py-16 bg-primary relative overflow-hidden">
      {/* Static Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-secondary/15 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/10 rounded-full"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-6">
          <span className="text-secondary text-sm font-medium">— Latest Articles —</span>
        </div>
        
        <h1 className="text-4xl font-bold mb-6">
          <span className="text-white">Our </span>
          <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
            Blog Posts
          </span>
        </h1>
        
        <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto"></div>
      </div>

      {/* Consistent Card Grid - No animations */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 h-full flex flex-col"
            >
              {/* Image Section - No Label Text */}
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={post.image}
                  alt={post.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Date and Read Time */}
                <div className="flex items-center justify-between mb-3 text-white/70 text-sm">
                  <div className="flex items-center">
                    <FiClock className="mr-2 text-secondary" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <FiUser className="mr-1 text-secondary" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 leading-tight line-clamp-2">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {post.description}
                </p>

                {/* Read More Button */}
                <div className="mt-auto">
                  <a
                    href={post.link}
                    className="inline-flex items-center text-secondary hover:text-white text-sm font-semibold border border-secondary/50 hover:border-secondary hover:bg-secondary/10 px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm w-full justify-center"
                  >
                    <span>Continue Reading</span>
                    <FiArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Line clamp CSS */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default AllBlogList;
