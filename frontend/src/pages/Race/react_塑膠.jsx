import React, { useState }  from "react";
import { useNavigate } from 'react-router-dom';
import "./css/hong.css";
import background_image from './background/背景塑膠.png'
import { useAuth } from "../../useAuth";
import axios from "axios";

export default function Plastic(){
    const {loggedIn} = useAuth();
    const navigate = useNavigate();
    const [ID, setid] = useState('');
    const [a, seta] = useState('0');
    const [b, setb] = useState('0');
    const [c, setc] = useState('0');
    const achange = (e) => seta(e.target.value);
    const idchange = (e) => setid(e.target.value);
    const bchange = (e) => setb(e.target.value);
    const cchange = (e) => setc(e.target.value);
    const handleSave  = (e) => {
        e.preventDefault();
        if(ID === "") {
            alert("請輸入使用者名稱");
        }else if(!(Number(a) >= 0 && Number(a) < 1000) || (parseInt(a) < a)){
            alert(`「節省塑膠袋數量」欄位請輸入0~999的整數`);
        }else if(!(Number(b) >= 0 && Number(b) < 1000) || (parseInt(b) < b)){
            alert(`「節省塑膠瓶數量」欄位請輸入0~999的整數`);
        }else if(!(Number(c) >= 0 && Number(c) < 1000) || (parseInt(c) < c)){
            alert(`「節省飲料杯數量」欄位請輸入0~999的整數`);
        }else{
            if(a === "") seta("0");
            if(b === "") setb("0");
            if(c === "") setc("0");
            const newuser = {
                id: ID,plastic: Number(a)+Number(b)+Number(c),meat: 0,dish: 0,trans: 0
            }
    
            const fetchData = async () => {
                try {
                    const {data} = await axios.post('http://localhost:8000/users',newuser)
                    if(data.id === ""){
                        alert("使用者名稱錯誤\n找不到您的帳號，請檢查輸入是否正確。\n若尚未註冊，請點擊上方註冊按鈕。");
                    }else navigate('/rank');
                } catch (error) {alert('fetch error')}
            };
            fetchData();
        }
    };
    return(
        <div className="form-container" style={{backgroundImage:`url(${background_image})`}}>
        <h3><b>
        <form onSubmit={handleSave}>
        <fieldset>
        <h2><b>節省塑膠製品</b></h2>
        <br />
        <div>
        <b><label>您的使用者名稱：：</label></b>
        <input id="ID" onChange={idchange} />
        <br /><br />
        </div>
        <div>
        <b><label>節省塑膠袋數量（個）：</label></b>
        <input id="a" onChange={achange} />
        <br /><br />
        </div>
        <div>
        <b><label>節省塑膠瓶數量（個）：</label></b>
        <input id="b" onChange={bchange} />
        <br /><br />
        </div>
        <div>
        <b><label>節省飲料杯數量（個）：</label></b>
        <input id="c" onChange={cchange} />
        <br /><br />
        </div>
        <br />
        <button type="submit" className="form-button">提交今日環保成果</button>
        </fieldset>
        </form> 
        </b></h3></div>
    );
}