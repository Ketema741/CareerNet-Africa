import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import {
  AboutUs,
  FAQ,
  Home,
  JobPage,
  JobDetail,
  Blogs,
  BlogDetail,
  Login,
  Register,
  Profile,
  Scheduler
} from './pages';

import { useStateContext } from './context/ContextProvider';
import AuthState from './context/Auth/AuthState';
import BlogState from './context/blog/BlogState';


import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clghli57o1ujs01t3066xd2lw/master",
  cache: new InMemoryCache()
});

const App = () => {
  const { setCurrentColor, setCurrentMode } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <AuthState>
        <BlogState>

          <Router>
            <Routes>
              {/* dashboard  */}
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:blogId" element={<BlogDetail />} />
              <Route path="/jobs" element={<JobPage />} />
              <Route path="/job/:jobId" element={<JobDetail />} />

              <Route path="/scheduler" element={<Scheduler />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route path="/faq" element={<FAQ />} />
              <Route path="/aboutus" element={<AboutUs />} />

              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
        </BlogState>
      </AuthState>
    </ApolloProvider>
  );
};

export default App;
