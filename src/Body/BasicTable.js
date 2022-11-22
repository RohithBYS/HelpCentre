import React, {useMemo} from 'react'
import { useState } from 'react'
import { useTable, useGlobalFilter } from 'react-table'
import MOCK_DATA from '../mock_data.json'
import '../CSS/Table.css'
import { COLUMNS } from './Columns'
import { GlobalFilter } from './GlobalFilter'
import  Filter  from './Filter'
import '../CSS/Body.css'
import backarrow from '../images/arrow.png'
import plusImg from '../images/plus.png'
import searchImg from '../images/search.png'
import downimg from '../images/arrow-down.png'
import copyImg from'../images/copy.png'


export const BasicTable = () => {

    const [search, setSearch] = useState(false)
    const columns = useMemo (() => COLUMNS, [])
    const data = useMemo (() => MOCK_DATA, [])
    const [rendData, setRendData] = useState('')

    // const tableInstance = useTable({
    //     columns,
    //     data
    // })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable({
        columns,
        data
    }, useGlobalFilter)

    const { globalFilter} = state

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
                      {
                        search === false ? <div class="small-cont">
                                                <img class="onSearch" src={searchImg} alt="logo" width="20" height="20"  onClick={e=> setSearch(true)}/> 
                                            </div> :

                                            <>
                                            <img class="onSearch" src={searchImg} alt="logo" width="20" height="20" onClick={e=> setSearch(false)} />
                                            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
                                            </>
                                                
                      }  
                        <div class="small-cont">
                            <img src={downimg} alt="logo" width="20" height="20" />
                        </div> 
                    </div>
                </div>
                <div class="arrange-col">
                    <Filter/>
                    {/* Table data */}
                    {/* <BasicTable/> */}
                    
            <div class="table-cont">
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) =>(
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')} </th>
                                )) }
                            </tr>
                        ))
                    }
                    
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row) =>{
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return(
                                                
                                                    // ...cell.getCellProps()
                                                    // setRendData(cell.render('Cell'))
                                                
                                                //  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                 <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                 )
                                            
                                        })
                                    }
                                    
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
                </div>
               
            </div>
       
    </>
  )
}
