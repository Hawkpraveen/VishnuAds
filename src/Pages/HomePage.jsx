import { Accordion, Card } from "flowbite-react";
import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* hero section */}
      <div className="hero-section w-full  bg-transparent mb-10">
        <div className="w-full sm:w-2/3  items-center h-full sm:px-40 sm:py-52 hero-text flex flex-wrap">
          <h1 className=" font-semibold text-xl sm:text-3xl text-neutral-100 ">
            Learn Digital Marketing <br />
            with us
          </h1>
          <p className="mt-2  font-medium  flex-wrap ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            consequatur laboriosam id neque minima repellat dicta beatae debitis
            voluptatibus asperiores animi temporibus, ut adipisci nihil laborum
            iure, distinctio suscipit voluptates.
          </p>
          <button className="border-2 bg-opacity-40 bg-black rounded-lg p-3 mt-4 text-white mx-auto w-fit sm:mx-0 ">
            Explore More
          </button>
        </div>
      </div>
      {/* Feature Section */}
      <div className=" mb-16 flex flex-wrap gap-3  justify-center items-center w-full ">
        <h1 className="text-3xl font-semibold mb-3 flex justify-center w-full">
          Who can Apply !?
        </h1>
        <Card className="w-fit h-1/3  hover:scale-105 hover:transition">
          <img
            src="public\student.jpg"
            alt=""
            className="rounded-lg h-52 w-72"
          />
          <h2 className="text-xl font-medium mx-auto">Students</h2>
        </Card>
        <Card className="w-fit h-1/3 hover:scale-105 hover:transition">
          <img src="public\img2.webp" alt="" className="rounded-lg w-72 h-52" />
          <h2 className="text-xl font-medium mx-auto">Entrepreneurs</h2>
        </Card>
        <Card className="w-fit h-1/3 hover:scale-105 hover:transition">
          <img src="public\img3.png" alt="" className="rounded-lg w-72 h-52" />
          <h2 className="text-xl font-medium mx-auto">free lancers</h2>
        </Card>
        <Card className="w-fit h-1/3 hover:scale-105 hover:transition">
          <img src="public\img4.jpg" alt="" className="rounded-lg w-72 h-52" />
          <h2 className="text-xl font-medium mx-auto">job seekers</h2>
        </Card>
      </div>
      {/* syllabus section */}
      <div className=" w-full flex-wrap sub-hero opacity-80 ">
        <h1 className="text-xl font-bold  text-ellipsis sm:text-3xl sm:ms-96 mt-20 pt-20 w-full mb-3">
          Become a ceritified Digital Marketer
        </h1>
        <p className="text-md sm:text-xl font-bold  text-center w-full pb-5 ">
          Learn concepts such as:
        </p>
        <ul className="text-md sm:text-xl font-bold  text-center w-full pb-5 ">
          <li className="p-2">
            <img src="public\sem.png" alt="" className="w-7 h-6 inline mr-3 " />
            SEM
          </li>
          <li className="p-2">
            <img src="public\seo.avif" alt="" className="w-6 h-6 inline mr-3" />
            SEO
          </li>
          <li className="p-2">
            <img src="public\smm.jpeg" alt="" className="w-7 h-6 inline mr-4" />
            SMM
          </li>
          <li className="p-2">
            <img
              src="public\email.jpg"
              alt=""
              className="w-7 h-6 inline mr-4"
            />
            Email Marketing
          </li>
        </ul>
        <div className="flex items-center justify-center">
          <button className="border-2 bg-black opacity-60 text-white rounded-lg px-10 py-2 hover:scale-110 transition">
            Download Syllabus
          </button>
        </div>
      </div>
      {/* courses section */}
      <div className="mt-5 w-full h-fit  flex-wrap p-10 ">
        <h1 className="text-lg sm:text-3xl text-center font-semibold">
          Our Courses
        </h1>
        <p className="mt-10 text-wrap text-center mx-auto font-medium text-md sm:text-lg mb-10">
          Our focus on quality education at every stage ensures 100% success of
          our students that have a road-map
        </p>
        <div className="flex flex-wrap justify-evenly">
          <Card className="w-full  hover:scale-105 hover:transition sm:w-1/4 h-1/2 mb-4">
            <img src="public/ui.webp" alt="" />
            <h1 className="text-center font-medium">UI/UX Desgin</h1>
            <img src="public/star.png" alt="" className="h-5 w-fit mx-auto" />
            <button className="rounded-lg border-2 w-fit mx-auto p-2 px-9 bg-black bg-opacity-70 text-neutral-300">
              {" "}
              Learn More
            </button>
          </Card>
          <Card className="w-full  hover:scale-105 hover:transition sm:w-1/4 h-1/2 mb-4">
            <img src="public/ui.webp" alt="" />
            <h1 className="text-center font-medium">Atificial Intelligence</h1>
            <img src="public/star.png" alt="" className="h-5 w-fit mx-auto" />
            <button className="rounded-lg border-2 w-fit mx-auto p-2 px-9 bg-black bg-opacity-70 text-neutral-300">
              {" "}
              Learn More
            </button>
          </Card>
          <Card className="w-full  hover:scale-105 hover:transition sm:w-1/4 h-1/2 mb-4">
            <img src="public/ui.webp" alt="" />
            <h1 className="text-center font-medium">Bootstrap</h1>
            <img src="public/star.png" alt="" className="h-5 w-fit mx-auto" />
            <button className="rounded-lg border-2 w-fit mx-auto p-2 px-9 bg-black bg-opacity-70 text-neutral-300">
              {" "}
              Learn More
            </button>
          </Card>
        </div>
        <hr className="mt-10  border-2 border-neutral-600" />
      </div>
      {/* offerings section */}
      <div className="w-full h-fit  sm:grid grid-cols-3 flex flex-wrap ">
        <ul className="w-fit sm:ms-36 p-6 py-20">
          <li className="mb-2">
            <span className="dot mr-2 "></span>Lifetime Recordings available
          </li>
          <li className="mb-2">
            <span className="dot mr-2"></span>Lifetime Recordings available
          </li>
          <li className="mb-2">
            <span className="dot mr-2"></span>Lifetime Recordings available
          </li>
          <li className="mb-2">
            <span className="dot mr-2"></span>Lifetime Recordings available
          </li>
          <li className="mb-2">
            <span className="dot mr-2"></span>Lifetime Recordings available
          </li>
        </ul>
        <Card className="flex relative">
          <img src="public/img.jpeg" alt="" className="opacity-70" />
          <div class=" absolute inset-14 flex items-center justify-center sm:absolute sm:inset-0">
            <h2 class="text-3xl font-bold">Our Extensive Offerings</h2>
          </div>
        </Card>
        <ul className="w-fit sm:ms-36 p-6 py-20">
          <li className="mb-2">
            <span className="dot mr-2 "></span>Lifetime Recordings available
          </li>
          <li className="mb-2">
            <span className="dot mr-2"></span>Lifetime Recordings available
          </li>
          <li className="mb-2">
            <span className="dot mr-2"></span>Lifetime Recordings available
          </li>
          <li className="mb-2">
            <span className="dot mr-2"></span>Lifetime Recordings available
          </li>
          <li className="mb-2">
            <span className="dot mr-2"></span>Lifetime Recordings available
          </li>
        </ul>
      </div>
      {/* why section */}
      <div className="sm:flex sm:flex-1 mt-16 w-full h-full mb-10 ">
        <div className="w-10/12 ms-3 sm:ms-0  h-full sm:w-2/3 relative">
          <img
            src="img1.avif"
            alt=""
            className="w-full h-full  sm:rounded-r-3xl opacity-80  mb-4"
          />
          <div class=" absolute inset-14 flex items-center justify-center sm:absolute sm:inset-0">
            <h2 class="text-3xl font-bold capitalize text-white">
              Come join us now
            </h2>
          </div>
        </div>
        <div className="w-full  sm:w-1/2 ms-0 sm:ms-3">
          <h1 className="text-lg sm:text-2xl font-medium">
            Why launch a Carrer in Digital Marketing?
          </h1>
          <p className=" mt-16 mb-16 text-wrap p-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            labore nam velit sit nulla. Molestiae eaque corrupti maxime quaerat
            tempora repudiandae? Cumque ratione maiores totam non saepe sed enim
            tempore.
          </p>
          <div className="flex flex-wrap justify-around gap-20 sm:gap-3 w-full">
            <Card className="w-fit h-fit flex flex-wrap rounded-3xl">
              <li className=" list-none">
                <img
                  src="tick.jpg"
                  alt=""
                  className="w-9 h-9 bg-transparent rounded-full inline mr-2"
                />
                Biggest Community
              </li>
            </Card>
            <Card className="w-fit h-fit flex flex-wrap rounded-3xl">
              <li className=" list-none">
                <img
                  src="tick.jpg"
                  alt=""
                  className="w-9 h-9 bg-transparent rounded-full inline mr-2"
                />
                Dedicated-In-House
              </li>
            </Card>
            <Card className="w-fit h-fit flex flex-wrap rounded-3xl">
              <li className=" list-none">
                <img
                  src="tick.jpg"
                  alt=""
                  className="w-9 h-9 bg-transparent rounded-full inline mr-2"
                />
                Designed And Taught By Experts
              </li>
            </Card>
            <Card className="w-fit h-fit flex flex-wrap rounded-3xl ">
              <li className=" list-none">
                <img
                  src="tick.jpg"
                  alt=""
                  className="w-9 h-9 bg-transparent rounded-full inline mr-2"
                />
                Carrer
              </li>
            </Card>
            <Card className="w-fit h-fit flex flex-wrap rounded-3xl ">
              <li className=" list-none">
                <img
                  src="tick.jpg"
                  alt=""
                  className="w-9 h-9 bg-transparent rounded-full inline mr-2"
                />
                Live Class
              </li>
            </Card>
            <Card className="w-fit h-fit flex flex-wrap rounded-3xl">
              <li className=" list-none">
                <img
                  src="tick.jpg"
                  alt=""
                  className="w-9 h-9 bg-transparent rounded-full inline mr-2"
                />
                Work On Projects
              </li>
            </Card>
            <Card className="w-fit h-fit flex flex-wrap rounded-3xl">
              <li className=" list-none">
                <img
                  src="tick.jpg"
                  alt=""
                  className="w-9 h-9 bg-transparent rounded-full inline mr-2"
                />
                Support
              </li>
            </Card>
          </div>
        </div>
      </div>
      {/* hiring patners */}
      <div className="flex flex-wrap mb-10 w-full">
        <h1 className=" capitalize text-lg sm:text-3xl sm:ms-40 mt-5 mb-10">
          Our Hiring patners
        </h1>

        <marquee direction="right">
          <div className="flex  gap-2 sm:gap-10 ms-5">
            <Card className="w-full h-full sm:h-36 sm:w-48 rounded-xl shadow-2xl shadow-black">
              <img src="kellloggs.webp" alt="" className="w-full h-full" />
            </Card>
            <Card className="w-full h-full sm:h-36 sm:w-48 rounded-xl shadow-2xl shadow-black">
              <img src="pwc.png" alt="" />
            </Card>
            <Card className="w-full h-full sm:h-36 sm:w-48 rounded-xl shadow-2xl shadow-black">
              <img src="hitachi.jpg" alt="" />
            </Card>
            <Card className="w-full h-full sm:h-36 sm:w-48 rounded-xl shadow-2xl shadow-black">
              <img src="infosys.png" alt="" />
            </Card>
            <Card className="w-full h-full sm:h-36 sm:w-48 rounded-xl shadow-2xl shadow-black">
              <img src="honeywell.png" alt="" />
            </Card>
            <Card className="w-full h-full sm:h-36 sm:w-48 rounded-xl shadow-2xl shadow-black">
              <img src="standard.png" alt="" className="" />
            </Card>
          </div>
        </marquee>
      </div>
      {/* review section */}
      <div className=" relative w-full h-full sm:mt-28 ">
        <Card className="w-full sm:w-3/4 h-full sm:h-28 sm:absolute mb-16  left-4 sm:left-40 sm:-mt-10">
          <ul className="flex flex-wrap justify-evenly g-2">
            <li className=" list-none grid grid-cols-2 ">
              <img src="google.png" alt="" className="w-9 h-9 my-auto" />
              <li className="font-medium">
                <p>4.8 </p>
                <p>200+ Reviews</p>
              </li>
            </li>
            <li className=" list-none grid grid-cols-2 ">
              <img src="fb.jpg" alt="" className="w-9 h-9  my-auto" />
              <li className="font-medium">
                <p>4.8 </p>
                <p>200+ Reviews</p>
              </li>
            </li>
            <li className=" list-none grid grid-cols-2 ">
              <img src="map.png" alt="" className="w-12 h-9 my-auto" />
              <li className="font-medium">
                <p>4.8 </p>
                <p>200+ Reviews</p>
              </li>
            </li>
            <li className=" list-none grid grid-cols-2">
              <img src="star.jpg" alt="" className="w-16 h-12 my-auto" />
              <li className="font-medium">
                <p>4.8 </p>
                <p>200+ Reviews</p>
              </li>
            </li>
          </ul>
        </Card>

        <div className="w-full h-full bg-black text-white flex flex-wrap justify-around ">
          <div className="flex flex-wrap  w-full sm:w-1/4 h-full py-32 ">
            <img src="star.png" alt="" className="w-3/4 h-16" />
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ab ad totam rerum odit animi et neque maxime excepturi dolor
              suscipit quidem, nulla voluptate molestias molestiae. Quod
              asperiores inventore distinctio!
            </p>
            <div className="flex mt-7">
              <img src="person1.jpg" alt="" className="w-16 h-16 rounded-lg" />
              <span className="text-lg mt-3 ml-4">Alice</span>
            </div>
          </div>
          <div className="flex flex-wrap w-full sm:w-1/4 h-full py-32 ">
            <img src="star.png" alt="" className="w-3/4 h-16" />
            <p className="mt-5 w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ab ad totam rerum odit animi et neque maxime excepturi dolor
              suscipit quidem, nulla voluptate molestias molestiae. Quod
              asperiores inventore distinctio!
            </p>
            <div className="flex mt-7">
              <img src="person2.jpg" alt="" className="w-16 h-16 rounded-lg" />
              <span className="text-lg mt-3 ml-4">John</span>
            </div>
          </div>
          <div className="flex flex-wrap w-full sm:w-1/4  h-full py-32 ">
            <img src="star.png" alt="" className="w-3/4 h-16" />
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ab ad totam rerum odit animi et neque maxime excepturi dolor
              suscipit quidem, nulla voluptate molestias molestiae. Quod
              asperiores inventore distinctio!
            </p>
            <div className="flex mt-7">
              <img src="person3.jpg" alt="" className="w-16 h-16 rounded-lg" />
              <span className="text-lg mt-3 ml-4">Sara</span>
            </div>
          </div>
        </div>
      </div>
      {/* tution fee section */}
      <div className="relative w-full sm:h-[720px] h-[1500px] ">
        <img
          className=" w-full h-full object-cover"
          src="social.jpg"
          alt="Random image"
        />
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
        <div className="absolute inset-0 flex mt-10 justify-center ">
          <h2 className="text-white text-3xl font-bold">Tuition Fees</h2>
        </div>
        <div className="absolute inset-0 flex mt-40 justify-center flex-wrap w-full h-fit">
          <Card className=" w-fit h-full hover:transition-transform hover:scale-105">
            <h1 className="font-medium text-lg sm:text-2xl">
              Carrer <br /> Transformation
            </h1>
            <p className="font-medium text-lg sm:text-  xl">$350/ Month</p>
            <li>Includes Leranbot Course</li>
            <li>Duration : 3 Months</li>
            <li>Meet your Coach</li>
            <li>Branding Materials</li>
            <button className="border-2 bg-black bg-opacity-60 text-white px-5 p-3 rounded-xl">
              Choose Plan
            </button>
          </Card>
          <Card className=" w-fit h-full py-10 mt-2 sm:-mt-8 hover:transition-transform hover:scale-105">
            <h1 className="font-medium text-lg sm:text-2xl">
              Skill <br />
              Boosting{" "}
            </h1>
            <p className="font-medium text-lg sm:text-  xl">$447/ Month</p>
            <li>Includes Leranbot Course</li>
            <li>Duration : 3 Months</li>
            <li>Meet your Coach</li>
            <li>Branding Materials</li>
            <button className="border-2 bg-black bg-opacity-60 text-white px-5 p-3 rounded-xl">
              Choose Plan
            </button>
          </Card>
          <Card className=" w-fit h-full mt-2 hover:transition-transform hover:scale-105">
            <h1 className="font-medium text-lg sm:text-2xl">
              Professional <br /> Marketing
            </h1>
            <p className="font-medium text-lg sm:text-  xl">$510/ Month</p>
            <li>Includes Leranbot Course</li>
            <li>Duration : 3 Months</li>
            <li>Meet your Coach</li>
            <li>Branding Materials</li>
            <button className="border-2 bg-black bg-opacity-60 text-white px-5 p-3 rounded-xl">
              Choose Plan
            </button>
          </Card>
        </div>
      </div>
      {/* financing options */}
      <div className=" relative w-full h-full mb-40 flex flex-wrap">
        <Card className="w-ful h-full sm:w-3/4  sm:h-fit sm:absolute mb-20  left-4 sm:left-40 sm:-mt-14 rounded-2xl">
          <ul className="flex flex-wrap justify-evenly g-2 w-full h-full">
            <li className=" list-none h-full">
              <div className="border-4 border-dotted rounded-2xl w-52 h-fit p-3">
                <div className="justify-center flex flex-wrap ">
                  <img src="percent.webp" alt="" className="h-7 w-7" />
                </div>
                <h1 className="mt-2 flex justify-center font-medium ">
                  100% UP Front
                </h1>
                <p className="mt-2 flex justify-center text-wrap  text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </li>
            <li className=" list-none h-full">
              <div className="border-4 border-dotted rounded-2xl  w-52 h-fit p-3">
                <div className="justify-center flex flex-wrap ">
                  <img src="defered.webp" alt="" className="h-7 w-7" />
                </div>
                <h1 className="mt-2 flex justify-center font-medium ">
                  Defered Payment
                </h1>
                <p className="mt-2 flex justify-center text-wrap  text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </li>
            <li className=" list-none h-full">
              <div className="border-4 border-dotted rounded-2xl w-52 h-fit p-3">
                <div className="justify-center flex flex-wrap ">
                  <img src="scholar.png" alt="" className="h-7 w-7" />
                </div>
                <h1 className="mt-2 flex justify-center font-medium ">
                  Study Now Pay Later
                </h1>
                <p className="mt-2 flex justify-center text-wrap  text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </li>
            <li className=" list-none h-full">
              <div className="border-4 border-dotted rounded-2xl w-52 h-fit p-3">
                <div className="justify-center flex flex-wrap ">
                  <img src="sale.jpg" alt="" className="h-7 w-7" />
                </div>
                <h1 className="mt-2 flex justify-center font-medium ">
                  Study Now Pay Later
                </h1>
                <p className="mt-2 flex justify-center text-wrap  text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </li>
          </ul>
        </Card>
      </div>
      {/* Flexible section */}
      <div className="w-2/3 mx-auto h-fit p-5 border-4 border-dotted rounded-2xl border-gray-500 mt-60 mb-20">
        <h1 className="flex justify-center font-semibold text-lg md:text-2xl">
          Flexible Financing Options
        </h1>
        <p className="justify-center flex mt-5 font-medium">
          Want more infomation about tuition & financing in your area? Our
          admission team is here to help you
        </p>
        <div className="justify-center flex mt-5">
          <button className="border-2 bg-black text-lg md:text-xl text-white p-4 rounded-3xl px-10 mx-auto">
            Contact Admission
          </button>
        </div>
      </div>
      {/* faq section */}
      <div className="flex flex-1 mx-auto w-full flex-wrap mb-10">
        <div className="md:w-1/3 mx-auto w-full p-5">
          <h1 className="font-semibold text-lg md:text-3xl mb-5">
            Frequently Asked Questions
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            maxime perspiciatis soluta dignissimos quisquam, enim excepturi
            cumque, architecto, necessitatibus ad saepe porro sapiente?
            Dignissimos, similique iste architecto et placeat commodi.
          </p>
          <div className="mt-5 flex md:ms-10 ms-3">
            <button className="border-2 hover:bg-black hover:text-white rounded-3xl p-3 px-10 border-black">
              View All Questions
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full md:me-10 p-5">
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>
                Why Are Digiatal Marketing Relevant Today?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus iste eligendi dignissimos. Adipisci reprehenderit
                  dignissimos molestias! Sapiente sequi, magni deleniti alias
                  facilis voluptate facere hic odit iure quo repudiandae quae!
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                How Advance is the Digital Marketing Course?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam similique maiores, perferendis, autem quae fugit
                  consequuntur aliquid minus voluptates facere alias? Impedit,
                  autem ullam? Voluptatum minus sunt consequatur excepturi
                  corrupti?
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                What are the payment options do we offer?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti recusandae accusantium cupiditate, officiis minus
                  velit perferendis ut nihil sit odio commodi earum excepturi
                  molestiae nisi molestias incidunt atque asperiores quis.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                What kind of projects will I work on ?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti recusandae accusantium cupiditate, officiis minus
                  velit perferendis ut nihil sit odio commodi earum excepturi
                  molestiae nisi molestias incidunt atque asperiores quis.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
      {/* contact section */}
      <div className="flex flex-wrap flex-1 mx-auto mb-10 bg-black text-white w-10/12 rounded-3xl">
        <div className="md:w-1/3 mx-auto w-full p-5 border-r-2">
          <h1 className="text-lg md:text-xl">
            Ready to Take your Internet Marketing to the next Level?
          </h1>
          <p className="mt-5 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            dolorum magnam praesentium autem corporis fugiat obcaecati dicta,
            porro a iure, ex earum quisquam soluta cupiditate. Repudiandae
            assumenda error ducimus saepe.
          </p>
          <div className="mt-10 ms-10">
            <img
              src="whatsapp.png"
              alt=""
              className="bg-white w-10 h-10 rounded-2xl inline mr-5"
            />
            +91 123-456-7890
          </div>
          <div className="mt-5 ms-10">
            <img
              src="emaillogo.jpg"
              alt=""
              className="bg-white w-10 h-10 rounded-2xl inline mr-5"
            />
            abcd@gmail.com
          </div>
        </div>
        <div className="md:w-1/2 w-full md:me-10 p-5">
          <h1 className="font-medium text-lg md:text-2xl">
            Take the New Step Now!
          </h1>
          <div className="mt-5 w-full flex flex-wrap">
            <label htmlFor="name">Name </label>
            <input
              type="text"
              className=" bg-red-950  rounded-3xl ml-2 md:ml-24 md:px-20"
            />
          </div>
          <div className="mt-10 w-full flex flex-wrap">
            <label htmlFor="email">E-Mail </label>
            <input
              type="text"
              className=" bg-red-950  rounded-3xl ml-2 md:ml-24 md:px-20"
            />
          </div>
          <div className="mt-10 w-full flex flex-wrap">
            <label htmlFor="message">Your Message </label>
            <textarea
              rows={4}
              className=" bg-red-950  rounded-3xl ml-2 md:ml-12 md:px-20"
            />
          </div>
          <div className="flex justify-center mt-8">
            <button className="border-2 bg-red-950 p-3 px-12 rounded-2xl ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
