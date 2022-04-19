import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../statewise/Statewise.css";

const Statewise=()=>{

    const [data,setData] = useState([]);

    const getCoviedData=async()=>{
      const res = await fetch('https://data.covid19india.org/data.json');
      const actualData= await res.json();
      console.log(actualData.statewise);
      setData(actualData.statewise)
    };

    useEffect(()=>{
        getCoviedData();
    },[]);
return(
    <>
        
        <div className='container-fluid mt-5'>
            <div className='main-heading'>
            <h1 className='mb-5 text-center'>All <spam className='font-weight-bold'>India</spam> Covied-19 Dashbord</h1>
            </div>
            <div className='table-responsive'>
                <table className='table table-hover'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((currElem, ind)=>{
                                return(
                                    <>
                                    <tr key={ind}>
                                        <td>{currElem.state}</td> 
                                        <td>{currElem.confirmed}</td> 
                                        <td>{currElem.recovered}</td> 
                                        <td>{currElem.deaths}</td> 
                                        <td>{currElem.active}</td> 
                                        <td>{currElem.lastupdatedtime}</td> 
                                    </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
)
};

export default Statewise;