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
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15665.831395124425!2d76.99885565!3d11.00423425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1713258802978!5m2!1sen!2sin"
          // width="1000"
          className="w-full outline-none"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
