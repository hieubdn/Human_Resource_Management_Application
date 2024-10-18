// import React, { Suspense, lazy } from 'react';

// const RecruitmentApp = lazy(() => import('recruitment/RecruitmentApp'));
// const EmployeeProfilesApp = lazy(() => import('employeeProfiles/EmployeeProfilesApp'));

// const App = () => (
//   <div>
//     <h1>HRM Main Application</h1>
//     <nav>
//       <ul>
//         <li><a href="#recruitment">Recruitment Module</a></li>
//         <li><a href="#employeeProfiles">Employee Profiles Module</a></li>
//       </ul>
//     </nav>
//     <div id="module-content">
//       <Suspense fallback={<p>Loading Recruitment Module...</p>}>
//         <RecruitmentApp />
//       </Suspense>
//       <Suspense fallback={<p>Loading Employee Profiles Module...</p>}>
//         <EmployeeProfilesApp />
//       </Suspense>
//     </div>
//   </div>
// );
// export default App;









import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const RecruitmentApp = lazy(() => import('recruitment/RecruitmentApp'));
const EmployeeProfilesApp = lazy(() => import('employeeProfiles/EmployeeProfilesApp'));

const App = () => (
  <Router>
    <div>
      <h1>HRM Main Application</h1>
      <nav>
        <ul>
          <li><Link to="/recruitment">Recruitment Module</Link></li>
          <li><Link to="/employeeProfiles">Employee Profiles Module</Link></li>
        </ul>
      </nav>
      <div id="module-content">
        <Suspense fallback={<p>Loading Module...</p>}>
          <Routes>
            <Route path="/recruitment" element={<RecruitmentApp />} />
            <Route path="/employeeProfiles" element={<EmployeeProfilesApp />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  </Router>
);

export default App;
