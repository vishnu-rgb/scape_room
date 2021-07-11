import React from 'react';
import Img2 from './Media/beautiful_leech.jpg';
import './App.css';
function Scape_room2(){
    return(
        <>
        <div className="container">
                    <div className="container-fluid nav_bg">

                        <div className="row">
                                    <div className="col-10 mx-auto">
                                        <img src={Img2} alt="puzze2.jpg"  className="img-responsive"/>
                                    </div>
                            
                        </div>
                        <div>

                            <p>Suddeny all lights gets close and you hear the voice " come here" !
                               you found a book and it's get fall a page come out from the book .  </p>

                        </div>
                        <div>
                        <form   action="result"> 
                        <div className="_1toD0">
                    <div className="_1TTNX">
                    <div className="_3FJnW">Tell my name :  </div>
                        </div>
                        <div className="_2DNQC">
                            <div data-testid="password" className="_3T5g8">
                                <input id="SM_ROOT_COMP_input" placeholder="Password" autocomplete="off" type="text" required="" />
                                </div></div>
                                <div className="h71Pg"><p className="Nrnr8" data-testid="errorMessage" >

                                </p><button type="submit" className="button" data-testid="submitButton"  onChange="check()">Go</button>
                                </div></div>
                        
                        </form>
                        <div>
                        <h1>Hint ! </h1>
                        <p> </p>
                        </div>
                    </div>
                    </div>
        </div>
        </>
    );
}

export default Scape_room2;