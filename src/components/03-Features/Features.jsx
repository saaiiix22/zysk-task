import React from "react";
import feature1 from "../images/Featured icon.png"
import feature2 from "../images/Featured icon-1.png"
import feature3 from "../images/Featured icon-2.png"
import feature4 from "../images/Featured icon-3.png"
import feature5 from "../images/Featured icon-4.png"
import feature6 from "../images/Featured icon-6.png"

const Features=()=>{

    const lists=[
        {
            logo:feature1,
            name:"Share team inboxes",
            text:"Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        },
        {
            logo:feature2,
            name:"Deliver instant answers",
            text:"An all-in-one customer service platform that helps you balance everything your customers need to be happy."
        },
        {
            logo:feature3,
            name:"Manage your team with reports",
            text:"Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
        },
        {
            logo:feature4,
            name:"Connect with customers",
            text:"Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
        },
        {
            logo:feature5,
            name:"Connect the tools you already use",
            text:"Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
        },
        {
            logo:feature6,
            name:"Our people make the difference",
            text:"We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
        }        

    ]

    return(
        <div className="features h-[836px] w-[100%] flex justify-center items-center flex-col">
            <main className="w-[70%] h-[160px] flex justify-center items-center flex-col gap-2">
                <p className="text-[#6941C6] font-[600] text-[16px]" >Features</p>
                <h1 className="text-[36px] font-[600]">Analytics that feels like it’s from the future</h1>
                <p className="w-[50%] text-center mt-2">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups</p>
            </main>
            <div className="h-[420px] w-[1280px] flex justify-center items-center flex-wrap gap-5">
                {lists.map((i,index)=>{
                    return(
                        <div key={index} className="feature h-[178px] w-[384px] flex justify-center items-center flex-col">
                            <img src={i.logo} alt="" className="h-[48px] w-[48px]" />
                            <h1 className="text-[20px] font-[600]">{i.name}</h1>
                            <p className="text-center text-[16px]">{i.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Features