import React, { Component } from 'react'
import './HelpCentre.css'
import { useState } from 'react'


const data = [
    // 1 : Online test
    {
       id: 1,
       name : 'Online Test',
       activeStatus : true,
       activeIcon : 'images/Active_OnlineTests.svg' ,
       inActiveIcon : '/images/InActive_OnlineTests.svg',
       subModule : [
        {
            Subname : 'Create Test',
            icon : '1',
            hasSubModule : true,
            SubSubModule : [
                {
                    sub_id : '1',
                    subsubName : 'How to Create a Test ?',
                    youtTubeURL : 'https://www.youtube.com/embed/c90r2qJf2fE'
                }
            ]
        },
        {
            Subname : 'Create a Question Paper',
            icon : '2',
            hasSubModule : true,
            SubSubModule : [
                {
                    sub_id : '1',
                    subsubName : 'How to assign a question paper to Teacher ?',
                    youtTubeURL : 'https://www.youtube.com/embed/W7ZCU4J5IUQ'
                },
                {    sub_id : '2',
                    subsubName : 'How to create question paper from question bank ?',
                    youtTubeURL : 'https://www.youtube.com/embed/c90r2qJf2fE'
                }
            ]
        },
        {
            Subname : 'Publish a Test',
            icon : '3',
            hasSubModule : true,
            SubSubModule : [
                {
                    sub_id : '1',
                    subsubName : 'How to Publish the test ?',
                    youtTubeURL : 'https://www.youtube.com/embed/gM-FmLUAMX8'
                }
            ]
        }
       ]
    },

    // 2 : Live Classes
    {
        id: 2,
        name : 'Live Classes',
        activeStatus : false,
        activeIcon : 'images/Active_LiveClasses.svg' ,
        inActiveIcon : 'images/InActive_LiveClasses.svg',
        subModule : [
         {
             Subname : 'Create Class',
             icon : '1',
             hasSubModule : true,
             SubSubModule : [
                 {
                    sub_id : '1',
                     subsubName : 'How to Create Live Classes ?',
                     youtTubeURL : 'https://www.youtube.com/embed/st2ZlJbwigc'
                 },
                 {
                    sub_id : '2',
                    subsubName : 'How to Create a Recorded Class ?',
                    youtTubeURL : 'https://www.youtube.com/embed/8FD0KqrpsH0'
                }
             ]
         },
         {
             Subname : 'Manage Class',
             icon : '2',
             hasSubModule : true,
             SubSubModule : [
                 {
                    sub_id : '1',
                     subsubName : 'How to Edit Live Classes ?',
                     youtTubeURL : 'https://www.youtube.com/embed/-OsBkMv-OFE'
                 }
             ]
         }
        ]
     },


    // 3 :  Assignments
    {
        id: 3,
        name : 'Assignments',
        activeStatus : false,
        activeIcon : 'images/Active_Assignments.svg' ,
        inActiveIcon : 'images/InActive_Assignments.svg',
        subModule : [
         {
             Subname : 'How to create Assignment ?',
             hasSubModule : false,
             icon : '1',
             youtTubeURL : 'https://www.youtube.com/embed/99CXOEZ1XtE'

         },
         {
             Subname : 'How to evaluate assignement',
             hasSubModule : false,
             icon : '2',
             youtTubeURL : 'https://www.youtube.com/embed/oVgZQiM8Z5I'
         }
        ]
     },

    //4:  Doubts
     {
        id: 4,
        name : 'Doubts',
        activeStatus : false,
        activeIcon : 'images/Active_Doubts.svg' ,
        inActiveIcon : 'images/InActive_Doubts.svg',
        subModule : [
         {
             Subname : 'How to clear a doubt ?',
             icon : '1',
             hasSubModule : false,
             youtTubeURL : 'https://www.youtube.com/embed/v91mDY5tX60'

         }
        ]
     },
    
    //  5. Connect
    {
        id: 5,
        name : 'Connect',
        activeStatus : false,
        activeIcon : 'images/Active_Connect.svg' ,
        inActiveIcon : 'images/InActive_Connect.svg',
        subModule : [
         {
             Subname : 'Notifications',
             icon : '1',
             hasSubModule : true,
             SubSubModule : [
                 {
                    sub_id: '1',
                     subsubName : 'How to send a notification ?',
                     youtTubeURL : 'https://www.youtube.com/embed/03WMGMHBxi4'
                 },
                 {
                    sub_id: '2',
                    subsubName : 'How to sent a view notification ?',
                    youtTubeURL : 'https://www.youtube.com/embed/L-K7XI5rTTE'
                }
             ]
         },
         {
             Subname : 'Banners',
             icon : '2',
             hasSubModule : true,
             SubSubModule : [
                 {
                    sub_id: '1',
                     subsubName : 'How to send a Banner message ?',
                     youtTubeURL : 'https://www.youtube.com/embed/NXMzFJ0bnz0'
                 },
                 {
                    sub_id: '2',
                     subsubName : 'How to view a sent banner message ?',
                     youtTubeURL : 'https://www.youtube.com/embed/ZgvPYWA7gjY'
                 }
             ]
         }
        ]
     },
  
    //  Settings
     {
        name : 'Settings',
        activeStatus : false,
        activeIcon : 'images/Active_Settings.svg' ,
        inActiveIcon : 'images/InActive_Settings.svg',
        subModule : [
         {
             Subname : 'Institute Details',
             icon : '1',
             hasSubModule : true,
             SubSubModule : [
                 {
                    sub_id: '1',
                     subsubName : 'How to add an institute section ?',
                     youtTubeURL : 'https://www.youtube.com/embed/ZN9LKuTy0fM'
                 }
             ]
         },
         {
             Subname : 'Test Pattern',
             icon : '2',
             hasSubModule : true,
             SubSubModule : [
                 {
                    sub_id : '1',
                     subsubName : 'What is Test Pattern ?',
                     youtTubeURL : 'https://www.youtube.com/embed/8PNfdLzOR4Y'
                 }
             ]
         }
        ]
     },

    
]

