import { useContext } from "react";
import { MoneyContext } from "../GrandPa/GrandPa";


const Sister = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Sister</h2>
            <p>Money:{money}</p>
            <button 
            disabled={money < 450}
            onClick={() => {
                if(money >=450){
                    setMoney(money-50);
                }else{
                    alert("Not enough money!")
                }
            }}>Spend 50 Taka</button>
            {
                money < 450 && <p style={{color:'red'}}>Not enougn money to spend</p>
            }
        </div>
    );
};

export default Sister;