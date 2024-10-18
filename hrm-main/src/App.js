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
import './App.css'
const RecruitmentApp = lazy(() => import('recruitment/RecruitmentApp'));
const EmployeeProfilesApp = lazy(() => import('employeeProfiles/EmployeeProfilesApp'));

const App = () => (
  <Router>
    <div>
      <h1 className='hrm-main-application-title'>HRM APPLICATION</h1>
      <nav className='hrm-main-application-content'>
          <Link className='hrm-main-application-button hrm-main-application-recruitment-btn' to="/recruitment"><span>Recruitment Module</span></Link>
          <Link className='hrm-main-application-button hrm-main-application-employeeProfiles-btn' to="/employeeProfiles"><span>Employee Profiles Module</span></Link>
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
