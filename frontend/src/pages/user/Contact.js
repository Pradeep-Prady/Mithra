import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l1ied3c",
        "template_rqd2mme",
        form.current,
        "GIm9L2rMJrBh_7YRG"
      )
      .then(form.current.reset());

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="my-16" id="contact">
      <h2 className="colorprimary text-center mt-3 mb-5 heading-size">
        Contact
      </h2>

      <div className="w-full grid md:grid-cols-2 px-5 sm:px-10 md:px-32">
        <div>
          <h2 className="colorprimary  text-[30px] font-bold">
            EXPERIENCE CENTER NEAR YOU
          </h2>
          <div>
            <h2 className="font-semibold my-2 text-[18px] text-myblue">
              Address
            </h2>
            <p>2001, Trichy road, Opposite Rajalakshmi Mills,</p>
            <p> Near Srivari Trisara Apartment, Coimbatore - 641005</p>
          </div>

          <div>
            <h2 className="font-semibold my-2 text-[18px] text-myblue">
              Mobile
            </h2>
            <p> 9787114111</p>
          </div>

          <div>
            <h2 className="font-semibold my-2 text-[18px] text-myblue">
              Email
            </h2>
            <p> cbe.mithraenterprises@gmail.com</p>
          </div>

          <div>
            <h2 className="font-semibold my-2 text-[18px] text-myblue">
              Support & Enquiry{" "}
            </h2>
            <p> nfo@mithraenterprises.com</p>
          </div>
        </div>

        <div className="my-5">
          <form
            className="bg-[#ffc0cb67   contact-glass rounded-3xl flex flex-col items-center justify-center"
            onSubmit={sendEmail}
            ref={form}
          >
            <div>
              <p className="my-5 text-2xl font-semibold text-myblue">Get In Touch</p>
            </div>
            <div className="w-5/6 sm:w-4/6 my-3 ">
              <h4 className="font-medium text-[17px]">Name</h4>
              <div className="relative w-full mb-3 rounded-sm ">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="user_name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  onFocus={() => setNameFocused(true)}
                  onBlur={() => setNameFocused(false)}
                  className="w-full outline-none rounded-md border-2 border-myrose"
                  style={{
                    padding: "18px 10px",
                    marginTop: "12px",
                  }}
                />
                {/* <label
                  style={{
                    position: "absolute",
                    top: nameFocused || name ? "14px" : "30px",
                    left: "10px",
                    fontSize: nameFocused || name ? "12px" : "16px  ",
                    transition: "all 0.3s ease",
                    pointerEvents: "none",
                  }}
                  for="name"
                >
                  Name
                </label> */}
              </div>

              <h4 className="font-medium text-[17px]">Phone Number</h4>


              <div className="relative w-full mb-3 rounded-sm">
                <input
                  type="numbber"
                  placeholder="Enter your phone number"
                  name="phone"
                  required

                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  onFocus={() => setPhoneFocused(true)}
                  onBlur={() => setPhoneFocused(false)}
                  className="w-full outline-none rounded-md border-2 border-myrose "
                  style={{
                    padding: "18px 10px",
                    marginTop: "12px",
                  }}
                />
                {/* <label
                  style={{
                    position: "absolute",
                    top: phoneFocused || phone ? "14px" : "30px",
                    left: "10px",
                    fontSize: phoneFocused || phone ? "12px" : "16px  ",
                    transition: "all 0.3s ease",
                    pointerEvents: "none",
                  }}
                  for="phone"
                >
                  Phone
                </label> */}
              </div>

              <h4 className="font-medium text-[17px]">Email</h4>

              <div className="relative w-full mb-3 rounded-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  required

                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  className="w-full outline-none rounded-md border-2 border-myrose"
                  style={{
                    padding: "18px 10px",
                    marginTop: "12px",
                  }}
                />
                {/* <label
                  style={{
                    position: "absolute",
                    top: emailFocused || email ? "14px" : "30px",
                    left: "10px",
                    fontSize: emailFocused || email ? "12px" : "16px  ",
                    transition: "all 0.3s ease",
                    pointerEvents: "none",
                  }}
                  for="phone"
                >
                  Email
                </label> */}
              </div>

              <h4 className="font-medium text-[17px]  ">Message</h4>


              <div className="relative w-full mb-3 rounded-sm ">
                <textarea
                  type="numbber"
                  placeholder="Enter your message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  required

                  onFocus={() => setMessageFocused(true)}
                  onBlur={() => setMessageFocused(false)}
                  className="w-full outline-none rounded-md border-2  border-myrose"
                  name="message"
                  htmlFor="text"
                  rows={4}
                  style={{
                    padding: "18px 10px",
                    marginTop: "12px",
                    resize: "none",
                  }}
                ></textarea>
                {/* <label
                  style={{
                    position: "absolute",
                    top: messageFocused || message ? "14px" : "30px",
                    left: "10px",
                    fontSize: messageFocused || message ? "12px" : "16px  ",
                    transition: "all 0.3s ease",
                    pointerEvents: "none",
                  }}
                  for="phone"
                >
                  Message
                </label> */}
              </div>
              {/*  */}

              {/* <div class="relative">
                <input
                  type="text"
                  id="floating_outlined"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 bg-white  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  name="user_name"
                  placeholder=""
                />
                <label
                  for="floating_outlined"
                  class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Name
                </label>
              </div> */}
            </div>
            {/* <div className="w-4/6 my-3">
              <input
                className="w-full rounded-md outline-none px-3 py-3"
                type="number"
                name="phone"
                placeholder="Phone"
              />
            </div> */}
            {/* <div className="w-4/6 my-3">
              <input
                className="w-full rounded-md outline-none px-3 py-3"
                type="email"
                name="email"
                htmlFor="email"
                placeholder="Email"
              />
            </div> */}
            {/* <div className="w-4/6 my-3">
              <textarea
                className="w-full rounded-md outline-none px-3 py-3"
                type="text"
                name="message"
                htmlFor="text"
                placeholder="Message"
                rows={4}
                style={{ resize: "none" }}
              ></textarea>
            </div> */}

            <div className="w-full flex items-center justify-center my-5">
              <button
                type="submit"
                className="bg-myrose text-white font-semibold w-5/6 sm:w-4/6 text-center py-3 rounded-lg"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
