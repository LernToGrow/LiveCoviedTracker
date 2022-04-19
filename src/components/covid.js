import React, {useEffect ,useState} from 'react'
import './covid.css';
const Covid = ()=>{
    const [data ,setData] =useState([]);
    const getCovidData = async () =>{
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualdata = await  res.json();
            console.log(actualdata.statewise[0]);
            setData(actualdata.statewise[0])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getCovidData();
    },[]);
    return(
        <><section>
        <div className='container'>
        <h1>🔴 LIVE IN</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        </div>
        <ul>
            <li className='card'>
                <div className='card__main'>
                    <div className='card__innner'>
                        <p className='card__name'><span>OUR</span>COUNTRY</p>
                        <p className='card__total card_small'>INDIA</p>
                    </div>
                </div>                
            </li>
            <li className='card'>
                <div className='card__main'>
                    <div className='card__innner'>
                        <p className='card__name'><span>Total</span>RECOVERD</p>
                        <p className='card__total card_small'>{data.recovered}</p>
                    </div>
                </div>                
            </li>
            <li className='card'>
                <div className='card__main'>
                    <div className='card__innner'>
                        <p className='card__name'><span>Total</span>CONFIRMED</p>
                        <p className='card__total card_small'>{data.confirmed}</p>
                    </div>
                </div>                
            </li>
            <li className='card'>
                <div className='card__main'>
                    <div className='card__innner'>
                        <p className='card__name'><span>Total</span>DEATH</p>
                        <p className='card__total card_small'>{data.deaths}</p>
                    </div>
                </div>                
            </li>
            <li className='card'>
                <div className='card__main'>
                    <div className='card__innner'>
                        <p className='card__name'><span>Last</span>ACTIVE</p>
                        <p className='card__total card_small'>{data.active}</p>
                    </div>
                </div>                
            </li>
            <li className='card'>
                <div className='card__main'>
                    <div className='card__innner'>
                        <p className='card__name'><span>OUR</span>UPDATE</p>
                        <p className='card__total card_small'>{data.lastupdatedtime}</p>
                    </div>
                </div>                
            </li>
        </ul>
        
        </section>
        </>
    )
}
export default Covid