import React from 'react';
import { SidebarData } from './SidebarData'; // assuming SidebarData is in a separate file
import '../App.css';

function Sidebar() {
    return (
        <div>
            <div className="Sidebar">
                <ul className="SidebarList">
                    {SidebarData.map((item, index) => (
                        <li key={index}>
                            <a href={item.link}>
                                <div className='icon'> {item.icon}</div>
                                
                                <div className='title'>{item.title}</div>

                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