export default function HelpCentre(){

    const [loginType, setLoginType] = useState('Student')
    const [role, setRole] = useState("web")
    const [activeTab, setActiveTab] = useState('Online Test')
    const [activeSubModule, setActiveSubModule] = useState('1')
    const [activeSubSubModule, setActiveSubSubModule] = useState('1')
    const [videoText, setVideoText] = useState('How to Create a Test ?')
    const [videoURL, setVideoURL] = useState('https://www.youtube.com/embed/kKJpFuEiJQs')

    
 
    return (
      <>
       {/* Head Container */}
        <div class="heading-cont main-cont-arrange">
            <div class="space-between">
                <div class="main-text-arrange">
                    <img src="/images/back_arrow.png" width="20px" height="16px" alt="back_arrow" />
                    <h3 class="help-centre-head-text">Help Centre</h3>
                </div>
                <div class="login-type-cont flex-row-arrange">
                    {
                        loginType === 'Admin' ? <>
                                            <img src="/images/Admin.svg" width="20px" height="20px" alt="admin_login" />
                                            <h3 class="login-type-text">You are in the Admin Login</h3> </>
                                    : 
                                        <>
                                            <img src="/images/Admin.svg" width="20px" height="20px" alt="admin_login" />
                                            <h3 class="login-type-text">You are in the Student Login</h3> 
                                        </>
                    } 
                </div>
                <div class="login-type-dropdown-cont dropdown-arrange">
                <h3 class="dropdown-text">Admin</h3>
                {/* <h3 class="dropdown-text">Student</h3> */}
                <img src="/images/down_arrow.svg" width="15" height="15" alt="down_arrow" />
                </div>
            </div>
            <div class="browsing-type-arrange">
                {
                    role === 'web' ? <div className="browsing-type-web mobWeb-arrange browsing-type-active" onClick={e =>setRole("web")}>
                                        <img src="images/web.svg" width="35" height="35" alt="down_arrow" />
                                        <h3 class="dropdown-text">Web</h3>
                                    </div> :
                                    <div className="browsing-type-web mobWeb-arrange" onClick={e =>setRole("web")}>
                                        <img src="images/web.svg" width="35" height="35" alt="down_arrow" />
                                        <h3 class="dropdown-text">Web</h3>
                                    </div>
                }
                {
                    role === 'mobile' ? <div class="browsing-type-mobile mobWeb-arrange browsing-type-active" onClick={e =>setRole("mobile")}>
                                            <img src="images/mobile.svg" width="35" height="35" alt="down_arrow" />
                                            <h3 class="dropdown-text">Mobile</h3>
                                        </div> :
                                        <div class="browsing-type-mobile mobWeb-arrange" onClick={e =>setRole("mobile")}>
                                        <img src="images/mobile.svg" width="35" height="35" alt="down_arrow" />
                                        <h3 class="dropdown-text">Mobile</h3>
                                        {/* <h3 class="dropdown-text">{role}</h3> */}
                                        </div>
                }
                
                
            </div>
        </div>
        {/* End of Head Contaienr */}


        <div class="help-centre-body-container">
            <div class="inner-body">
                <div class="flex-arrange">
                    {
                        data.map((item) =>{
                            return(

                                    activeTab === item.name ? <div class="tab-box-active tab-arrange" onClick={e => ( setActiveTab(item.name), setActiveSubSubModule('1'), setActiveSubModule('1'), setVideoText(item.subModule[0].hasSubModule === true ? item.subModule[0].SubSubModule[0].subsubName : item.subModule[0].Subname), setVideoURL(item.subModule[0].hasSubModule === true ? item.subModule[0].SubSubModule[0].youtTubeURL : item.subModule[0].youtTubeURL))} >
                                                                <img src={item.activeIcon} width="24" height="24" /> 
                                                                <h3 class="tab-text-active">{item.name}</h3>
                                                            </div> :
                                                            <div class="tab-box tab-arrange" onClick={e => (setActiveTab(item.name), setActiveSubSubModule('1'),setActiveSubModule('1'), setVideoText(item.subModule[0].hasSubModule === true ? item.subModule[0].SubSubModule[0].subsubName : item.subModule[0].Subname), setVideoURL(item.subModule[0].hasSubModule === true ? item.subModule[0].SubSubModule[0].youtTubeURL : item.subModule[0].youtTubeURL) )}>
                                                                <img src={item.inActiveIcon} width="24" height="24" /> 
                                                                <h3 class="tab-text">{item.name}</h3>
                                                            </div>
                            )
                        })
                    }

                </div>
                <div class="video-arrange">

                    <div class="side-list">
                        {
                           data.map((value)=>{
                                return(
                                    value.name === activeTab ? value.subModule.map((subsub)=>{
                                        return(
                                            <>
                                                {
                                                    activeSubModule === subsub.icon ? <div class="round-box-arrange">
                                                                                        <div class="round-box active-back-color">
                                                                                            <h3 class="round-box-text white-font-color" onClick={e=> ( setActiveSubModule(subsub.icon), setActiveSubSubModule('1'), setVideoText(subsub.Subname), setVideoText(subsub.hasSubModule === true ? subsub.SubSubModule[0].subsubName : subsub.Subname), setVideoURL(subsub.hasSubModule === true ? subsub.SubSubModule[0].youtTubeURL : subsub.youtTubeURL)) }>{subsub.icon}</h3>
                                                                                        </div>
                                                                                            <h3 class="sub-module-text active-font-color" onClick={e=> (setActiveSubModule(subsub.icon), setActiveSubSubModule('1'),setVideoText(subsub.Subname), setVideoText(subsub.hasSubModule === true ? subsub.SubSubModule[0].subsubName : subsub.Subname), setVideoURL(subsub.hasSubModule === true ? subsub.SubSubModule[0].youtTubeURL : subsub.youtTubeURL) )}>{subsub.Subname}</h3>
                                                                                    </div> :
                                                                                    <div class="round-box-arrange">
                                                                                        <div class="round-box">
                                                                                            <h3 class="round-box-text" onClick={e=> ( setActiveSubModule(subsub.icon), setActiveSubSubModule('1'), setVideoText(subsub.hasSubModule === true ? subsub.SubSubModule[0].subsubName : subsub.Subname), setVideoURL(subsub.hasSubModule === true ? subsub.SubSubModule[0].youtTubeURL : subsub.youtTubeURL) )}>{subsub.icon}</h3>
                                                                                        </div>
                                                                                            <h3 class="sub-module-text" onClick={e=> ( setActiveSubModule(subsub.icon), setActiveSubSubModule('1'), setVideoText(subsub.hasSubModule === true ? subsub.SubSubModule[0].subsubName : subsub.Subname), setVideoURL(subsub.hasSubModule === true ? subsub.SubSubModule[0].youtTubeURL : subsub.youtTubeURL))}>{subsub.Subname}</h3>
                                                                                    </div>                         

                                                }
                                             
                                             {
                                             subsub.hasSubModule === true ? 
                                                                <>
                                                                    {
                                                                       
                                                                        subsub.icon=== activeSubModule ? subsub.SubSubModule.map((finalValue)=>{
                                                                            return(
                                                                                <div class="sub-sub-module-cont">
                                                                                    {/* <ul>   */}
                                                                                            {
                                                                                                finalValue.sub_id === activeSubSubModule ?  <ul class="bullet-active"><li class="sub-sub-module-text active-font-color" onClick={e => ( setActiveSubSubModule(finalValue.sub_id), setVideoText(finalValue.subsubName), setVideoURL(finalValue.youtTubeURL))} >{finalValue.subsubName}</li></ul>:
                                                                                                                                           <ul><li class="sub-sub-module-text" onClick={e => (setActiveSubSubModule(finalValue.sub_id), setVideoText(finalValue.subsubName), setVideoURL(finalValue.youtTubeURL)) }>{finalValue.subsubName}</li></ul>
                                                                                            }
                                                                                            {/* <li class="sub-sub-module-text active-font-color">{finalValue.subsubName}</li> */}
                                                                                            {/* <li class="sub-sub-module-text active-font-color">{finalValue.sub_id}</li> */}
                                                                                    {/* </ul>  */}
                                                                                    </div>
                                                                            )
                                                                        })
                                                                        
                                                                                                        : null
                                                                    }
                                                                </> 
                                                                :null
                                             }
                                             </>   
                                        )
                                    }) : null 
                                )
                           }) 
                        }
                            {/* {
                                activeSubModule === 1 ? <>
                                                        <div class="round-box-arrange">
                                                            <div class="round-box active-back-color">
                                                                <h3 class="round-box-text white-font-color">1</h3>
                                                            </div>
                                                                <h3 class="sub-module-text active-font-color">Create a test</h3>
                                                        </div>
                                                      
                                                        {
                                                            activeSubId === '1.1' ?  <div class="sub-sub-module-cont">
                                                                                        <ul>
                                                                                            <li class="sub-sub-module-text active-font-color">How to create a Test?</li>
                                                                                         </ul>
                                                                                    </div> :
                                                                                    <div class="sub-sub-module-cont">
                                                                                    <ul>
                                                                                        <li class="sub-sub-module-text ">How to create a Test2?</li>
                                                                                            </ul>
                                                                                </div>

                                                        }
                                                        
                                                        </>
                                                        :
                                                        <div class="round-box-arrange">
                                                        <div class="round-box">
                                                            <h3 class="round-box-text">1</h3>
                                                        </div>
                                                        <h3 class="sub-module-text">Overview</h3>
                                                        </div>
                            }
                             */}
                      
                         {/* <div class="sub-sub-module-cont">
                           <ul>
                             <li class="sub-sub-module-text">How to create a Test?</li>
                                 </ul>
                         </div> */}

                        {/* <div class="sub-sub-module-cont">
                            <ul>
                                <li class="sub-sub-module-text">How to create a Test?</li>
                            </ul>
                        </div> */}
                        {/* <div class="round-box-arrange">
                            <div class="round-box">
                                <h3 class="round-box-text">2</h3>
                            </div>
                            <h3 class="sub-module-text">Overview</h3>
                        </div> */}
                    </div>
                    <div class="video-player-cont">
                        <div class="video-player">
                            {/* <iframe width="770" height="443" src="https://www.youtube.com/watch?v=kKJpFuEiJQs"> </iframe> */}
                            <iframe width="100%" height="80%" src={videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div class="space-middle">
                                <h3 class="video-text">{videoText}</h3>
                                <div class="copy-manual-arrange">
                                    <div class="copy-manual-arrange">
                                        <img src="images/Copy_Icon.svg" width="20" height="20" alt="copy_icon"/>
                                        <h3 class="copy-text">Copy Link</h3>
                                    </div>
                                    <div class="copy-manual-arrange">
                                        <a href="https://online.pubhtml5.com/gihk/ooib/#p"  target="_blank" ><h3 class="copy-text2">User Manual</h3></a>
                                        <a href="https://online.pubhtml5.com/gihk/ooib/#p"  target="_blank" ><img class="user-manual-round-box"src="images/Manual icon.svg" width="20" height="20" alt="copy_icon"/></a>
                                    </div>
                                </div>
                            </div>

                            <div class="video-role-type">
                                <h3 class="role-box-cont">Admin</h3>
                                <h3 class="role-box-cont">Teacher</h3>
                            </div>
                               
                        </div>
                        
                    </div>
                </div>
                
                
            </div>
        </div>
      </>
    )
  
}

