import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';

function Price(){
    // creating state variable to hold the coin data
    const [coin, setCoin] = useState(null);
    // accessing params object in order to get the symbol param
    const params = useParams();
    console.log(params);
    // storing api key into variable
    const apiKey = process.env.REACT_APP_API_KEY;
    // creating a variable to store the symbol using the params created earlier in file
    const symbol = params.symbol;
    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
    const getCoin = async () => {
        try {
            // we get the data
            const res = await axios.get(url);
            // set data into state
            setCoin(res.data);
        } catch (e) {
           console.error(e) 
        }
    }
    // call the getCoin function when the component renders the first time
    useEffect(() => {
        getCoin()
    }, []);
    // 
    const loaded = () => {
        return(
            <div>
                <h1>{coin.asset_id_base}/{coin.asset_id_base}</h1>
                <h2>${coin.rate}</h2>
            </div>
        )
    }
    const loading = () => <h1>Loading...</h1>
    return coin && coin.rate ? loaded() : loading
}

export default Price;