import React from 'react';
import { useStateContext } from '../../context/ContextProvider';
import knowledge from '../../assets/undraw_road_to_knowledge_m8s0.svg'
import assi from '../../assets/undraw_virtual_assistant_jjo2.svg'
import learn from '../../assets/undraw_online_learning_re_qw08.svg'

const JobCard = ({ post }) => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-24 container px-5 mx-auto">
      {/* demo shit start here */}
      <div className="py-16">
        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
          <div className="grid gap-6 lg:grid-cols-7">
            <div className="lg:col-span-3">
              <div className="space-y-4 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8">
                <img
                  src={knowledge}
                  alt="illustration"
                  loading="lazy"
                  width="900"
                  height="600"
                />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Web development</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur
                  ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
                </p>
                <a href="#" className="block font-medium text-primary">Know more</a>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="space-y-4 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8">
                <img
                  src={knowledge}
                  alt="illustration"
                  loading="lazy"
                  width="900"
                  height="600"
                />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Web development</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur
                  ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
                </p>
                <a href="#" className="block font-medium text-primary">Know more</a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div
                className="flex h-full flex-col justify-between rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8"
              >
                <div className="mb-6 space-y-4">
                  <img
                    src={assi}
                    alt="illustration"
                    loading="lazy"
                    width="616"
                    height="400"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Web development mentoring.</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur
                    ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
                  </p>
                </div>
                <a href="#" className="block font-medium text-primary">Know more</a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div
                className="flex h-full flex-col justify-between rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8"
              >
                <div className="mb-6 space-y-4">
                  <img
                    src={learn}
                    alt="illustration"
                    loading="lazy"
                    width="675"
                    height="450"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Web development training</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur
                    ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
                  </p>
                </div>
                <a href="#" className="block font-medium text-primary">Know more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
