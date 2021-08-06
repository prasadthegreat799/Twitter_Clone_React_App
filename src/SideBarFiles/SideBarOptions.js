import React from 'react';
import './SideBarOptions.css';

function SideBarOptions( {active, text , Icon}) {
    return (
        <div className={'sideBarOptions ${active && "sideBarOptions--active"}'} >


            <Icon />
            <h2>{text}</h2>
            
        </div>
    )
}

export default SideBarOptions
