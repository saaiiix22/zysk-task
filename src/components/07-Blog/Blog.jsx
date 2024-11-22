import React from "react";
import blog1 from "../images/blog1.png"
import blog2 from "../images/blog2.png"
import blog3 from "../images/blog3.png"
import uparrow from "../images/uparrow.png"
import user1 from "../images/Dropdown.png"
import user2 from "../images/user2.png"
import user3 from "../images/user3.png"

const Blog=()=>{

    const cardList = [
        {
            img:blog1,
            domain:"Design",
            name:"UX review presentations",
            text:"How do you create compelling presentations that wow your colleagues and impress your managers?",
            profilePic:user1,
            username:"Olivia Rhye",
            date:"20 Jan 2024"
        },
        {
            img:blog2,
            domain:"Product",
            name:"Migrating to Linear 101",
            text:"Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
            profilePic:user2,
            username:"Phoenix Baker",
            date:"19 Jan 2024"
        },
        {
            img:blog3,
            domain:"Software Engineering",
            name:"Building your API stack",
            text:"The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
            profilePic:user3,
            username:"Lana Steiner",
            date:"18 Jan 2024"
        }
        

    ]

    return(
        <div className="h-[830px] w-[100%] flex justify-around items-center flex-col">
            <div className="h-[130px] w-[1280px] flex justify-center items-center">
                <div className="left h-[80px] w-[768px] flex justify-center items-start flex-col">
                    <p className="text-[16px] font-[600] text-[#7F56D9]">Our blog</p>
                    <h1 className="text-[36px] font-[600]">Latest blog posts</h1>
                    <p className="text-[20px] font-[400]">Tool and strategies modern teams need to help their companies grow.</p>
                </div>
                <div className="right h-[130px] w-[512px] flex justify-end items-start">
                    <button className="w-[148px] h-[48px] rounded-[8px] text-white bg-[#7F56D9]">View all posts</button>
                </div>
            </div>


            <div className="h-[444px] w-[1280px] flex justify-between items-center">
                {
                    cardList.map((i,index)=>{
                        return(
                            <div key={index} className="h-[444px] w-[384px]">
                                <img src={i.img} className="h-[240px] w-[100%]" alt="" />

                                    <br />

                                <div className="h-[180px] w-[100%] flex flex-col justify-between">
                                    <p className="font-[600] text-[14px] text-[#6941C6]">{i.domain}</p>
                                    <div className="w-[100%] h-[32px] flex justify-between items-center">
                                        <h1 className="text-[24px] font-[600]">{i.name}</h1>
                                        <img src={uparrow} alt="" />
                                    </div>
                                    <p className="text-[16px] text-[#475467]">{i.text}</p>
                                    <div className="h-[40px] w-[156px] flex justify-center items-center gap-2">
                                        <img className="h-[40px] w-[40px]" src={i.profilePic} alt="" />
                                        <div className="h-[100%] w-[110px] flex flex-col justify-center items-start gap-[7px]">
                                            <h1 className="h-[14px] font-[600]">{i.username}</h1>
                                            <p className="text-[#475467] text-[14px] font-[400]">{i.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Blog