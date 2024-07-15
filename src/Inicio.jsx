import './inicio.css'
import fac from './fac.webp'
import google from './google.webp'
import sho from './sho.webp'
import yo from './yo.webp'
 
const Inicio = () => {
    return ( <> 
    
<div className="conform">
<div className="car">
    <marquee>carlos daniel</marquee>
</div>

<div className="kl">
    <div className="unocon">
        <h1 className="descripcionh1">actividad 1</h1>
        <div className="nmm">
            <div className="pri">
                <img src={sho} alt="" />
            </div>
            <div className="dd">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae libero alias voluptate laborum molestiae quis ullam tempora, maiores accusamus, nesciunt illo, eius optio itaque sunt eum quisquam. Placeat, praesentium.</p>
            </div>
            <a href="http://127.0.0.1:5000" className="fac sho">shopifi</a>
        </div>
    </div>
    
    <div className="unocon">
        <h1 className="descripcionh1">actividad 2</h1>
        <div className="nmm">
            <div className="pri">
                <img src={fac} alt="" />
            </div>
            <div className="dd">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae libero alias voluptate laborum molestiae quis ullam tempora, maiores accusamus, nesciunt illo, eius optio itaque sunt eum quisquam. Placeat, praesentium.</p>
            </div>
            <a href="http://127.0.0.1:5001" className="fac">facebook</a>
        </div>
    </div>
    
    <div className="unocon">
        <h1 className="descripcionh1">actividad 4</h1>
        <div className="nmm">
            <div className="pri">
                <img src={google} alt="" />
            </div>
            <div className="dd">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae libero alias voluptate laborum molestiae quis ullam tempora, maiores accusamus, nesciunt illo, eius optio itaque sunt eum quisquam. Placeat, praesentium.</p>
            </div>
            <a href="http://127.0.0.1:5002" className="fac google">maps</a>
        </div>
    </div>
    
    <div className="unocon">
        <h1 className="descripcionh1">youtube</h1>
        <div className="nmm fg">
            <div className="pri">
                <img src={yo} alt="" />
            </div>
            <div className="dd">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae libero alias voluptate laborum molestiae quis ullam tempora, maiores accusamus, nesciunt illo, eius optio itaque sunt eum quisquam. Placeat, praesentium.</p>
            </div>
            <a href="http://127.0.0.1:5002" className="fac yo">youtube</a>
        </div>
    </div>
    
</div>
</div>
    </> );
 }
  
 export default Inicio; 