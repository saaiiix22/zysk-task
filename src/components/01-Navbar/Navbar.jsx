import React from "react";
import logo from "../images/Logomark.png"
import dropdown from "../images/Dropdown.png"
import vector from "../images/Vector.png"

const Navbar=()=>{

    const navList = ["Home","Products","Resources", "Pricing"]


    return(
        <nav className="h-[80px] w-[100%] flex justify-around items-center">
            <div className="left h-[34px] w-[586px] flex justify-end items-center ">
                <div className="h-[32px] w-[142px] flex justify-center items-center gap-2 text-">
                    <img src={logo} alt="" />
                    <img src={vector} alt="" />
                </div>

                <ul className="h-[100%] w-[402px] flex justify-around items-center">
                    {navList.map((i,index)=>{
                        return(
                            <li key={index} className="font-[600] text-[16px]">{i}</li>
                        )
                    })}
                </ul>
            </div>

            <div className="right h-[100%] w-[50%] flex justify-end items-center">
                <img src={dropdown} className="h-[40px] w-[40px]" alt="" />
            </div>
        </nav>
    )
}
export default Navbar