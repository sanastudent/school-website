 import  "./contact.css"
 

 export default function Contact(){
  return(
    <>
    <main>
        <section className="main">
            <div className="contact-us">
            <h1 >Contact Us</h1>
            <p>We are here to assist you!Please contact us with any question about our school,programs or admitions.</p>
            </div>

            <div className="contact-info">
                <h2>Get in Touch</h2>
                <p><strong>Phone:</strong>0297-841297</p>
                <p><strong>Email:</strong>NpS540@gmail.com</p>
                <p><strong>Address:</strong>Phulkara Road Matli</p>

            </div>
             
             <div className="contact-form">
                <h2>Send a message</h2>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name " required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>

             <div className="school-hours">
                <h2>School Hours</h2>
                <p>Monday - Friday :8AM - 1PM</p>
                <p>Saturday: Closed</p>
                <p>Sunday: Closed</p>
              </div>

            
            <div className="privacy">
                <p>Your information is safe with us.We respect your privacy</p>
            </div> 


        </section>
    </main>
    
    </>
  )



 }