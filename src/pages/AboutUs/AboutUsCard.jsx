import React from "react";
import TeamSpirit from '../../brands/undraw_team_spirit_re_yl1v.svg'



const AboutUsCard = () => {
  return (
    <div className="mt-16 ">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src={TeamSpirit}
              alt="image"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              CareerNet Africa is carried out by passionate
              developers
            </h2>
            <p className="mt-6 text-gray-600 text-base">
             Welcome to CareerNet Africa, a platform built to help students and young professionals build their career in Africa.

At CareerNet Africa, we believe that everyone deserves the opportunity to pursue their dreams and achieve their full potential. That's why we've built a platform that connects students with the resources they need to succeed, whether that's finding the right job, gaining new skills, or getting advice and mentorship from experienced professionals.

Our platform is designed to be easy to use and accessible to everyone, regardless of their background or experience level. We offer a range of resources and tools, including job postings, internships, career advice, mentorship programs, and industry insights, all aimed at helping students and young professionals build the skills and knowledge they need to succeed in their chosen career path.

But CareerNet Africa is more than just a platform – it's a community. We're proud to bring together students, professionals, and organizations from across Africa to create a network of support and opportunity. Our community is driven by a shared passion for building a better future for ourselves and our continent, and we're constantly working to make CareerNet Africa the go-to platform for career development in Africa.

Whether you're just starting out in your career or looking to take the next step, CareerNet Africa is here to help. Join us today and start building the career of your dreams!

            </p>
            <p className="mt-4 text-gray-600">
              Thank you for choosing CareerNet Africa 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
