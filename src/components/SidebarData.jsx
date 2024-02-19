import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home",
    },
    {
        title : "Search",
        icon:<SearchIcon/>,
        link:"/search"
    },
    {
        title:"Courses",
        icon:<PlayCircleIcon/>,
        link:"/courses"
    },
    {
        title:"Saved",
        icon:<BookmarkIcon/>,
        link:"/saved"
    },
    {
        title:"Profile",
        icon:<AccountBoxIcon/>,
        link:"/profile"
    }
]
