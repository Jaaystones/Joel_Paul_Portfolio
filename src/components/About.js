import React from "react";

const About = () => {
  return (
    <div className="bg-[#000] w-[100%]" id="about">
      <h1 className="text-white text-[60px] font-bold text-center pt-[100px] md:pb-[30px] px-[20px] md:text-left">
        About
      </h1>
      <div className="flex flex-row p-[70px] lg:flex-col md:p-[20px] ">
        <div className="w-[50%] lg:w-[100%]  lg:flex lg:justify-center">
          <div className="bg-[#0a0a0a] h-[420px] w-[420px]  rounded-lg shadow-2xl flex justify-center overflow-hidden hover:scale-[1.05] ease-in duration-500">
            <img
              src="/images/Portfolio.jpg"
              alt="wens"
              className="h-[100%] w-[120%] rounded-lg shadow-2xl hover:scale-[1.05] ease-in duration-500 md:w-[100%]"
            />
          </div>
        </div>
        <div className="w-[50%] bg-[#0a0a0a] p-[20px] flex flex-col rounded-lg shadow-2xl lg:w-[100%]  lg:flex lg:justify-center md:mb-[100px] lg:mt-[40px] md:p-[20px] md:px-[20px]">
          <p className="text-[18px] text-white">
              Welcome to my portfolio! I'm Paul Joel, a confident and passionate Back-End Developer/DevOps specialist with experience in developing robust applications that meet clients' needs. 
            <br />
            <br />
              I possess a strong skill set in JavaScript, Node.js, Express.js, Redux-tool-kit, Ruby on Rails, cloud computing, and database design and management.
            <br />
            <br />
                My main focus is on building APIs that deliver responsive, high-performance, and seamlessly integrated web applications, providing exceptional user experiences. 
                As an fast learner in a competetive environment, I am committed to staying up-to-date with industry trends and continuously improving my skills.
            <br />
            <br />
                I am passionate about creating robust api and cloud solutions to meet business goals
                I'm also very good with relational and no SQl Databases like MySQl, postgreSQl and MongoDB.
          </p>
          <button className="btn">
            <a
              href="https://drive.google.com/file/d/1AxpiMcTAFWphlw-jVQhka7clnLk-sjp1/view?usp=sharing"
              target="_blank"
            >
              View Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
