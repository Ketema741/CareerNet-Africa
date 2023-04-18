import React, { useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from '../../components';
import { useStateContext } from '../../context/ContextProvider';
import Ketema from '../../brands/me.png'
import Gatwech from '../../data/avatar3.png'
import AboutUsCard from './AboutUsCard';

const AboutUs = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

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
      <div className=" flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
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
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          {themeSettings && <ThemeSettings />}
          <AboutUsCard />


          <div class="py-20">
            <div class="xl:container mx-auto px-6 md:px-12">
              <div class="mb-16 md:w-2/3 lg:w-1/2">
                <h2 class="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                  CareerNet Africa Developers
                </h2>
                <p class="text-gray-600 dark:text-gray-300">
                  Our web app was built by a team of passionate developers with a mission to empower African students by providing them with career guidance and collaboration opportunities.
                  We believe that with the right resources and support, every student can achieve their full potential and make a positive impact in their community.
                </p>
              </div>
              <div class="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
                  <img
                    class="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    src={Ketema}
                    alt="Ketema"
                    loading="lazy"
                    width="640"
                    height="805"
                  />
                  <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                    <div>
                      <h4 class="text-xl font-semibold dark:text-gray-700 text-white">Ketema Girma</h4>
                      <span class="block text-sm text-gray-500">CEO-Founder</span>
                    </div>
                    <p class="mt-8 text-gray-300 dark:text-gray-600">
                      I am a computer science student with a passion for using technology to make a positive impact in society
                    </p>
                  </div>

                </div>
                <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
                  <img
                    class="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    src={Gatwech}
                    alt="Joseph"
                    loading="lazy"
                    width="640"
                    height="805"
                  />
                  <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                    <div>
                      <h4 class="text-xl font-semibold dark:text-gray-700 text-white">Joseph Birara</h4>
                      <span class="block text-sm text-gray-500">CEO-Founder</span>
                    </div>
                    <p class="mt-8 text-gray-300 dark:text-gray-600">
                      I am a computer science student with a passion for using technology to make a positive impact in society
                    </p>
                  </div>

                </div>
                <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
                  <img
                    class="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    src={Ketema}
                    alt="Fitsum"
                    loading="lazy"
                    width="640"
                    height="805"
                  />
                  <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                    <div>
                      <h4 class="text-xl font-semibold dark:text-gray-700 text-white">Fitsum .</h4>
                      <span class="block text-sm text-gray-500">CEO-Founder</span>
                    </div>
                    <p class="mt-8 text-gray-300 dark:text-gray-600">
                      I am a computer science student with a passion for using technology to make a positive impact in society
                    </p>
                  </div>

                </div>
                <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
                  <img
                    class="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    src={Gatwech}
                    alt="woman"
                    loading="lazy"
                    width="640"
                    height="805"
                  />
                  <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                    <div>
                      <h4 class="text-xl font-semibold dark:text-gray-700 text-white">Dawit Andargache</h4>
                      <span class="block text-sm text-gray-500">CEO-Founder</span>
                    </div>
                    <p class="mt-8 text-gray-300 dark:text-gray-600">
                      I am a computer science student with a passion for using technology to make a positive impact in society
                    </p>
                  </div>

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
export default AboutUs;
