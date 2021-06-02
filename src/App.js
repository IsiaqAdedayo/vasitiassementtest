import React, {useState} from 'react';

import Review from "./Review"
import './App.css';
import banner from "./images/banner.png"
import tolujoy from "./images/ToluJoy.png"
import josiah from "./images/Josiah.png"
import ellipse from "./images/ellipse.png"
import adetola from "./images/adetola.png"
import adunoluwa from "./images/adunoluwa.png"
import amos from "./images/amos.png"
import chidi from "./images/chidi.png"
import chisom from "./images/chisom.png"
import emmanuel from "./images/emmanuel.png"
import feyisola from "./images/feyisola.png"
import karen from "./images/karen.png"
import oluchi from "./images/oluchi.png"
import phone from "./images/Phone.png"
import promise from "./images/promise.png"
import temi from "./images/temi.png"
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";




const App = () => {

  const [reviews, setReviews] = useState([
    {
      image: ellipse,
      name: "Joseph Ike",
      location: "Ikeja",
      interaction: "CUSTOMER",
      testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, quidem. Dolorem adipisci distinctio temporibus optio dolore ea! Pariatur, delectus natus officiis accusantium voluptatum obcaecati repudiandae ut voluptas quibusdam cupiditate ipsam!"
    },
    {
      image: adetola,
      name: "Adetola Fashina",
      location: "Ibadan",
      interaction: "CUSTOMER",
      testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, quidem. Dolorem adipisci distinctio temporibus optio dolore ea! Pariatur, delectus natus officiis accusantium voluptatum obcaecati repudiandae ut voluptas quibusdam cupiditate ipsam!"
    },
    {
      image: emmanuel,
      name: "Emmanuel Fayemi",
      location: "Akoka",
      interaction: "CUSTOMER",
      testimonial: "Lorem ipsum, dolor sit  consectetur adipisicing elit. Nemo, quidem. Dolorem adipisci distinctio temporibus optio dolore ea! Pariatur, delectus natus officiis accusantium voluptatum obcaecati repudiandae ut voluptas quibusdam cupiditate ipsam!"
    },
    {
      image: chisom,
      name: "Chisom Obilor",
      location: "Magodo",
      interaction: "VENDOR",
      testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, quidem. Dolorem adipisci distinctio temporibus optio dolore ea! Pariatur, delectus natus officiis accusantium voluptatum obcaecati repudiandae ut voluptas quibusdam cupiditate ipsam!"
    },
    {
      image: adunoluwa,
      name: "Adunoluwa Adeyemi",
      location: "Iwo Road",
      interaction: "VENDOR",
      testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, quidem. Dolorem adipisci distinctio temporibus optio dolore ea! Pariatur, delectus natus officiis accusantium voluptatum obcaecati repudiandae ut voluptas quibusdam cupiditate ipsam!"
    },
    {
      image: chidi,
      name: "Chidi Okeke",
      location: "Somolu",
      interaction: "VENDOR",
      testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, quidem. Dolorem adipisci distinctio temporibus optio dolore ea! Pariatur, delectus natus officiis accusantium voluptatum obcaecati repudiandae ut voluptas quibusdam cupiditate ipsam!"
    },
    {
      image: temi,
      name: "Temi Obadofin",
      location: "",
      interaction: "VENDOR",
      testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, quidem. Dolorem adipisci distinctio temporibus optio dolore ea! Pariatur, delectus natus officiis accusantium voluptatum obcaecati repudiandae ut voluptas quibusdam cupiditate ipsam!"
    },
    {
      image: promise,
      name: "Promise Ejiofor",
      location: "",
      interaction: "VENDOR",
      testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, quidem. Dolorem adipisci distinctio temporibus optio dolore ea! Pariatur, delectus natus officiis accusantium voluptatum obcaecati repudiandae ut voluptas quibusdam cupiditate ipsam!"
    },
    {
      image: feyisola,
      name: "Feyisola Arinola",
      location: "",
      interaction: "VENDOR",
      testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, quidem. Dolorem adipisci distinctio temporibus optio dolore ea! Pariatur, delectus natus officiis accusantium voluptatum obcaecati repudiandae ut voluptas quibusdam cupiditate ipsam!"
    },
    {
      image: karen,
      name: "Karen Ibeh",
      location: "",
      interaction: "VENDOR",
      testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, quidem. Dolorem adipisci distinctio temporibus optio dolore ea! Pariatur, delectus natus officiis accusantium voluptatum obcaecati repudiandae ut voluptas quibusdam cupiditate ipsam!"
    },
    {
      image: oluchi,
      name: "Oluchi Uzo",
      location: "",
      interaction: "VENDOR",
      testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, quidem. Dolorem adipisci distinctio temporibus optio dolore ea! Pariatur, delectus natus officiis accusantium voluptatum obcaecati repudiandae ut voluptas quibusdam cupiditate ipsam!"
    },
    {
      image: amos,
      name: "Amos Okafor",
      location: "",
      interaction: "VENDOR",
      testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, quidem. Dolorem adipisci distinctio temporibus optio dolore ea! Pariatur, delectus natus officiis accusantium voluptatum obcaecati repudiandae ut voluptas quibusdam cupiditate ipsam!"
    },
  ])

  
  
  let key = 1;

  const [open, setOpen] = useState(false);

  const onCloseModal = () => setOpen(false);
  const onOpenModal = () => setOpen(true);

  const handleSubmit = () => {
    
    alert(`Thank You for Sharing your story!!!`)
    setOpen(false)
    setReviews.push(
      {
        image: feyisola,
        name: "Feyisola Arinola",
        location: "",
        interaction: "VENDOR",
        testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, quidem. Dolorem adipisci distinctio temporibus optio dolore ea! Pariatur, delectus natus officiis accusantium voluptatum obcaecati repudiandae ut voluptas quibusdam cupiditate ipsam!"
      }
    )
  }

  return (
    <>

        <Modal open={open} onClose={onCloseModal}>
          <h2>Share your amazing story!</h2>
          <form className="modalForm" onSubmit={handleSubmit}>
            <label htmlFor="profilePicture">Upload your Picture:</label>
            <input className="field" type="file" accept="image/jpeg" id="profilePicture" name="profilePicture" required/>

            <div className="formSplit">
              <div>
                  <label htmlFor="firstName">First Name</label>
                  <input className="field" id="firstName" name="firstName" placeholder="Jane" required/>
              </div>

              <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input className="field" id="lastName" name="lastName" placeholder="Doe" required/>
              </div>
            </div>

          <label htmlFor="testimonial">Share your story</label>
          <textarea className="field" rows="10" cols="50" name="testimonial" required/>

          <div  id="form_interaction">
            <p>What did you interact with Vasiti as? :</p>
          <div className="radioSelect">
            <input type="radio" id="vendor" name="interaction" value="vendor" required/>
            <label htmlFor="vendor">Vendor</label>
            <input type="radio" id="customer" name="interaction" value="customer" required/>
            <label htmlFor="customer">customer</label>
          </div>
          </div>

          <button className="field" id="submitButton" type="submit">Share your story!</button>

          </form>
        </Modal>
    <div className="wrapper">
      <header>
        <nav className="nav">
          <div><h1>Vasiti.com</h1></div>
          <div className="nav_items">
            <p>ABOUT US</p>
            <a href="#top_review"><p>STORIES</p></a>
            <p>CONTACT</p>
            <p>LOG IN</p>
            <div className="signUp">
              <p>SIGN UP</p>
            </div>
          </div>
        </nav>        
      </header>
    </div>

    <div className="wrapper">
      <nav className="sub_nav">
          <p>MARKETPLACE</p>
          <p>WHOLESALE CENTER</p>
          <p>SELLER CENTER</p>
          <p>SERVICES</p>
          <p>INTERNSHIPS</p>
          <p>EVENTS</p>
        </nav>
    </div>

    <main>
      <div className="main">
        <div className="first_banner">
            <div className="first_banner_description">
              <h1>Amazing <br /> Experiences from Our <br />Wonderful Customers</h1>
              <p>Here is what customers and vendors are saying about <br /> us, you can share your stories with us too.</p>
            </div>
            <div className="first_banner_img">
              <img src={banner} alt="banner"/>
            </div>
        </div>
      </div>
          <div className="second_banner">
              <div className="second_banner_img">
                <img src={tolujoy} alt="toluJoy"/>
              </div>
              <div className="second_banner_description">
                <h1>Tolu & Joy's Experience</h1>
                <div><p>CUSTOMER</p></div>
                <p>I had the best experience with Vasiti.<br />Usability of the website was great, very good<br /> customer service,an all round great<br /> experience.I would definetly be coming back!<br />I had the best experience with Vasiti.<br />Usability of the website was great, very good<br /> customer service,an all round great <br />experience.I would definetly be coming back!</p>

                <p className="storySelect" onClick = {onOpenModal}>SHARE YOUR OWN STORY!</p>
              </div>
          </div>

          <div>
            <div className="main">
              <div className="top_review" id="top_review">
                {reviews.slice(0, 6).map(review => {
                  return <Review image={review.image} name={review.name} location={review.location} interaction={review.interaction} testimonial={review.testimonial} key={key++} />
                }
                )}
              </div>
            </div>
            <div className="third_banner">
                <div className="third_banner_description">
                  <h1>Josiah's Experience</h1>
                  <div><p>VENDOR</p></div>
                  <p>I had the best experience with Vasiti. <br />Usability of the website was great, very good <br /> customer service,an all round great experience.I <br /> would definetly be coming back!I had the best <br /> experience with Vasiti.Usability of the <br /> website was great, very good customer service,an <br /> all round great experience.I would definetly be coming back!</p>

                  <p className="storySelect" id="josiahStory" onClick = {onOpenModal}>SHARE YOUR OWN STORY!</p>
                </div>
                <div className="third_banner_img">
                  <img src={josiah} alt="josiah"/>
                </div>
            </div>
            <div className="main">
              <div className="top_review">
                {reviews && reviews.slice(reviews.length -6 , reviews.length).map(review => {
                  return <Review image={review.image} name={review.name} location={review.location} interaction={review.interaction} testimonial={review.testimonial} key={key++} />
                }
                )}
              </div>
            </div>
          </div>
    </main>

    <footer>
      <div className="top_footer">
        <div className="phone"><img src={phone}alt="phone"/></div>
        <div className="newsletter">
          <h1>Be a member of <br /> our community</h1>
          <p>We'd make sure you're always first to know what's  <br /> happening on Vasiti-thus, the world.</p>
          <div>
            <input type="text" placeholder="Enter your email address" /><input type="submit" value="Subscribe"/>
          </div>
        </div>
      </div>

      <div className="bottom_footer">
            <div>
              <h6>Company</h6>
              <p>About Us</p>
              <p>Term of Use</p>
              <p>Privacy Policy</p>
              <p>Press & Media</p>
            </div>
            <div>
              <h6>Products</h6>
              <p>Marketplace</p>
              <p>Magazine</p>
              <p>Seller</p>
              <p>Wholesale</p>
              <p>Services</p>
            </div>
            <div>
              <h6>Careers</h6>
              <p>Become a Campus Rep</p>
              <p>Become a Vasiti Influencer</p>
              <p>Become a Campus Writer</p>
              <p>Become an Affiliate</p>
            </div>
            <div>
              <h6>Get in touch</h6>
              <p>Contact us</p>
              <p>Partner with us</p>
              <p>Advertise with us</p>
              <p>Help/FAQS</p>
            </div>
            <div>
              <h6>Join our community</h6>
              <div>
                <i className="fab fa-facebook"></i> &nbsp;
                <i className="fab fa-twitter"></i> &nbsp;
                <i className="fab fa-instagram"></i> &nbsp;
                <i className="fab fa-linkedin"></i>
              </div>
              <p>Email Newsletter</p>
            </div>
      </div>
    </footer>

   

    </>
  );
}

export default App;
