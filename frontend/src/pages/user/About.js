import React from "react";
import ceoImg from "../../assets/ceo1.jpg";

export default function About() {
  return (
    <div className="my-5">
      <div className="w-full flex items-center justify-center">
        <img className="w-[150px] rounded-full " src={ceoImg} alt="ceoImg" />
      </div>

      <p className="text-center text-[16px] colorsecondary font-semibold py-5">
        Message from the CEO
      </p>

      <div className=" w-full  px-5 sm:px-10 md:px-32 flex items-center justify-center mb-5 mt-5">
        <div className="Aglass p-3 md:p-10 ">
          <div className="colorprimary font-han   text-center mb-4 heading-size">
            Welcome to Mithra Beds and Sofas.
          </div>
          <p className=" font-han my-3 leading-8 sm:leading-10 sm:text-[18px] ">
            I am Mrs. Malini, the proud CEO of Mithra Enterprises and the
            visionary behind Mithra Beds and Sofas. With a background as a
            Masters-qualified Physician Assistant and over a decade of
            experience assisting cardiac surgeons in top-tier heart care
            hospitals, I transitioned into the business world, driven by a
            passion for innovation and sustainability. During this time, I also
            earned a Master’s in Business Administration with a specialization
            in Operations Management.
          </p>
          <p className=" font-han my-3 leading-8 sm:leading-10 sm:text-[18px] ">
            My journey into entrepreneurship began in February 2018, fueled by a
            strong desire to create products that are both eco-friendly and
            beneficial for our health. After years in the medical field, I
            realized the importance of the materials we surround ourselves with
            daily. I was particularly struck by the lack of transparency in the
            mattress industry, where many products are chemically treated,
            offering little information about their manufacturing processes.
            This concern led me to question how we can spend nearly a third of
            our lives on mattresses without knowing their impact on our health
            and the environment.
          </p>
          <p className=" my-3 font-han leading-8 sm:leading-10 sm:text-[18px] ">
            This realization inspired the foundation of Mithra Beds and Sofas.
            Our mission is to thoughtfully craft mattresses and sofas that
            prioritize both your well-being and the planet. We are committed to
            using natural, sustainable materials, ensuring that our products
            provide comfort and peace of mind.
          </p>
          <p className="colorsecondar text-center  font-han my-5 leading-8 sm:leading-10 sm:text-[18px] ">
            Thank you for joining us on this journey towards a healthier, more
            sustainable future...
          </p>
          {/* <p className="colorsecondary my-3 leading-8 sm:leading-10 sm:text-[18px] ">
            What sets us apart is our commitment to using 100% organic cotton
            sourced directly from farmers who receive fair prices for their
            yields, allowing them to avoid pesticides, GMOs, and associated
            health hazards. We are transforming a historically exploitative
            bedding industry through ethical sourcing, eco-friendly practices,
            and transparent processes.
          </p>
          <p className="colorsecondary my-3 leading-8 sm:leading-10 sm:text-[18px] ">
            If you're going to spend a one third of your lifetime in bed, you
            deserve to know exactly what your mattress is made of. Trust Mithra
            Enterprises, the leading mattress company in Coimbatore, to provide
            the quality, sustainability, and customer-centric approach you've
            been dreaming of for your sleep sanctuary.
          </p> */}
        </div>
      </div>
    </div>
  );
}
