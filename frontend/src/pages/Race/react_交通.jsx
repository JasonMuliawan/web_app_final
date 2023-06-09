import React, { useState }  from "react";
import { useNavigate } from 'react-router-dom';
import "./css/hong.css";
import background_image from './background/背景交通.png'
import axios from "axios";

export default function Tran(){
    const navigate = useNavigate();
    const [walk, setwalk] = useState('0');
    const [bike, setbike] = useState('0');
    const [pub, setpub] = useState('0');
    const [ID, setid] = useState('');
    const walkchange = (e) => setwalk(e.target.value);
    const idchange = (e) => setid(e.target.value);
    const bikechange = (e) => setbike(e.target.value);
    const pubchange = (e) => setpub(e.target.value);
    const handleSave = (e) => {
        e.preventDefault();
        if(ID === "") {
            alert("請輸入使用者名稱");
            navigate('/tran');
        }else if(!(Number(walk) >= 0 && Number(walk) < 1000)){
            alert(`「走了多長的路」欄位請輸入0~999的數字`);
        }else if(!(Number(bike) >= 0 && Number(bike) < 1000)){
            alert(`「騎多遠的單車」欄位請輸入0~999的數字`);
        }else if(!(Number(pub) >= 0 && Number(pub) < 1000)){
            alert(`「搭乘大眾運輸」欄位請輸入0~999的數字`);
        }else{
            if(walk === "") setwalk("0");
            if(bike === "") setbike("0");
            if(pub === "") setpub("0");
            const newuser = {
                id: ID,plastic: 0,meat: 0,dish: 0,trans: 0.068*(Number(walk)+Number(bike)+Number(pub))
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
        <h2><b>減少交通碳排放</b></h2>
        <br />
        <div>
        <b><label>您的使用者名稱：：</label></b>
        <input id="ID" onChange={idchange} />
        <br /><br />
        </div>
        <div>
        <b><label>走了多長的路（KM）：</label></b>
        <input id="walk" onChange={walkchange} />
        <br /><br />
        </div>
        <div>
        <b><label>騎多遠的單車（KM）：</label></b>
        <input id="bike" onChange={bikechange} />
        <br /><br />
        </div>
        <div>
        <b><label>搭乘大眾運輸（KM）：</label></b>
        <input id="pub" onChange={pubchange} />
        <br /><br />
        </div>
        <br />
        <button type="submit" className="form-button">提交今日環保成果</button>
        </fieldset>
        </form> 
        </b></h3></div>
    );
}