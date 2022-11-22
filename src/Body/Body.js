import React, { Component } from 'react'
import Filter from './Filter'
// import Table from './Table'
import '../CSS/Body.css'
import backarrow from '../images/arrow.png'
import plusImg from '../images/plus.png'
import searchImg from '../images/search.png'
import downimg from '../images/arrow-down.png'
import { BasicTable } from './BasicTable'
import { GlobalFilter } from './GlobalFilter'

// const data = [
//     {
//       id: '62a3ca73fe29b356208858d1',
//       details : [
//          {Orientation : 'Engineering'},
//          {Class : 'Class 11'},
//          {State : 'Andhra Pradesh'},
//          {City : 'Hyderabad'},
//          {Section : 'Section B'},
//          {BoysSection : 'Boys Section 1'},
//          {GirlsSection : 'KPHB 1'},
//          {Count : 0}
//       ]
//     },
//     {
//      id: '62943bf41092d46720c3a45d',
//      details : [
//         {Orientation : 'Engineering'},
//         {Class : 'Class 11'},
//         {State : 'Andhra Pradesh'},
//         {City : 'Guntur'},
//         {Section : 'Section A'},
//         {BoysSection : 'Boys Section 1'},
//         {GirlsSection : 'Girls 1'},
//         {Count : 0}
//      ]
//    },
//    {
//      id: '62a3ca73fe29b356208858d1',
//      details : [
//         {Orientation : 'Engineering'},
//         {Class : 'Class 12'},
//         {State : 'Andhra Pradesh'},
//         {City : 'Hyderabad'},
//         {Section : 'Section B'},
//         {BoysSection : 'Boys Section 1'},
//         {GirlsSection : 'KPHB 1'},
//         {Count : 0}
//      ]
//    },
//    {
//      id: '62a3ca73fe29b356208858d1',
//      details : [
//         {Orientation : 'Engineering'},
//         {Class : 'Class 12'},
//         {State : 'Telangana'},
//         {City : 'Hyderabad'},
//         {Section : 'Section B'},
//         {BoysSection : 'Boys Section 1'},
//         {GirlsSection : 'KPHB 1'},
//         {Count : 0}
//      ]
//    },
//    {
//      id: '62a3ca73fe29b356208858d1',
//      details : [
//         {Orientation : 'Engineering'},
//         {Class : 'Class 12'},
//         {State : 'Telangana'},
//         {City : 'Hyderabad'},
//         {Section : 'Section B'},
//         {BoysSection : 'Boys Section 1'},
//         {GirlsSection : 'KPHB 1'},
//         {Count : 0}
//      ]
//    },
//    {
//     id: 'sdfwe532432543t5sdf',
//     details : [
//        {Orientation : 'Medical'},
//        {Class : 'Class 12'},
//        {State : 'Telangana'},
//        {City : 'Hyderabad'},
//        {Section : 'Section B'},
//        {BoysSection : 'Boys Section 1'},
//        {GirlsSection : 'KPHB 1'},
//        {Count : 0}
//     ]
//   }
//    ]
 



export default function Body(){

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     //   data: [
    //     //    {
    //     //      id: '62a3ca73fe29b356208858d1',
    //     //      details : [
    //     //         {Orientation : 'Engineering'},
    //     //         {Class : 'Class 11'},
    //     //         {State : 'AP'},
    //     //         {City : 'Hyderabad'},
    //     //         {Section : 'Section B'},
    //     //         {BoysSection : 'Boys Section 1'},
    //     //         {GirlsSection : 'KPHB 1'},
    //     //         {Count : 0}
    //     //      ]
    //     //    },
    //     //    {
    //     //     id: '62943bf41092d46720c3a45d',
    //     //     details : [
    //     //        {Orientation : 'Engineering'},
    //     //        {Class : 'Class 11'},
    //     //        {State : 'AP'},
    //     //        {City : 'Guntur'},
    //     //        {Section : 'Section A'},
    //     //        {BoysSection : 'Boys Section 1'},
    //     //        {GirlsSection : 'Girls 1'},
    //     //        {Count : 0}
    //     //     ]
    //     //   },
    //     //   {
    //     //     id: '62a3ca73fe29b356208858d1',
    //     //     details : [
    //     //        {Orientation : 'Engineering'},
    //     //        {Class : 'Class 12'},
    //     //        {State : 'AP'},
    //     //        {City : 'Hyderabad'},
    //     //        {Section : 'Section B'},
    //     //        {BoysSection : 'Boys Section 1'},
    //     //        {GirlsSection : 'KPHB 1'},
    //     //        {Count : 0}
    //     //     ]
    //     //   },
    //     //   {
    //     //     id: '62a3ca73fe29b356208858d1',
    //     //     details : [
    //     //        {Orientation : 'Engineering'},
    //     //        {Class : 'Class 12'},
    //     //        {State : 'Telangana'},
    //     //        {City : 'Hyderabad'},
    //     //        {Section : 'Section B'},
    //     //        {BoysSection : 'Boys Section 1'},
    //     //        {GirlsSection : 'KPHB 1'},
    //     //        {Count : 0}
    //     //     ]
    //     //   },
    //     //   {
    //     //     id: '62a3ca73fe29b356208858d1',
    //     //     details : [
    //     //        {Orientation : 'Engineering'},
    //     //        {Class : 'Class 12'},
    //     //        {State : 'Telangana'},
    //     //        {City : 'Hyderabad'},
    //     //        {Section : 'Section B'},
    //     //        {BoysSection : 'Boys Section 1'},
    //     //        {GirlsSection : 'KPHB 1'},
    //     //        {Count : 0}
    //     //     ]
    //     //   }
    //     //   ]
    //     // };

        

    //     // console.log("Data "+this.state.data[0].details[0].Orientation)
    //   }
    // };
     
  
    return (
        <>
            
            <div class="body-cont">
                <div class="top-section">
                    <div class="sub-cont">
                        <img src={backarrow} alt="logo" width="20" height="20" />
                        <h3 class="main-heading">Institute Details</h3>
                        <img src={plusImg} alt="logo" width="20" height="20" />
                    </div>
                    <div class="sub-cont">
                      {/* <input type="search" placeholder='Search here'/> */}
                        <div class="small-cont">
                            <img src={searchImg} alt="logo" width="20" height="20" />
                        </div>
                        <div class="small-cont">
                            <img src={downimg} alt="logo" width="20" height="20" />
                        </div> 
                    </div>
                </div>
                <div class="arrange-col">
                    <Filter/>
                    {/* <Table value={data}/> */}
                    <BasicTable/>
                </div>
               
            </div>
        </>
    )
  
}
