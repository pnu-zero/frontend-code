import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import GroupEnrollmentPage from './components/pages/GroupEnrollmentPage';
import SignupPage from './components/pages/SignupPage';
import LoginPage from './components/pages/LoginPage';
import MyProfilePage from './components/pages/MyProfilePage';
import GroupPage from './components/pages/GroupPage';
import ProjectPage from './components/pages/ProjectPage';
import ProjectEnrollmentPage from './components/pages/ProjectEnrollmentPage';
import ContainorEnrollmentPage from './components/pages/ContainorEnrollmentPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 공통 레이아웃 */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/group" element={<GroupEnrollmentPage />} />
          <Route path="/group/:groupId" element={<GroupPage />} />
          <Route
            path="/group/:groupId/project"
            element={<ProjectEnrollmentPage />}
          />
          <Route
            path="/group/:groupId/project/:projectId"
            element={<ProjectPage />}
          />
          <Route
            path="/group/:groupId/project/:projectId/containor"
            element={<ContainorEnrollmentPage />}
          />
        </Route>

        {/* 단독 레이아웃 */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
        {/* <Route path="/test" element={<Test />} /> */}
        {/* <Route path="*" element={<NonFoundClientError />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
