
import dbhomepage from './ProjectImg/disibin/homepage.jpg'
import dbpackage from './ProjectImg/disibin/package.jpg'
import dbmenubar from './ProjectImg/disibin/responsivemenubar.jpg'
import dbsidebar from './ProjectImg/disibin/sidebar.jpg'
import dbsignin from './ProjectImg/disibin/signinpage.jpg'


import tbhomepage from './ProjectImg/techbeast/homepage.jpg'
import tbitem from './ProjectImg/techbeast/item.jpg'
import tbresponsiveview from './ProjectImg/techbeast/mobileviewitem.jpg'
import tbsinin from './ProjectImg/techbeast/signinpage.jpg'
import tbbottom from './ProjectImg/techbeast/bottom.jpg'





export const projectDatas=[
    
    {
        id:1,
        title: "Portfolio",
        headline: "Responsive and modern design to present developer, business, commercial profile.",
        imgurL:"hee",
        projects:[
            {
                id:1,
                title: "DisiBin",
                headline: " Personal Collection of Creative and Technical Web Projects",
                desc: "DisiBin specialize in delivering innovative solutions that drive success and growth. This portfolio highlights our expertise, showcasing a diverse range of projects that demonstrate our commitment to quality, creativity, and client satisfaction. Explore our work to see how we turn ideas into impactful results — let’s partner to elevate your business to the next level",
                homeimg: dbhomepage,
                productimg: dbpackage,
                responsiveimg: dbmenubar,
                barimg: dbsidebar,
                userimg : dbsignin,
                siteurl: "https://www.disibin.com"
            }
        ]
    },
    {
        id:2,
        title: "Online Shop",
        headline: "One-stop destination for quality products at great prices",
        projects: [
            {
                id:1,
                title: "Tech Beast",
                desc: "Shopping meets convenience and quality! We are dedicated to bringing you a wide selection of carefully curated products to suit your lifestyle and needs. From the latest fashion trends to must-have gadgets, home essentials, and unique gifts, we’ve got something for everyone. Our user-friendly platform makes browsing and purchasing easy and secure, while our fast shipping and responsive customer service ensure a seamless experience from start to finish. At [Shop Name], customer satisfaction is our top priority — shop with confidence and discover great deals every day!",
                homeimg: tbhomepage,
                productimg: tbitem,
                responsiveimg: tbresponsiveview,
                barimg: tbbottom,
                userimg : tbsinin,
                siteurl: "https://wwww.tech-beast-netlify.app/"
            }
        ]
    },
    
]