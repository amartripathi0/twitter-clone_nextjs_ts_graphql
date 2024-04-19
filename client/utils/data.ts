import { IconType } from "react-icons";
import { MdEmail, MdHomeFilled  } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
interface SidebarItems {
    label : string
    icon : IconType
}

export const sidebarItems : SidebarItems[] = [
    {
        label : "Home" ,
        icon : MdHomeFilled 
    } ,
    {
        label : "Explore" ,
        icon :  CiSearch
    } ,
    {
        label : "Notifications" ,
        icon :  FaBell
    } ,
    {
        label : "Messages   " ,
        icon : MdOutlineEmail
    } ,
    {
        label : "Profile" ,
        icon : CiUser
    } ,
]
