
import './App.css';
import Welcome from './Media/welcome.jpg';
function Login() {
  return (
   <>
      <div className="container">
          <div className="container-fluid nav_bg">
                  <div className="row">
                              <div className="col-10 mx-auto">
                                  <img src={Welcome} alt="welcome.jpg"  className="img-responsive"/>
                              </div>
                  </div>
                  <h1 class="section-heading"> Escape From Library</h1>
                  
                  <hr class="primary"></hr>
                  <div>
                    <p className="text-center storytext">
                    This is a series of three quick games from Escape From Library,You need everyone to solve the puzzles. You will get hints it will intresting game for you .
                    Teamwork makes the dream work.
                    </p>
                  </div>
                  <form action="scaperoom1">
                      <div className="container">
                      <div className="row g-3">
                      <div className="col-auto">
                          <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                      </div>
                      <div className="col-auto">
                          <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                      </div>
                      </div>

                      <button  className="button" >Login</button>
                      </div>
                  </form>
          </div>
          </div>
  </>
  );
}

export default Login;
