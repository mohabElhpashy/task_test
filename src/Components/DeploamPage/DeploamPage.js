        import React,{useState} from 'react'
        import Style from './DeploamPage.module.css'
        import Logo from "../../assest/Images/Logo.PNG"; 
        import Diploam from '../../assest/Images/Diploamaa.PNG';
        import Vid from '../../assest/Images/Video.PNG';
        import { BsChevronLeft,BsChevronDown,BsChevronRight } from "react-icons/bs";
        import { RiFileShieldLine } from "react-icons/ri";
        import { AiOutlinePlayCircle,AiOutlinePauseCircle } from "react-icons/ai";
        import Visa from "../../assest/Images/Visa.PNG";
import mada from "../../assest/Images/mada.PNG";
import {toArabic} from 'arabic-digits';


        import {
            FaFacebookSquare,
            FaYoutube,
            FaTwitter,
            FaInstagram,
          } from "react-icons/fa";
        function DeploamPage() {
            const [aboutCourse,setaboutCourse]=useState(true)
        
            const Show_description=async()=>{
                 setaboutCourse(false)
                //  document.getElementById("two").style.color="darkblue"
                //  document.getElementById("two").style.borderBottom='3px solid darkblue';
                //  document.getElementById("two").style.height='42px'
                
            }
            const Show_description2=async()=>{
                setaboutCourse(true)
               
           }
            return (
                <div>
                    <header className={Style.Header_Diploam}>
                    <div className={Style.AboutHeader} style={{display:'flex',alignItems:'center'}}>
                            <BsChevronLeft color="blue" size={25}/>
                            <h5>صفحه الدبلومه</h5>
                        </div>
                    <img className={Style.AboutHeader2}  src={Diploam} alt=""/>
                    
                        <div  style={{display:'flex'}}><h5>التسويق والإعلان علي اليوتيوب</h5>
                        <img src={Logo} alt=""/>               </div> 
                        

                    </header>
                    <main>
                        <div className={Style.Content}>
                            <div className={Style.Details}>
                                <div className={Style.FirstLec}>
                                    <div style={{display:'flex',justifyContent:'space-around',height:'3rem',alignItems:'center'}}>  
    <h6 style={{color:'gray'}}>                        <BsChevronLeft color="black" size={15}/>
    {toArabic(5)}مقاطع.{toArabic(15)}دقيقه</h6><h5 style={{fontWeight:'bold'}}>المحاضره الأولي</h5></div>
                                </div>
                            <div style={{backgroundColor:'#B1D8B7',marginTop:'10px'}}>
                            <div  style={{display:'flex',justifyContent:'space-around',
                                height: "50px",
                                alignItems:"center",
                                borderRadius: "5px"


                            ,color:'white',backgroundColor:'#00d66c'}} className={Style.SecLec}><h6>{toArabic("3:20")}د</h6><h6>{toArabic(1)}{" "}التسويق والإعلان علي اليوتيوب<AiOutlinePauseCircle/></h6></div>
                                <div   style={{display:'flex',justifyContent:'space-around'}}className={Style.ThirdLec}><h6>{toArabic("3:20")}د</h6><h6>{toArabic(2)}{" "}التسويق والإعلان علي اليوتيوب<AiOutlinePlayCircle/></h6></div>
                                <div   style={{display:'flex',justifyContent:'space-around'}}className={Style.FourthLec}><h6>{toArabic("3:20")}د</h6><h6>{toArabic(3)}{" "}التسويق والإعلان علي اليوتيوب<AiOutlinePlayCircle/></h6></div>
                                <div   style={{display:'flex',justifyContent:'space-around'}}className={Style.ThirdLec}><h6>{toArabic("3:20")}د</h6><h6>{toArabic(4)}{" "}التسويق والإعلان علي اليوتيوب<AiOutlinePlayCircle/></h6></div>
                                <div   style={{display:'flex',justifyContent:'space-around'}}className={Style.FourthLec}><h6>{toArabic("3:20")}د</h6><h6>{toArabic(5)}{" "}التسويق والإعلان علي اليوتيوب<AiOutlinePlayCircle/></h6></div>

                                </div> 
                            <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',height:'4rem',borderBottom:"1px solid gray",marginTop:'10px'}}><h6 style={{color:'gray'}}><BsChevronDown/>{toArabic(5)}مقاطع.{toArabic(15)}دقيقه</h6><h5 style={{fontWeight:'bold'}}>المحاضره الثانيه</h5></div>
                            <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',height:'4rem',borderBottom:"1px solid gray"}}><h6 style={{color:'gray'}}><BsChevronDown/>{toArabic(5)}مقاطع.{toArabic(15)}دقيقه</h6><h5 style={{fontWeight:'bold'}}>المحاضره الثالثه</h5></div>    
                            <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',height:'4rem'}}><h6 style={{color:'gray'}}><BsChevronDown/>{toArabic(5)}مقاطع.{toArabic(15)}دقيقه</h6><h5 style={{fontWeight:'bold'}}>المحاضره الرابعه</h5></div>    
    
                            
                            </div>
                            <div className={Style.About_Course}>
                                <img src={Vid}alt=""/>
                            </div>

                        </div>
                        <div className={Style.Description}>
                        <div  className={Style.nextandprev}>
                        <div style={{display:"flex",flexDirection:'row',alignItems:'center'}}><BsChevronLeft/><div style={{display:'flex',flexDirection:'column'}}><h6>الكورس التالي</h6><h6 style={{fontWeight:'bold'}}>...التسويق والإعلان علي </h6></div></div>  
                            <div style={{display:"flex",flexDirection:'row',alignItems:'center'}}><div style={{display:'flex',flexDirection:'column',borderLeft:'1px solid gray'}}><h6>الكورس السابق</h6><h6 style={{fontWeight:'bold'}}>التسويق والإعلان علي اليوتيوب</h6></div><BsChevronRight/></div>    

                            </div>
                            <div className={Style.AboutCourse__} >
                            <h7 id="two" style={{cursor:'pointer',borderBottom:!aboutCourse?'3px solid darkblue':null,color:!aboutCourse?"darkblue":null,height:!aboutCourse?'42px':null}} onClick={Show_description}>ملفات مرفقه</h7>

                                <h7 style={{cursor:'pointer'}}>الاسأله</h7>
                                <h7 id="one" onClick={Show_description2} style={{cursor:'pointer',borderBottom:aboutCourse?'3px solid darkblue':null,color:aboutCourse?"darkblue":null,height:aboutCourse?'42px':null}}>عن الكورس</h7>
                        

                            </div>

                            
                        </div>
                        
                    </main>
               {aboutCourse?<div  className={Style.Wasfcourse}><h3>وصف الكورس</h3>
                                <h8>تاريخ النشر:10/6/2020 اخر التحديث10/6/2020</h8>
                                <p> يركز الكورس علي التخطيط التشغيلي عن طريق تحول نتائج التخطيط لمجموعه خطوات توضح كيفيه تطبيق عمليه التطبيق الفعلي لكل مبادره تنفيذيه</p>
                                <h3>محاور الكورس</h3>
                                <h8>تهيئه صفحات الموقع لمحركات البحث</h8>
                                <h8>التسويق من خلال شبكات التواصل الاجتماعي   </h8>
                                <h8>الاعلانات عبر الانترنت</h8>
                                <h8>التسويق عبر البريد الالكتروني</h8>
                                <h8>متابعه وتحليل الحملات الاهلانيه وكيفيه تحسينها</h8>
                                <h8>الحملات التسويقيه</h8>

                        </div>:<div className={Style.Wasfcourses}>
                        <h3> ملفات مرفقه</h3>
                        <div style={{display: "flex",
    justifyContent: "space-between",
    width: "95%",
    marginLeft: "auto",
    borderBottom: "1px solid black"
    ,color:'gray'}}><h5><BsChevronDown/>كل المحاضرات</h5><h5>جميع الملفات</h5></div>
                <ul style={{listStyle:'none'}}>
                <li><span style={{color:'#00d66c',textDecoration:'underline'}}>تحميل</span>{"  "} lorem ipsum<RiFileShieldLine size={30} color="darkblue"/></li>
                <li><span style={{color:'#00d66c',textDecoration:'underline'}}>تحميل</span>{"  "} lorem ipsum dolor site emit lorem<RiFileShieldLine  size={30}color="black"/></li>
                <li><span style={{color:'#00d66c',textDecoration:'underline'}}>تحميل</span>{"  "} lorem ipsum<RiFileShieldLine  size={30} color="darkblue"/></li>
                <li><span style={{color:'#00d66c',textDecoration:'underline'}}>تحميل</span>{"  "} lorem ipsum dolor site emit lorem<RiFileShieldLine  size={30}color="black"/></li>

                </ul>
                        </div>}     
                        <div className={Style.Footer}>
    
     
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          
        }}
      >
        <h3>طرق الدفع</h3>
        <img style={{ marginBottom: "30px", width: "70%",    marginLeft: "auto" }} src={Visa} alt="" />
        <img style={{ marginBottom: "30px", width: "80" }} src={mada} alt="" />
      </div>
      <div style={{ color: "gray", marginTop: "20px" }}>
        <h3>الشروط والاحكام </h3>
        <h5>إنضم كمحاضر</h5>
        <h5>أراء العملاء</h5>
        <h5>إتصل بنا</h5>
      </div>
      <div style={{textAlign:'right'}}>
        <h3>عن الاكاديميه</h3>
        <p>
          أكاديميه اعما بيزنس هي حلم لم يفارق عقل وقلب كل فرد منا في
          فريق إعمل بيزنس وسعينا جميعا بكل قوه وإيمان إلي تحقيقه ونقله 
          من عالم ألاحلام إالي عالم الواقع الملموس
        </p>
        <h5>إنضم الينا علي منصتنا </h5>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            // textAlign:'right'
          }}
        >
          <div>
            <FaFacebookSquare style={{ textAlign:'right'}} size={30} color="white" />
          </div>
          <div>
            {" "}
            <FaYoutube size={30} color="white" />{" "}
          </div>

          <div>
            <FaTwitter size={30} color="white" />{" "}
          </div>

          <div>
            <FaInstagram size={30} color="white" />{" "}
          </div>
        </div>
      </div>
    </div>
                </div>
            )
        }

        export default DeploamPage
