import React from "react";
export default function Map() {
  return (
    <div className="px-5 sm:px-10 md:px-32 my-10">
      <h2 className="colorprimary text-center mb-5 mt-3 heading-size">
        Find My Way
      </h2>

      <div className="w-full  flex items-center justify-center">
       
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.541313892969!2d77.01028447488582!3d10.997953189164608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857456ee859d9%3A0x1ce79523053a6ee4!2smithra%20enterprises%20mithra%20beds%20and%20sofas!5e0!3m2!1sen!2sin!4v1715576866968!5m2!1sen!2sin"
          // width="1000"
          className="w-full outline-none"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
