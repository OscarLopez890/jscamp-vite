import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router";

import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

const SearchPage = lazy(() => import("./pages/Search.jsx"));
const HomePage = lazy(() => import("./pages/Home.jsx"));
const JobDetailPage = lazy(() => import("./pages/Details.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFound.jsx"));
const ContactPage = lazy(() => import("./pages/Contact.jsx"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />

      <Suspense fallback={<div style={{maxWidth:'1280px', margin:'0 auto', padding:'0 1rem'}}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage isLoggedIn={isLoggedIn} />} />
          <Route path="/jobs/:jobId" element={<JobDetailPage isLoggedIn={isLoggedIn} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
