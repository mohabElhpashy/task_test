    import React, { Fragment, useState,useEffect } from "react";
    import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
    import Style from "./Home.module.css";
    import Logo from "../../assest/Images/Logo.PNG"; 
    import Vector from "../../assest/Images/Vector.svg";
    import { Card } from "react-bootstrap";
    import CardImg from "../../assest/Images/Courses.PNG";
    import Rating from "../../assest/Images/Rating.PNG";
    import Four_half from "../../assest/Images/four_half.PNG";
    import Four from "../../assest/Images/four.PNG";
    import three_half from "../../assest/Images/three_half.PNG";
    import three from "../../assest/Images/three.PNG";
    import { IoMdReorder } from "react-icons/io";
    import "bootstrap/dist/css/bootstrap.min.css";
    import "aos/dist/aos.css";
    import Footer from '../Footer/Footer'

    import Aos from "aos";

    import "aos/dist/aos.css";


    function Home() {
      const allCourses = ["", "", "", "", "", "", "", "", "", "", "", ""];
      const [Show_Header, setShowHeader] = useState(false);
      const[ShowCategory,setShowCategory]=useState(false)
      const ShowHeader = () => {
        setShowHeader(!Show_Header);
      };
      const Show_Categ = () => {
        setShowCategory(!ShowCategory);
      };
      useEffect(()=>{
        Aos.init({ duration: 1000 });

      })
      return (
        <Fragment>
          <section>
            <header className={Style.Header_Home}>
              <img src={Logo} alt="" />
              <div id="nav" className={Style.Expolre}>
                <h6>
                  Expolre <img src={Vector} alt="" />
                </h6>
                <div className={Style.InputDiv}>
                  <AiOutlineSearch size={30} color="gray" />
                  <input placeholder="Search by Name/Category" type="search" />
                </div>
              </div>
              <div id="nav" className={Style.Login}>
                <h6>join As instructor</h6>
                <h6>Login</h6>
                <button>Sign up</button>
              </div>
              <IoMdReorder
                onClick={ShowHeader}
                color="#00d66c"
                size={40}
                className={Style.THreeDot}
              />
            </header>
          </section>
          {Show_Header ? (
            <div data-aos="fade-down" className={Style.ShowHeader}>
              <h6>join As instructor</h6>
              <h6>Login</h6>
              <button>Sign up</button>
              <div className={Style.InputDiv}>
                <AiOutlineSearch size={30} color="gray" />
                <input placeholder="Search by Name/Category" type="search" />
              </div>
            </div>
          ) : null}

          <div className={Style.Main}>
            <h4 style={{ textAlign: "left", fontWeight: "bold" }}>
              Display 3,301 total results for "Tasweeq"
            </h4>
            <div className={Style.InfoLinks}>
              <h6 style={{ borderBottom: "2px solid #00d66c", color: "#00d66c" }} onClick={Show_Categ}>
                Courses <span style={{ color: "black" }}>(6)</span>
              </h6>
              <h6>Diblomas(5)</h6>
              <h6>Articlcles(5)</h6>
            </div>
          </div>

          <div className={Style.Content}>
          <div id="aho" data-aos="fade-right" className={Style.Categories}>
              <div>
                <h5 style={{ textAlign: "left" }}>Categories</h5>
                <hr />
                <h5 style={{ color: "gray", textAlign: "left" }}>
                  Digital MArkting
                </h5>
                <h5 style={{ color: "gray", textAlign: "left" }}>
                  Human Resources
                </h5>
                <h5 style={{ color: "gray", textAlign: "left" }}>
                  Entrepreneurship
                </h5>
                <h5 style={{ color: "gray", textAlign: "left" }}>Management</h5>
                <h5 style={{ color: "gray", textAlign: "left" }}>Sales</h5>
                <h5 style={{ color: "gray", textAlign: "left" }}>MArkting</h5>
                <h6 style={{ color: "darkblue", textAlign: "left" }}>Load more+</h6>
              </div>
              <div style={{ marginTop: "30px", textAlign: "left" }}>
                <h5 style={{ textAlign: "left" }}>Courses Rating</h5>
                <hr />
                <div>
                  <input
                    style={{ textAlign: "center" }}
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <label for="html">
                    <img src={Four_half} alt="" />
                  </label>
                </div>
                <div>
                  {" "}
                  <input
                    style={{ textAlign: "center" }}
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                   {" "}
                  <label for="html">
                    <img src={Four} alt="" />
                  </label>{" "}
                </div>
                <div></div>
                <div>
                  {" "}
                  <input
                    style={{ textAlign: "center" }}
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                   {" "}
                  <label for="html">
                    <img src={three_half} alt="" />
                  </label>
                </div>
                <div>
                  <input
                    style={{ textAlign: "center" }}
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                   {" "}
                  <label for="html">
                    <img src={three} alt="" />
                  </label>
                </div>
              </div>

              <div style={{ marginTop: "30px", textAlign: "left" }}>
                <h5 style={{ textAlign: "left" }}> Level</h5>
                <hr />
                <div>
                  <input style={{ textAlign: "center" }} type="checkbox" />{" "}
                  <label for="html">Beginner</label>
                </div>
                <div>
                  {" "}
                  <input style={{ textAlign: "center" }} type="checkbox" /> {" "}
                  <label for="html">immediate</label>{" "}
                </div>
                <div>
                  {" "}
                  <input style={{ textAlign: "center" }} type="checkbox" /> {" "}
                  <label for="html">High Level</label>
                </div>
              </div>

              <div style={{ marginTop: "30px", textAlign: "left" }}>
                <h5 style={{ textAlign: "left" }}> Time</h5>
                <hr />
                <div>
                  <input style={{ textAlign: "center" }} type="checkbox" />{" "}
                  <label for="html">Less Than 4hrs</label>
                </div>
                <div>
                  {" "}
                  <input style={{ textAlign: "center" }} type="checkbox" /> {" "}
                  <label for="html">Less Than 8hrs</label>{" "}
                </div>
                <div>
                  {" "}
                  <input style={{ textAlign: "center" }} type="checkbox" /> {" "}
                  <label for="html">More Than 8hrs</label>
                </div>
              </div>
            </div>
            {ShowCategory?<div  data-aos="fade-right"className={Style.ShowCategory}>
              <div>
                <h5 style={{ textAlign: "left" }}>Categories</h5>
                <hr />
                <h5 style={{ color: "gray", textAlign: "left" }}>
                  Digital MArkting
                </h5>
                <h5 style={{ color: "gray", textAlign: "left" }}>
                  Human Resources
                </h5>
                <h5 style={{ color: "gray", textAlign: "left" }}>
                  Entrepreneurship
                </h5>
                <h5 style={{ color: "gray", textAlign: "left" }}>Management</h5>
                <h5 style={{ color: "gray", textAlign: "left" }}>Sales</h5>
                <h5 style={{ color: "gray", textAlign: "left" }}>MArkting</h5>
                <h6 style={{ color: "darkblue", textAlign: "left" }}>Load more+</h6>
              </div>
              <div style={{ marginTop: "30px", textAlign: "left" }}>
                <h5 style={{ textAlign: "left" }}>Courses Rating</h5>
                <hr />
                <div>
                  <input
                    style={{ textAlign: "center" }}
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <label for="html">
                    <img src={Four_half} alt="" />
                  </label>
                </div>
                <div>
                  {" "}
                  <input
                    style={{ textAlign: "center" }}
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                   {" "}
                  <label for="html">
                    <img src={Four} alt="" />
                  </label>{" "}
                </div>
                <div></div>
                <div>
                  {" "}
                  <input
                    style={{ textAlign: "center" }}
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                   {" "}
                  <label for="html">
                    <img src={three_half} alt="" />
                  </label>
                </div>
                <div>
                  <input
                    style={{ textAlign: "center" }}
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                   {" "}
                  <label for="html">
                    <img src={three} alt="" />
                  </label>
                </div>
              </div>

              <div style={{ marginTop: "30px", textAlign: "left" }}>
                <h5 style={{ textAlign: "left" }}> Level</h5>
                <hr />
                <div>
                  <input style={{ textAlign: "center" }} type="checkbox" />{" "}
                  <label for="html">Beginner</label>
                </div>
                <div>
                  {" "}
                  <input style={{ textAlign: "center" }} type="checkbox" /> {" "}
                  <label for="html">immediate</label>{" "}
                </div>
                <div>
                  {" "}
                  <input style={{ textAlign: "center" }} type="checkbox" /> {" "}
                  <label for="html">High Level</label>
                </div>
              </div>

              <div style={{ marginTop: "30px", textAlign: "left" }}>
                <h5 style={{ textAlign: "left" }}> Time</h5>
                <hr />
                <div>
                  <input style={{ textAlign: "center" }} type="checkbox" />{" "}
                  <label for="html">Less Than 4hrs</label>
                </div>
                <div>
                  {" "}
                  <input style={{ textAlign: "center" }} type="checkbox" /> {" "}
                  <label for="html">Less Than 8hrs</label>{" "}
                </div>
                <div>
                  {" "}
                  <input style={{ textAlign: "center" }} type="checkbox" /> {" "}
                  <label for="html">More Than 8hrs</label>
                </div>
              </div>
            </div>:null}
            

            <div className={Style.AllCourse}>
              <h5 style={{ textAlign: "left", color: "darkblue" }}>
                All Courses(200 courses)
                <hr />
              </h5>
              <div className={Style.map}>
                {allCourses.map((Courses) => {
                  return (
                    <Card onClick={()=>window.location="/diploma"} style={{ cursor:'pointer',width: "18rem", marginTop: "20px" }}>
                      <Card.Img variant="top" src={CardImg} />
                      <Card.Body>
                        <Card.Title style={{ color: "#00d66c" }}>
                          Markting and advertising on YouTube
                        </Card.Title>
                        <h6 style={{ textAlign: "left", color: "blue" }}>
                          <AiOutlineUser /> Ahmed Za'tar
                        </h6>
                        <Card.Text style={{ color: "gray", textAlign: "left" }}>
                          The Courses Covers how to deal With YouTube,and how you
                          can make money from it. from the very First creation of
                          Your
                        </Card.Text>
                      </Card.Body>
                      <Card.Img
                        style={{ width: "138px", marginBottom: "25px" }}
                        variant="bottom"
                        src={Rating}
                      />
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
          <Footer/>
        </Fragment>
      );
    }

    export default Home;
