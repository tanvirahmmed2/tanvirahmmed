import React from 'react'
import { motion } from 'motion/react'

import { Link } from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@creativemind.co",
    review:
      "Working with Tanvir was a game-changer for our online presence. He built our site from scratch with speed, precision, and a deep understanding of our brand. Communication was smooth and he was always available when needed. Highly recommended!"
  },
  {
    id: 2,
    name: "Michael Lee",
    email: "michael.lee@techpulse.io",
    review:
      "Incredible work ethic and attention to detail. Tanvir delivered a fully responsive, blazing-fast site ahead of deadline. His ability to turn complex ideas into smooth functionality is outstanding. We’ll definitely work again!"
  },
  {
    id: 3,
    name: "Ayesha Rahman",
    email: "ayesha.r@luxecommerce.com",
    review:
      "I’ve worked with many developers, but Tanvir stands out for his professionalism and 24/7 availability. He handled our eCommerce site with care, integrating everything we needed. Five stars without hesitation."
  },
  {
    id: 4,
    name: "David Martinez",
    email: "david.m@nextgenstudios.org",
    review:
      "Tanvir didn’t just develop our education platform — he elevated it. From UI to backend logic, everything was built with quality and passion. Our students and staff love the new interface!"
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    email: "nusrat.j@publicspace.news",
    review:
      "From layout design to performance optimization, Tanvir nailed every aspect of our news publication website. He truly listens, delivers quickly, and goes the extra mile. Couldn’t be happier!"
  }

]

function Review() {
  return (
    <div className='w-full h-auto py-20 flex flex-col items-center justify-center'>
      <h1 className='text-3xl  font-bold pb-12 text-teal-500'><FontAwesomeIcon icon={faRankingStar} /> Client Reviews</h1>
      <div className='flex flex-col gap-4 items-start justify-center w-full h-auto'>
        {
          reviews.map((review) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: .4 }}
              key={review.id} className='flex flex-col w-full h-auto gap-2 items-start bg-gradient-to-br from-teal-900 to-transparent rounded-2xl px-4 py-2'>

              <div className='flex flex-row w-full h-auto items-center justify-start gap-2'>
                <p className='text-amber-500'><FontAwesomeIcon icon={faStar} /></p>
                <h1 className='text-lg font-semibold'>{review.name}</h1>
                <p className='italic'>{review.email}</p>

              </div>
              <p>{review.review}</p>
            </motion.div>
          ))
        }
        <div className='flex md:text-base mt-2 flex-col gap-2 md:gap-4 group w-full items-center text-center'>

          <Link to='/projects' className='group/item2 flex flex-row items-center justify-between gap-4 border-teal-700 border-2 font-bold px-10 rounded-md w-50  cursor-pointer hover:scale-105'>
            Projects
            <p className='hidden group-hover/item2:flex'><FontAwesomeIcon icon={faArrowRight} /></p>
          </Link>
          <a href="mailto:tanvir004006@gmail.con" className='group/item1 flex flex-row items-center justify-between gap-4 border-teal-700 border-2 w-50   font-bold px-10 rounded-md cursor-pointer hover:scale-105'>
            Hire Me
            <p className='hidden group-hover/item1:flex '><FontAwesomeIcon icon={faArrowRight} /></p>

          </a>
          <a href="/Tanvir_Ahmmed_resume.pdf" download className='border-teal-700 border-2  font-bold w-50 rounded-md cursor-pointer hover:scale-105'>Download Resume</a>

        </div>
      </div>
    </div>
  )
}

export default Review
