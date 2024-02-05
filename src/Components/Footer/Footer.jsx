import React from 'react'
import './footer.css'
import video_02 from '../../Assets/video_02.mp4';
import video_02n from '../../Assets/video_02n.mp4';
import video_03 from '../../Assets/video_03.mp4';
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="footer">

      <div className="videoDiv">
        <video src={video_03} loop autoplay muted type = "video/mp4"></video>
      </div>

      <div className="secContent container">

        <div className="contactDiv flex">

          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us now</h2>
          </div>

          <div className="inputDiv flex">
            <input type="email" placeholder='Enter Email Address'/>
            <button className='btn flex' type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className="icon"/>NX Travel
              </a>
            </div>

            <div className="footerPharagraph">
              this is a page created by Nirmitha sulakshana Pvt.
            </div>

            <div className="footerSocials flex">
              <IoLogoTwitter className='icon'/>
              <FaYoutube className='icon'/>
              <FiFacebook className='icon'/>
              <FiInstagram className='icon'/>
            </div>

          </div>

          <div className="footerLinks grid">
            {/* Groupe One */}
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FaAngleRight className='icon'/> Services
              </li>

              <li className="footerList flex">
                <FaAngleRight className='icon'/> Insurance
              </li>

              <li className="footerList flex">
                <FaAngleRight className='icon'/> Tourism
              </li>

              <li className="footerList flex">
                <FaAngleRight className='icon'/> Payment
              </li>

            </div>

            {/* Groupe Two */}
            <div className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FaAngleRight className='icon'/> Booking
              </li>

              <li className="footerList flex">
                <FaAngleRight className='icon'/> Rent Cars
              </li>

              <li className="footerList flex">
                <FaAngleRight className='icon'/> Hotels
              </li>

              <li className="footerList flex">
                <FaAngleRight className='icon'/> Trip Advisors
              </li>

            </div>

            {/* Groupe Three */}
            <div className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FaAngleRight className='icon'/> Galle
              </li>

              <li className="footerList flex">
                <FaAngleRight className='icon'/> Colombo
              </li>

              <li className="footerList flex">
                <FaAngleRight className='icon'/> Matara
              </li>

              <li className="footerList flex">
                <FaAngleRight className='icon'/> Kandy
              </li>

            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE IN SRI LANKA</small>
            <small><FaRegCopyright /> NIRMITHA SULAKSHANA-2024 - University of Ruhuna Department of Computer Science.</small>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Footer