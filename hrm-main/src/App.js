import React from "react";

const RecruitmentApp = React.lazy(() => import("recruitment/App"));
const EmployeeProfilesApp = React.lazy(() => import("employeeProfiles/App"));

function App() {
  return (
    <div>
      <h1>HRM Main Dashboard</h1>
      <h2>Manage your Employees, Recruitment, and Profiles</h2>

      <React.Suspense fallback={<div>Loading Recruitment...</div>}>
        <RecruitmentApp />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading Employee Profiles...</div>}>
        <EmployeeProfilesApp />
      </React.Suspense>
    </div>
  );
}

export default App;
