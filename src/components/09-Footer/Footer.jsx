import React from "react";
import logo from "../images/Logo.png"

const Footer=()=>{



    const footList = [
        {
            category:"product",
            items:["Overview","Features","Solutions","Tutorials","Pricing","Releases"]
        },
        {
            category:"company",
            items:["About us","Careers","Press","News","Media kit","Contact"]
        },
        {
            category:"resources",
            items:["Blog","Newsletter","Events","Help centre","Tutorials","Support"]
        },
        {
            category:"usecases",
            items:["Startups","Enterprise","Government","SaaS centre","Marketplaces","Ecommerce"]
        },
        {
            category:"social",
            items:["Twitter","LinkedIn","Facebook","GitHub","AngelList","Dribbble"]
        },
        {
            category:"legal",
            items:["Terms","Privacy","Cookies","Licenses","Settings","Contact"]
        },
    ]

    return(
        <footer className="h-[480px] w-[100%] flex flex-col justify-around items-center">
            <div className="h-[240px] w-[1280px] flex justify-between items-center">
                {footList.map((i,index)=>{
                    return(
                        <div key={index} id="footItem" className="h-[240px] w-[176px] flex flex-col justify-center items-start">
                        <p className="text-[#667085] text-[16px] font-[600]">{i.category}</p>
                        <ul className="h-[204px] w-[176px] flex flex-col justify-center items-start">
                            {i.items.map((ele,eleKey)=>{
                                return(
                                    <li key={eleKey} className="text-[16px] font-[600]">{ele}</li>
                                )
                            })}
                        </ul>
                    </div>
                    )
                    
                })}
            </div>


            <div className="h-[64px] w-[1280px] flex justify-between items-center">
                <div className="h-[32px] w-[142px] flex">
                    <img src={logo} alt="" />
                </div>                
                <p className="text-[#667085] text-[16px] font-[400]">© 2077 Untitled UI. All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer