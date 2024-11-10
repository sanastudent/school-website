
import "./about.css"
import Image from "next/image"


export default function About(){
return (

    <>
    <main>
        <section>
         <div className="intro">   
            <Image src="/playing area.jpg" width={300} height={500} alt="progress"/>
            <h1>INTRODUCTION</h1>
            <p> Welcome to NPS, where education meets excellence. 
                Located in Matli, our school has been shaping young minds for over [X] years.</p>
                
           </div>

           <div className="history">
           <Image src="/building.jpg" height={400} width={300} alt="school"/>
            <h1>HISTORY</h1>
            <p>Founded in 2008, Network of public School has a long-standing tradition of fostering academic excellence and personal growth.</p>
            </div>

             <div className="teach">   
             <Image src="/teach.jpg" width={300} height={200} alt="teaching"/>
              <h1>Mission and Vision</h1>
              <p>Our mission is to provide quality education while nurturing creativity, responsibility, and respect in every student. Our vision is
             to create lifelong learners who contribute positively to society.</p>
              </div>

             <div className="facility">
                <Image src="/lab.jpg" width={300} height={200} alt="library"/>
                <h1>FACILITIES</h1>
                <p>Our campus is equipped with state-of-the-art facilities, including science labs, computer centers, a well-stocked 
                library, and a vast sports complex.</p>
             </div>


             <div className="achieve">
             <Image src="/school.jpg" width={500} height={300} alt="School"/>
                <h1>ACHIEVEMENTS & ACCOLADES</h1>
                    <p>We take pride in our academic success, with <span>NPS</span> consistently ranking among the top schools in the region
                     and receiving accolades for [specific achievements].</p>
             </div>
             </section>
    </main>
    </>




)

}