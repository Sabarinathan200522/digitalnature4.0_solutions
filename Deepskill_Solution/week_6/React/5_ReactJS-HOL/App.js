import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohort1 = {
    cohortCode: 'C101',
    technology: 'ReactJS',
    startDate: '2025-06-01',
    currentStatus: 'ongoing',
    coachName: 'Anand Kumar',
    trainerName: 'Deepa Singh'
  };

  const cohort2 = {
    cohortCode: 'C102',
    technology: 'Java',
    startDate: '2025-05-01',
    currentStatus: 'completed',
    coachName: 'Pooja Verma',
    trainerName: 'Rahul Yadav'
  };
  return (
    <div className="App">
      <h2>My Cohorts</h2>
      <CohortDetails cohort={cohort1} />
      <CohortDetails cohort={cohort2} />
    </div>
  );
}

export default App;
