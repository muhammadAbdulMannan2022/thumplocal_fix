import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/layout/Layout";
import PrivacyPolicy from "./pages/PrivacyPage";
import Login, {
  LoginForm,
  ForgotForm,
  CodeForm,
  SentInfo,
} from "./components/Login_Registration/Login";
import ResetPassword from "./components/Login_Registration/ResetPassword";
import ResetSuccess from "./components/Login_Registration/ResetSuccess";
import Register from "./components/Login_Registration/Register";
import Dashboard from "./pages/Dashboard";
import WebSolutionLayout from "./components/dashboard/WebSolution/WebSolutionLayout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />}>
            <Route index element={<LoginForm />} />
            <Route path="forgot" element={<ForgotForm />} />
            <Route path="code" element={<CodeForm />} />
            <Route path="reset" element={<ResetPassword />} />
            <Route path="reset-success" element={<ResetSuccess />} />
            <Route path="sent" element={<SentInfo />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="web-solution" element={<WebSolutionLayout />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
