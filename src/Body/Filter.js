import React, { Component } from 'react'
import '../CSS/Filter.css'
import searchImg from '../images/search.png'
import closeImg from '../images/close.png'


const fitlerHeadings = [
  {
    id: 1,
    name : 'Orientation',
    types : ['Engineering', 'Medical']
  },
  {
    id : 2,
    name : 'Class',
    types : ['class 11', 'Class 12', 'Class 13'] 
  },
  {
    id : 3,
    name : 'State',
    types : ['Andhra Pradesh', 'Telangana', 'Punjab', 'Maharashtra'] 
  },
  {
    id : 4,
    name : 'City',
    types : ['Hyderabad', 'Warangal', 'Tirupathi', 'Nanded', 'Vijaywada', 'Kurnool'] 
  },
  {
    id : 5,
    name : 'Section',
    types : ['Sec -1', 'Sec -2', 'Sec -3', 'Sec -4'] 
  },
  {
    id : 6,
    name : 'Boys Section',
    types : ['Boys -1', 'Boys -2', 'Boys'] 
  }
  
]

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    return (
      <>
        <div class="filter-cont">
            <div class="filter-head">
                <div class="arrange">
                  <h3 class="filter-text">Filter by</h3>
                  <h4 class="clear-text">Clear All</h4>
                </div>
            </div> 

            {
              fitlerHeadings.map((index)=>
              <div key={index.id}>
              <div class="filter-body" id="checkBox1">
                  <h3 class="filter-type-text">{index.name}
                  { this.state.show === false ? <img onClick={() => this.setState({ show: true})} class="search-filt-icon" src={searchImg} width="10" height="10" alt="searchImage"/> : null}
                  </h3>
                  {
                    this.state.show === true ?  <div class="img-arrange"><input  class="no-outline" type="search" placeholder='Search Orientation'/> 
                      <img onClick={() => this.setState({ show: false})} src={closeImg} width="10" height="10" alt="close"/></div> 
                    : null
                  }

                  { index.types.map((details)=>
                    
                    <div class="checkbox-cont arrange">
                      <div>
                        <input  class="checkbox-box" type="checkbox" id="1" name="engineering" value="engineering"/>
                        <label>{details}</label>
                      </div>
                      <div>
                        <h3 class="count-text">3</h3>
                      </div>
                    </div>
                    
                    )
                  }

                 
              </div>
              </div>
              )
              }


        </div>

      </>
    )
  }
}
