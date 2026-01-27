import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./features/marketing/pages/HomePage.jsx";
import AboutUsPage from "./features/marketing/pages/AboutUsPage.jsx";
import SolutionsPage from "./features/marketing/pages/SolutionsPage.jsx";
import ImpactPage from "./features/marketing/pages/ImpactPage.jsx";
import CommunityPage from "./features/marketing/pages/CommunityPage.jsx";
import TalentsPage from "./features/marketing/pages/TalentsPage.jsx";
import ContributorsPage from "./features/marketing/pages/ContributorsPage.jsx";
import ContactPage from "./features/marketing/pages/ContactPage.jsx";

// ScrollToTop component to handle scroll on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/community" element={<Navigate to="/community/talents" replace />} />
        <Route path="/community/talents" element={<TalentsPage />} />
        <Route path="/community/contributors" element={<ContributorsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

