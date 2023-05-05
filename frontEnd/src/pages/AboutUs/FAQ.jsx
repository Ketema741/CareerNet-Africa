import React, { useEffect } from 'react';
import { Navbar, Footer, Sidebar } from '../../components';
import FAQCard from './FAQCard';
import { useStateContext } from '../../context/ContextProvider';
import FAQAnswers from '../../assets/undraw_questions_re_1fy7.svg'

const FAQ = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  // const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div className="w-52 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-52 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          <div className="mt-16 ">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12 lg:w-5/12">
                  <img
                    src={FAQAnswers}
                    alt="image"
                    loading="lazy"
                    width=""
                    height=""
                  />
                </div>
                <div className="md:7/12 lg:w-6/12">
                  
                  <div className="mt-6 ">
                    <FAQCard />
                  </div>
                  <p className="mt-4 p-8 text-gray-600">
                    Thank you for choosing CareerNet Africa 
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>

  );
};
export default FAQ;
