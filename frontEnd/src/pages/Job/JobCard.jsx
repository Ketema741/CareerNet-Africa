import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import knowledge from "../../assets/undraw_road_to_knowledge_m8s0.svg";
import assi from "../../assets/undraw_virtual_assistant_jjo2.svg";
import learn from "../../assets/undraw_online_learning_re_qw08.svg";
import { useNavigate } from "react-router-dom";

const JobCard = ({ post }) => {
  const navigate = useNavigate();
  const handleView = () => {
    // getBlog(blog._id, blog.category)
    navigate(`/job/${"job._id"}`);
  };
  return (
    <div className="mt-24 container px-5 mx-auto">
      {/* demo shit start here */}
      <div className="py-16">
        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
          <div className="grid gap-6 lg:grid-cols-7">
            <div className="lg:col-span-3">
              <div className="space-y-4 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8">
                <img
                  src="https://res.cloudinary.com/dmegiw31y/image/upload/v1681974584/careerNet/web_dev_nsbfd7.png"
                  alt="illustration"
                  loading="lazy"
                  width="900"
                  height="600"
                />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Web development
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  We are seeking a talented web developer to join our team. As a
                  web developer, you will be responsible for designing,
                  developing, and maintaining our company website. Your
                  responsibilities will include working with the marketing team
                  to design and develop website pages that are visually
                  appealing, responsive, and user-friendly.
                </p>
                <button
                  onClick={() => handleView()}
                  type="button"
                  className="block font-medium text-primary"
                >
                  Know more
                </button>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="space-y-4 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8">
                <img
                  src="https://res.cloudinary.com/dmegiw31y/image/upload/v1681974584/careerNet/moblie_dev_hc4sui.png"
                  alt="illustration"
                  loading="lazy"
                  width="900"
                  height="600"
                />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Moblie App development
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  We are looking for a skilled Mobile App Developer to join our
                  team. As a Mobile App Developer, you will be responsible for
                  designing, developing, and maintaining our mobile
                  applications. You will work closely with the product and
                  design teams to create user-friendly and visually appealing
                  mobile apps that meet business objectives.
                </p>
                <button
                  onClick={() => handleView()}
                  type="button"
                  className="block font-medium text-primary"
                >
                  Know more
                </button>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8">
                <div className="mb-6 space-y-4">
                  <img
                    src="https://res.cloudinary.com/dmegiw31y/image/upload/v1681974584/careerNet/ui_image_je0err.jpg"
                    alt="illustration"
                    loading="lazy"
                    width="900"
                    height="600"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    UI/UX Desinger
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We are seeking a talented UI/UX designer to join our team.
                    As a UI/UX designer, you will be responsible for designing
                    and improving user interfaces and experiences across our
                    products. Your responsibilities will include conducting user
                    research, creating wireframes and prototypes, and
                    collaborating with developers to ensure the final product is
                    visually appealing and user-friendly.
                  </p>
                </div>
                <button
                  onClick={() => handleView()}
                  type="button"
                  className="block font-medium text-primary"
                >
                  Know more
                </button>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8">
                <div className="mb-6 space-y-4">
                  <img
                    src="https://res.cloudinary.com/dmegiw31y/image/upload/v1681974585/careerNet/ai_image_tvkbpv.png"
                    alt="illustration"
                    loading="lazy"
                    width="900"
                    height="600"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    AI/ML Engineer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We are seeking a talented AI engineer to join our team. As
                    an AI engineer, you will be responsible for designing and
                    implementing AI solutions to solve complex business
                    problems. Your responsibilities will include developing and
                    implementing machine learning algorithms, collaborating with
                    other engineers and data scientists, and staying up-to-date
                    with the latest AI technologies and trends.
                  </p>
                </div>
                <button
                  onClick={() => handleView()}
                  type="button"
                  className="block font-medium text-primary"
                >
                  Know more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
