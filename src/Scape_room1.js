import React from "react";
import './App.css';
import Img from './Media/img_1.jpg';

function Scape_room1()
    {
    return(
        <>
        <div className="container">
        


            <div  className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <img src={Img} alt="puzzel.jpg" className="img-responsive"/>
                        </div>
                    
                    </div>
                <div>
                <p>There are nothing in the books , but you need to do something for scape from Library 
                It doesn't take long before you get up and switch the light on .Strangely, there is something in the corner you've notice before. It look like a pink paper.
                </p>
                <p>TIme never stop for anyone!!</p>
                </div>
                
                
                <form  >
                <div className="_1toD0">
                    <div className="_1TTNX">
                    <div className="_3FJnW">Please enter the password below.</div>
                        </div>
                        <div className="_2DNQC">
                            <div data-testid="password" className="_3T5g8">
                                <input id="password" placeholder="Password" type="password" required="" name=""/>
                                </div></div>
                                <div className="h71Pg"><p className="Nrnr8" data-testid="errorMessage" >
                                
                                </p><button type="submit" className="button" data-testid="submitButton"  onClick= "validation()">Go</button>
                                </div></div>
                </form>
                </div>
                    <h1>Hint!</h1>
                    <p>Every problem has answer in the beginnig </p>
                </div>
                
            
                
             
            
       </>
    );

}


export default Scape_room1 ;