import React from 'react';
import { FiArrowRight, FiClock } from 'react-icons/fi';

const blogPosts = [
  {
    id: 1,
    date: '2025-01-15',
    image: '/blog/blog1.jpg',
    title: 'Deep Dive Into Activity Launch Modes in Android.',
    description:
      'In Android, Activity Launch Modes determine how new instances of an activity are created and how they interact with existing activities. The four main launch modes are:',
    link: '/launch-modes-andorid',
  },
  {
    id: 2,
    date: '2025-02-10',
    image: '/blog/blog2.jpg',
    title: 'From Algorithms to Agents',
    description:
      'Artificial Intelligence (AI) has become a transformative force in today’s world. From language models that can write poetry to autonomous systems solving complex problems, AI is revolutionizing the way we live, work, and create. But how did we get here? In this blog,',
    link: '/algorithms-to-agents',
  },
  {
    id: 3,
    date: '2025-03-05',
    image: '/blog/blog3.jpg',
    title: 'WorkManager. AlarmManager. JobScheduler : A Detailed Guide',
    description:
      'This blog will explore WorkManager, AlarmManager, and JobScheduler in detail, comparing their functionality, ideal use cases, and examples.',
    link: '/workmanager-alarmmanager-Jobscheduler',
  },
  {
    id: 4,
    date: '2025-04-18',
    image: '/blog/blog4.jpg',
    title: 'How Model Context Protocol Is Transforming the Future of AI',
    description:
      'In the rapidly evolving world of Artificial Intelligence (AI), new concepts are continuously emerging, bringing us closer to machines that think and respond like humans.',
    link: '/model-context-protocol',
  },
  {
    id: 5,
    date: '2025-05-22',
    image: '/blog/blog5.jpg',
    title: 'Tiny Tweaks, Powerful Adaptations',
    description:
      'Fine-tuning large language models (LLMs) like LLaMA or GPT-3 can require billions of parameters, massive GPUs, and weeks of training. But what if you could achieve similar results by training just 0.1% of the parameters.',
    link: '/tweaks-powerful-adaptations',
  },
  {
    id: 6,
    date: '2025-05-28',
    image: '/blog/blog6.jpg',
    title: 'Don’t Let the Hype Hijack the Goal',
    description:
      'Artificial Intelligence (AI) has become the crown jewel of innovation in today',
    link: '/hype-hijack-goal',
  },
  {
    id: 7,
    date: '2025-05-29',
    image: '/blog/blog7.jpg',
    title: 'Revolutionizing Virtual Colonoscopy',
    description:
      'Colorectal cancer remains one of the leading causes of cancer-related deaths globally. The introduction of virtual colonoscopy through CT colonography offers a non-invasive, patient-friendly diagnostic',
    link: '/revolutionizing-virtual-colonoscopy',
  },
  {
    id: 8,
    date: '2025-05-29',
    image: '/blog/blog8.jpg',
    title: 'UAE Makes History with Free ChatGPT Plus for Every Resident',
    description:
      'In a groundbreaking development for the global AI community, the United Arab Emirates (UAE) has become the first nation to offer all its residents free access to ChatGPT Plus.',
    link: '/uae-makes-history',
  },
  {
    id: 9,
    date: '2025-05-29',
    image: '/blog/blog9.jpg',
    title: 'The Deepfake Dilemma: What Leaders Must Know',
    description:
      'In the age of generative AI, deepfakes represent both an opportunity and a threat. As synthetic media becomes more convincing and accessible, organizations must understand the risks, legal frameworks, and best practices to protect their brand, stakeholders, and public trust',
    link: '/the-deepfake-dilemma',
  },

  {
    id: 10,
    date: '2025-06-13',
    image: '/blog/blog10.jpg',
    title: 'Revolutionizing Hiring: How CODEWORK is Automating Recruitment with AI',
    description:
      'The recruitment process is undergoing a major shift, and CODEWORK is leading the way. CODEWORK transforms traditional hiring into an efficient, data-driven system by integrating AI recruitment tools and automation technologies.',
    link: '/revolutionizing-hiring',
  },
  {
    id: 11,
    date: '2025-06-17',
    image: '/blog/blog11.jpg',
    title: 'Artificial Intelligence, or AI, has evolved beyond just being a trendy term—it',
    description:
      'It’s the backbone of a new age of hyper-intelligent digital marketing. AI impacts businesses in many ways, transforming audience engagement and performance measurement with automation, predictive analytics, audience-specific content creation, and automated real-time decision making using deep learning algorithms.',
    link: '/the-new-era-of-ai',
  },
];

const AllBlogList = () => {
  return (
    <div className="w-full px-4 sm:px-6 py-12 sm:py-40 bg-gradient-to-b from-[#FBF8E6] to-[#EBF9FF]">
      <div className="flex flex-wrap px-4 sm:px-8 -mx-4 sm:-mx-6">
        {blogPosts.map(post => {
          const formattedDate = new Date(post.date).toLocaleDateString(undefined, {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          });

          return (
            <div
              key={post.id}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 sm:px-12 mb-8 sm:mb-12"
            >
              <div className="h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-50 dark:border-gray-50 flex flex-col">
                <a href={post.link}>
                  <img
                    className="rounded-t-lg w-full h-48 sm:h-64 object-cover"
                    src={post.image}
                    alt={post.title}
                  />
                </a>
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <div className="flex items-center mb-2 text-xs sm:text-sm text-gray-800 dark:text-gray-900">
                    <FiClock className="mr-1" />
                    <span>{formattedDate}</span>
                  </div>
                  <a href={post.link} className="hover:underline">
                    <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
                      {post.title}
                    </h5>
                  </a>
                  <p className="mb-4 font-normal text-gray-700 dark:text-gray-800 text-sm sm:text-base line-clamp-2">
                    {post.description}
                  </p>
                  <div className="mt-auto flex justify-end">
                    <a
                      href={post.link}
                      className="group inline-flex items-center px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium text-center text-blue-950 bg-cyan-400 rounded-lg hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-400 dark:bg-cyan-400 dark:hover:bg-cyan-600 dark:focus:ring-cyan-400"
                    >
                      Read more
                      <FiArrowRight className="ml-1 sm:ml-2 transition-transform duration-200 group-hover:translate-x-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBlogList;