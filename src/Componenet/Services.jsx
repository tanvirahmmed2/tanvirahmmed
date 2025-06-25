import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwatchbook, faCode, faPeopleArrows, faDatabase, faLaptopCode, faTicket } from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core'

const services =[
  {
    id:1,
    title:"Ui/Ux Design",
    desc: "Crafting beautiful, intuitive, and user-friendly digital experiences through thoughtful interface and experience design",
    icon: <FontAwesomeIcon icon={faSwatchbook}/>,
    more: "learn more"
  },
  {
    id:2,
    title:"Web Development",
    desc: "Delivering complete web solutions by combining front-end and back-end development into a seamless, scalable experience",
    icon: <FontAwesomeIcon icon={faCode}/>,
    more: "learn more"
  },
  {
    id:3,
    title: "Web App",
    desc:"A fast, secure, and user-friendly web app designed to boost productivity and streamline tasks from any device.",
    icon: <FontAwesomeIcon icon={faDatabase}/>,
    more: "learn more"
  }
]

function Services() {
 return (
    <div className='w-full min-h-[100vh] flex flex-col'>
      <div className='text-3xl flex flex-row w-full h-auto items-center justify-center gap-4 font-bold mb-4'>
        <h1 className='text-red-700'>Service </h1>
        <h1>I Provide</h1>

      </div>
      <div className='w-full h-auto flex items-center justify-center'>
        <div className='gap-4 grid grid-flow-col'>
          {
            services.map((service)=>{
              return <div className='flex flex-col items-center justify-center p-4 text-center w-80 h-60 bg-gray-300 hover:bg-red-300 rounded-2xl cursor-pointer' key={service.id}>
                <p className='text-xl'>{service.icon}</p>
                <h1 className="font-bold text-lg">{service.title}</h1>
                <p>{service.desc}</p>
                <a href="">{service.more}</a>
              </div>
            })
          }

        </div>
      </div>

      
    </div>
  )
}

export default Services
