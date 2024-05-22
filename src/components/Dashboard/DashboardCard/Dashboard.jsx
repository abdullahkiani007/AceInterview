import React from 'react';
import ProfileCard from './Cards/profileCard';
import BehaviourCard from './Cards/behaviourCard';
import TechnicalCard from './Cards/technicalCard';
import LanguageProficiencyCard from './Cards/languageProficiencyCard';
import QuizesCard from './Cards/quizesCard';

import FeedbackCard from './Cards/feedbackCard';
import ResourcesCard from './Cards/resourceCard';
import ProgressChart from './Charts/ProgressChart';
import PerformanceChart from './Charts/PerformanceChart';
// rest of your code
const Dashboard = () => {
  // Sample data for charts
  const progressData = [
    { month: 'Jan', score: 65 },
    { month: 'Feb', score: 70 },
    { month: 'Mar', score: 75 },
    { month: 'Apr', score: 80 },
    { month: 'May', score: 85 },
    { month: 'Jun', score: 90 },
  ];

  const performanceData = [
    { area: 'Communication', score: 80 },
    { area: 'Technical Skills', score: 75 },
    { area: 'Problem Solving', score: 85 },
    { area: 'Teamwork', score: 70 },
  ];

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-8'>
        Dashboard
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <ProfileCard />
        <div className='col-span-2'>
          <h2 className='text-xl font-bold mb-4'>Progress Over Time</h2>
          <ProgressChart data={progressData} />
        </div>
        <div className='col-span-2'>
          <h2 className='text-xl font-bold mb-4'>Performance Summary</h2>
          <PerformanceChart data={performanceData} />
        </div>
        <BehaviourCard />
        <TechnicalCard />
        <LanguageProficiencyCard />
        <QuizesCard />
        <FeedbackCard />
        <ResourcesCard />
       
      </div>
    </div>
  );
}

export default Dashboard;
