import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import {
//   AboutUs,
//   FAQ,
//   Home,
//   // Jobs,
//   Blogs,
//   BlogDetail,
//   Login,
//   Register,
//   Profile,

// } from './pages';

import { useStateContext } from './context/ContextProvider';
import AuthState from './context/Auth/AuthState';


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


        <Router>
          <Routes>
            {/* dashboard  */}
            {/* <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog-detail" element={<BlogDetail />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/faq" element={<FAQ />} />
            <Route path="/aboutus" element={<AboutUs />} />

            <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </Router>
      </AuthState>
    </ApolloProvider>
  );
};

export default App;
