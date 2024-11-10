
"use client"

import Image from "next/image";
import { FaUserGraduate } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";





export default function Home() {



  return (
   
    <>
<main className="main">
  <section className="section">
    {/* <!-- Left Section --> */}
    <div className="left">
      <h6 className="heading">Join Us</h6>
      <h1 className="heading info">25K+ STUDENTS TRUST US</h1>
      <p className="heading line">
        Everyday brings with it a fresh set of learning possibilities.
      </p>
    </div>

  
    <div className="container">
      <div className="content">
        <Image src="/father.jpg" width={200} height={300} alt="father" className="image" />
      </div>
    </div>
  </section>

  {/* footer */}
  <div className="footer-container">
    <div className="footer-box">
    <FaUserGraduate />
      <h1>About Us</h1>
      <p>We are a leading school providing quality education.</p>
    </div>
    <div className="footer-box">
    <CiEdit />
      <h1>Contact</h1>
      <p>Contact us for more details on our programs.</p>
    </div>
    <div className="footer-box">
    <CiEdit />
      <h1>Follow Us</h1>
      <p>Follow us on social media to stay updated.</p>
    </div>
  </div>
</main>

    </>
  );

}