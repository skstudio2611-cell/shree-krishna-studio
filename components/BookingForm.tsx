"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingForm() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    event: "",
    date: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    try {

      const response = await fetch("/api/contact", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),

      });


      const data = await response.json();


      if (data.success) {


        const whatsappMessage = `
📸 *New Booking Request*

👤 Name: ${formData.name}

📞 Phone: ${formData.phone}

📧 Email: ${formData.email}

🎉 Event: ${formData.event}

📅 Date: ${formData.date}

📝 Message:
${formData.message}
`;


        window.open(
          `https://wa.me/918849684475?text=${encodeURIComponent(
            whatsappMessage
          )}`,
          "_blank"
        );


        setSuccess(true);


        setTimeout(() => {

          setSuccess(false);

        }, 3000);



        setFormData({

          name: "",
          phone: "",
          email: "",
          event: "",
          date: "",
          message: "",

        });


      } else {


        alert("❌ Failed to send booking request.");

      }


    } catch (error) {

      console.error(error);

      alert("❌ Server Error.");

    }

  };



  return (

    <section
      id="booking"
      className="py-24 bg-[#0a0a0a] text-white relative"
    >


      {success && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">


          <div className="bg-[#111] border border-green-400 rounded-3xl p-10 text-center shadow-2xl max-w-md mx-6">


            <div className="text-6xl mb-5 animate-bounce">
              ✅
            </div>


            <h2 className="text-3xl font-bold text-green-400">
              Thank You!
            </h2>


            <p className="text-white mt-4 text-lg">
              Your booking request has been sent successfully.
            </p>


            <p className="text-gray-400 mt-2">
              We will contact you shortly.
            </p>


          </div>


        </div>

      )}



      <div className="max-w-7xl mx-auto px-6">


        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
          viewport={{once:true}}
          className="text-center mb-16"
        >


          <h2 className="text-5xl font-bold">

            Book Your

            <span className="text-green-400">
              {" "}Wedding Shoot
            </span>

          </h2>


          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Fill out the form below and we'll contact you shortly.
          </p>


        </motion.div>
                <motion.form

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

          viewport={{ once: true }}

          onSubmit={handleSubmit}

          className="grid md:grid-cols-2 gap-6"

        >


          <input

            type="text"

            name="name"

            placeholder="Full Name"

            required

            value={formData.name}

            onChange={handleChange}

            className="bg-[#151515] p-4 rounded-xl outline-none border border-gray-700 focus:border-green-400"

          />



          <input

            type="tel"

            name="phone"

            placeholder="Mobile Number"

            required

            value={formData.phone}

            onChange={handleChange}

            className="bg-[#151515] p-4 rounded-xl outline-none border border-gray-700 focus:border-green-400"

          />



          <input

            type="email"

            name="email"

            placeholder="Email Address"

            value={formData.email}

            onChange={handleChange}

            className="bg-[#151515] p-4 rounded-xl outline-none border border-gray-700 focus:border-green-400"

          />



          <select

            name="event"

            required

            value={formData.event}

            onChange={handleChange}

            className="bg-[#151515] p-4 rounded-xl outline-none border border-gray-700 focus:border-green-400"

          >

            <option value="">
              Select Event
            </option>

            <option>
              Wedding
            </option>

            <option>
              Pre Wedding
            </option>

            <option>
              Engagement
            </option>

            <option>
              Birthday
            </option>

            <option>
              Reception
            </option>

            <option>
              Other
            </option>


          </select>




          <input

            type="date"

            name="date"

            required

            value={formData.date}

            onChange={handleChange}

            className="bg-[#151515] p-4 rounded-xl outline-none border border-gray-700 focus:border-green-400 md:col-span-2"

          />



          <textarea

            name="message"

            rows={6}

            placeholder="Tell us about your event..."

            value={formData.message}

            onChange={handleChange}

            className="bg-[#151515] p-4 rounded-xl outline-none border border-gray-700 focus:border-green-400 md:col-span-2"

          />




          <div className="md:col-span-2 flex justify-center">


            <button

              type="submit"

              className="bg-green-500 hover:bg-green-600 transition-all duration-300 px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-green-500/30"

            >

              Book Now

            </button>


          </div>


        </motion.form>





        <motion.div

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8, delay: 0.2 }}

          viewport={{ once: true }}

          className="grid md:grid-cols-3 gap-6 mt-16"

        >



          <div className="bg-[#151515] rounded-2xl p-8 border border-white/10 text-center hover:border-green-400 transition-all duration-300">


            <h3 className="text-2xl font-bold text-green-400">

              📞 Call

            </h3>


            <p className="mt-4 text-gray-300">

              +91 88496 84475

            </p>


          </div>





          <div className="bg-[#151515] rounded-2xl p-8 border border-white/10 text-center hover:border-green-400 transition-all duration-300">


            <h3 className="text-2xl font-bold text-green-400">

              📧 Email

            </h3>


            <p className="mt-4 text-gray-300 break-all">

              skstudio2611@gmail.com

            </p>


          </div>





          <div className="bg-[#151515] rounded-2xl p-8 border border-white/10 text-center hover:border-green-400 transition-all duration-300">


            <h3 className="text-2xl font-bold text-green-400">

              📍 Location

            </h3>


            <p className="mt-4 text-gray-300">

              Gujarat, India

            </p>


          </div>




        </motion.div>



      </div>


    </section>

  );

}