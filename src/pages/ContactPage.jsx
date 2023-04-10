import React from 'react';
function ContactPage() {
  return (
    <div className="font-patrick-hand">
      <div className="flex  flex-col text-center container items-center mx-auto px-10">
        <div className=" text-3xl flex justify-center ">Contact Us</div>
        <div className=" flex flex-row justify-center gap-32 mt-24 ">
          <div>
            VISIT US
            <div className="flex flex-col mt-10">
              <div>500 Terry Francois St.</div>
              <div>San Francisco, CA 94158</div>
              <div>123-456-7890</div>
            </div>
          </div>
          <div>
            OPENING HOURS
            <div className="flex flex-col mt-10">
              <div>Mon - Fri: 7am - 10pm</div>
              <div>Saturday: 8am - 10pm</div>
              <div>Sunday: 8am - 11pm</div>
            </div>
          </div>
          <div>
            CUSTOMER SERVICE
            <div className="flex flex-col mt-10">
              <div>1-800-000-000</div>
              <div>123-456-7890</div>
              <div>info@mysite.com</div>
            </div>
          </div>
        </div>
        <p className="mt-28">FOR ANY QUESTIONS, PLEASE SEND US A MESSAGE</p>
      </div>
      <form className="flex flex-col items-center mt-10">
        <div className="flex flex-row justify-center w-3/4 gap-x-12">
          <label className="grid grid-cols-1 mb-2  w-full  text-gray-900 ">
            Frist Name
            <input
              type="text"
              className="h-10  border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            ></input>
          </label>
          <label className="grid grid-cols-1 mb-2  w-full  text-gray-900 ">
            Last Name
            <input
              type="text"
              className="h-10 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            ></input>
          </label>
        </div>
        <div className="flex flex-col  w-3/4 ">
          <label className="grid grid-cols-1 mb-2  text-gray-900 ">
            Email*
            <input
              required
              type="text"
              className="h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            ></input>
          </label>
          <label className="grid grid-cols-1 mb-2  text-gray-900 ">
            Subject
            <input
              type="text"
              className="h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            ></input>
          </label>
          <label className="grid grid-cols-1 mb-2   text-gray-900 ">
            Meassge
            <input
              type="text"
              className="h-32  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            ></input>
          </label>
          <label className="flex justify-center">
            <button type="submit" className="hover:text-red-600 w-24 ">
              Submit
            </button>
          </label>
        </div>
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.3456854015576!2d100.56808251478134!3d13.938011090227162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e283b5dd25531f%3A0x17b0899e7d6c3614!2z4Lir4LiZ4LmI4Lin4Lii4Lia4Lix4LiN4LiK4Liy4LiB4Liy4Lij4LiX4Lir4Liy4Lij4Lie4Lix4LiS4LiZ4Liy!5e0!3m2!1sth!2sth!4v1680700125570!5m2!1sth!2sth&showStreetView=true"
        width="600"
        height="450"
        className="w-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default ContactPage;
