
import dbhomepage from './ProjectImg/disibin/homepage.jpg'
import dbpackage from './ProjectImg/disibin/package.jpg'
import dbresponsive from './ProjectImg/disibin/responsive.png'
import dbbottom from './ProjectImg/disibin/bottom.jpg'
import dbsignin from './ProjectImg/disibin/signinpage.jpg'


import tbhomepage from './ProjectImg/techbeast/homepage.jpg'
import tbitem from './ProjectImg/techbeast/item.jpg'
import tbresponsive from './ProjectImg/techbeast/responsive.png'
import tbsignin from './ProjectImg/techbeast/signinpage.jpg'
import tbbottom from './ProjectImg/techbeast/bottom.jpg'

import onlineshop from './ProjectImg/onlineshop.jpg'
import portfolio from './ProjectImg/portfolio.jpg'



export const projectDatas=[
    
    {
        id:1,
        title: "Portfolio",
        headline: "Responsive and modern design to present developer, business, commercial profile.",
        titleimg: portfolio,
        projects:[
            {
                id:1,
                title: "DisiBin",
                headline: " Personal Collection of Creative and Technical Web Projects",
                desc: "DisiBin specialize in delivering innovative solutions that drive success and growth. This portfolio highlights our expertise, showcasing a diverse range of projects that demonstrate our commitment to quality, creativity, and client satisfaction. Explore our work to see how we turn ideas into impactful results — let’s partner to elevate your business to the next level",
                responsivedesc: "Responsive design is a modern web development approach that ensures websites and applications provide an optimal viewing and interaction experience across a wide range of devices and screen sizes. It involves using CSS media queries, fluid grids, flexible layouts, and responsive images to create interfaces that automatically adjust their structure, content, and functionality based on the user's device. By implementing responsive design principles, developers can deliver seamless usability, improve accessibility, and reduce the need for multiple versions of a website for different devices. Whether viewed on a large desktop monitor, a tablet, or a mobile phone, a responsively designed site maintains visual consistency, readability, and navigation ease—enhancing both user experience and performance. Responsive design also plays a crucial role in SEO, as search engines prioritize mobile-friendly websites. It's a foundational skill for modern frontend development and essential for building scalable, future-proof web applications",
                homeimg: dbhomepage,
                productimg: dbpackage,
                responsiveimg: dbresponsive,
                footerimg: dbbottom,
                userimg : dbsignin,
                siteurl: "https://www.disibin.com"
            }
        ]
    },
    {
        id:2,
        title: "Online Shop",
        headline: "One-stop destination for quality products at great prices",
        titleimg: onlineshop,
        projects: [
            {
                id:1,
                title: "Tech Beast",
                desc: "Shopping meets convenience and quality! We are dedicated to bringing you a wide selection of carefully curated products to suit your lifestyle and needs. From the latest fashion trends to must-have gadgets, home essentials, and unique gifts, we’ve got something for everyone. Our user-friendly platform makes browsing and purchasing easy and secure, while our fast shipping and responsive customer service ensure a seamless experience from start to finish. At [Shop Name], customer satisfaction is our top priority — shop with confidence and discover great deals every day!",
                responsivedesc: "Responsive design is a modern web development approach that ensures websites and applications provide an optimal viewing and interaction experience across a wide range of devices and screen sizes. It involves using CSS media queries, fluid grids, flexible layouts, and responsive images to create interfaces that automatically adjust their structure, content, and functionality based on the user's device. By implementing responsive design principles, developers can deliver seamless usability, improve accessibility, and reduce the need for multiple versions of a website for different devices. Whether viewed on a large desktop monitor, a tablet, or a mobile phone, a responsively designed site maintains visual consistency, readability, and navigation ease—enhancing both user experience and performance. Responsive design also plays a crucial role in SEO, as search engines prioritize mobile-friendly websites. It's a foundational skill for modern frontend development and essential for building scalable, future-proof web applications",
                homeimg: tbhomepage,
                productimg: tbitem,
                responsiveimg: tbresponsive,
                footerimg: tbbottom,
                userimg : tbsignin,
                siteurl: "https://tech-beast.netlify.app/"
            }
        ]
    },
    
]