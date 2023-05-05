import React from "react";
import { Link } from 'react-router-dom';
import Intern1 from '../../assets/undraw_team_spirit_re_yl1v.svg';
import Intern2 from '../../assets/undraw_job_hunt_re_q203.svg';
import Intern3 from '../../assets/undraw_studying_re_deca.svg';

import { FaArrowRight } from 'react-icons/fa';

const InternshipCard = () => {
  return (

    <div className="relative py-24">
      <div className="container relative m-auto px-6 text-gray-500 md:px-12">
        <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
          <div className="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <img
              className="mx-auto w-24"
              src={Intern1}
              alt="illustration"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Web development</h3>
            <p>
              Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam
              tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
            </p>
            <Link
              to="/internship/abacadaba"
              className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125"
            >
              <FaArrowRight className="text-primary" />
            </Link>
          </div>
          <div className="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <img
              className="mx-auto w-24"
              src={Intern2}
              alt="illustration"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Seo</h3>
            <p>
              Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam
              tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
            </p>

            <Link
              to="/internship/abacadaba"
              className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125"
            >
              <FaArrowRight className="text-primary" />
            </Link>
          </div>
          <div className="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <img
              className="mx-auto w-24"
              src={Intern3}
              alt="illustration"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Web Design</h3>
            <p>
              Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam
              tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
            </p>
            <Link
              to="/internship/abacadaba"
              className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125"
            >
              <FaArrowRight className="text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default InternshipCard;
