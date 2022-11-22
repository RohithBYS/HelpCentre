import '../CSS/Table.css'
import copyImg from'../images/copy.png'

export default function Table(props){
    // console.log("Data "+props.data[0].details[0].Orientation)
    const {value}= props
    // console.log("Props : "+value)
    return (
        <>
            {/* <h3>{props.value.data[0].details[0].Orientation}</h3> */}
           
            <div class="table-cont">
            {/* <h3>{props.value}</h3> */}
                <table>

                    <thead>
                        <th>ORIENTATION</th>
                        <th>CLASS</th>
                        <th>STATE</th>
                        <th>CITY</th>
                        <th>SECTION</th>
                        <th>BOYS SECTION</th>
                        <th>GIRLS SECTION</th>
                        <th>HIERARCHY ID</th>
                        <th>STUDENT ID</th>
                    </thead>

                    <tbody>
                       {
                        value.map((index)=>
                            index.details[0].Orientation === 'Engineering' ? 
                            <tr>
                                <td>{index.details[0].Orientation}</td>
                                <td>{index.details[1].Class}</td>
                                <td>{index.details[2].State}</td>
                                <td>{index.details[3].City}</td>
                                <td>{index.details[4].Section}</td>
                                <td>{index.details[5].BoysSection}</td>
                                <td>{index.details[6].GirlsSection }</td>
                                <td>{index.id} <img src={copyImg} widht="15" height="15" alt="copy" /></td>
                                <td>{index.details[7].Count}</td>
                            </tr> : null
                        )
                       }

                        {/* <tr>
                            <td>{value[0].details[0].Orientation}</td>
                            <td>{value[0].details[1].Class}</td>
                            <td>{value[0].details[2].State}</td>
                            <td>{value[0].details[3].City}</td>
                            <td>{value[0].details[4].Section}</td>
                            <td>{value[0].details[5].BoysSection}</td>
                            <td>{value[0].details[6].GirlsSection }</td>
                            <td>{value[0].id} <img src={copyImg} widht="15" height="15" alt="copy" /></td>
                            <td>{value[0].details[7].Count}</td>
                        </tr> */}
{/* 
                        <tr>
                            <td>Engineering</td>
                            <td>Class 11</td>
                            <td>Telangana</td>
                            <td>Hyderabad</td>
                            <td>Section B</td>
                            <td>Boys Section 1</td>
                            <td>KPHB</td>
                            <td>62a3ca73fe29b356208858d1 <img src={copyImg} widht="15" height="15" alt="copy" /></td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Engineering</td>
                            <td>Class 11</td>
                            <td>Telangana</td>
                            <td>Hyderabad</td>
                            <td>Section B</td>
                            <td>Boys Section 1</td>
                            <td>KPHB</td>
                            <td>62a3ca73fe29b356208858d1 <img src={copyImg} widht="15" height="15" alt="copy"/></td>
                            <td>10</td>
                        </tr>       */}
                    </tbody>
                </table>
            </div>
        </>
    )
  
}
