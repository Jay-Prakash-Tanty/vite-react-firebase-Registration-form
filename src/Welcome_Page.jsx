import { useState,useEffect } from 'react'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'


const Welcome_Page = ()=>{

    const [BackGround_img, SetBackGround_img] = useState('form_02') ;    
    const [BackGround_btn, SetBackGround_btn] = useState('img_change_button_02') ;
useEffect(()=>{

    console.log("seoncdirst")

    console.log("first:"+BackGround_img)
  
                                                                                                                                                    // if(vaur!=1)
                                                                                                                                                    //     {
                                                                                                                                                    //       dadad();
                                                                                                                                                    //     }
                                                                                                                                                    //   function dadad (){
        
    
        if(document.querySelector(".Invisible_class")!=undefined){
          document.querySelector(".Invisible_class").classList.remove("Invisible_class");
        }
    
        console.log("value of backhround image:"+BackGround_img)
        document.querySelector(`.${BackGround_img}`).classList.add("Invisible_class");
        // document.querySelector(`.${BackGround_img}`).style.transition="1000ms";
    
    
        const response = document.querySelectorAll(".Invisible_class");
        // if(response[1]!=undefined)
        //   {
        //     response[0].classList.remove("Invisible_class");
        //   }
                                                                                                                                                        // }
    },[BackGround_img]
    )
    useEffect(()=>{

      
      
      if(document.querySelector(".button_of_king")!=undefined){    
        document.querySelector(".button_of_king").classList.remove("button_of_king");
      }
  
      console.log("value of backhround image:"+BackGround_btn)
      document.querySelector(`.${BackGround_btn}`).classList.add("button_of_king");

      // document.querySelector(`.${BackGround_img}`).style.transition="1000ms";
  
  
      // const response = document.querySelectorAll(".Invisible_class");
      // if(response[1]!=undefined)
      //   {
      //     response[0].classList.remove("Invisible_class");
      //   }
                                                                                                                                                      // }
  },[BackGround_btn]
  )

const NNavigate = useNavigate();
const not_navigate = (lilink)=>{
  NNavigate(lilink)
}
    
    return(
        <div className={'backGround_image'+" "}
      
        //BackGround_img
        
        // style={{backgroundImage: `url("/src/Images/${BackGround_img}.jpg")`}}
    //style={{opacity:1}}
        >
          
          <div >
    <img className='form_02 uhmmm'  src="/src/Images/form_02.jpg" alt="image" />
    <img className='form_03 uhmmm'  src="/src/Images/form_03.jpg" alt="image" />
    <img className='form_04 uhmmm'  src="/src/Images/form_04.jpg" alt="image" />
    <img className='form_06 uhmmm'  src="/src/Images/form_06.jpg" alt="image" />
    <img className='form_07 uhmmm'  src="/src/Images/form_07.jpg" alt="image" />
    {/* <img className='form_08 uhmmm'  src="/src/Images/form_08.jpg" alt="image" /> */}
    {/* <img className='form_09 uhmmm'  src="/src/Images/form_09.jpg" alt="image" /> */}
    {/* <img className='form_10 uhmmm'  src="/src/Images/form_10.jpg" alt="image" /> */}
    {/* <img className='form_11 uhmmm'  src="/src/Images/form_11.jpg" alt="image" /> */}
    <img className='form_12 uhmmm'  src="/src/Images/form_12.jpg" alt="image" />
    <img className='form_13 uhmmm'  src="/src/Images/form_13.jpg" alt="image" />
    <img className='form_14 uhmmm'  src="/src/Images/form_14.jpg" alt="image" />
    <img className='form_15 uhmmm'  src="/src/Images/form_15.jpg" alt="image" />
    {/* <img className='form_16 uhmmm'  src="/src/Images/form_16.jpg" alt="image" /> */}
    {/* <img className='form_17 uhmmm'  src="/src/Images/form_17.jpg" alt="image" /> */}
    <img className='form_18 uhmmm'  src="/src/Images/form_18.jpg" alt="image" />
    <img className='form_19 uhmmm'  src="/src/Images/form_19.jpg" alt="image" />
    <img className='form_20 uhmmm'  src="/src/Images/form_20.jpg" alt="image" />
    {/* <img className='form_21 uhmmm'  src="/src/Images/form_21.jpg" alt="image" /> */}
    {/* <img className='form_22 uhmmm'  src="/src/Images/form_22.jpg" alt="image" /> */}
    {/* <img className='form_23 uhmmm'  src="/src/Images/form_23.jpg" alt="image" /> */}
    {/* <img className='form_24 uhmmm'  src="/src/Images/form_24.jpg" alt="image" /> */}
    {/* <img className='form_25 uhmmm'  src="/src/Images/form_25.jpg" alt="image" /> */}
    {/* <img className='form_26 uhmmm'  src="/src/Images/form_26.jpg" alt="image" /> */}
    <img className='form_27 uhmmm'  src="/src/Images/form_27.jpg" alt="image" />
    {/* <img className='form_28 uhmmm'  src="/src/Images/form_28.jpg" alt="image" /> */}
    <img className='form_29 uhmmm'  src="/src/Images/form_29.jpg" alt="image" />
    {/* <img className='form_30 uhmmm'  src="/src/Images/form_30.jpg" alt="image" /> */}
    {/* <img className='form_31 uhmmm'  src="/src/Images/form_31.jpg" alt="image" /> */}
    <img className='form_32 uhmmm'  src="/src/Images/form_32.jpg" alt="image" />
    <img className='form_33 uhmmm'  src="/src/Images/form_33.jpg" alt="image" />
    
  
  
  </div>
  <div className="button_not_so_far">
    <div className="inside_button_not_so_far">
        <button  className="img_change_button img_change_button_02" onClick={()=>{ SetBackGround_img("form_02"); SetBackGround_btn("img_change_button_02"); }}  >click me 02</button>
        <button  className="img_change_button img_change_button_03" onClick={()=>{ SetBackGround_img("form_03"); SetBackGround_btn("img_change_button_03"); }}  >click me 03</button>
        <button  className="img_change_button img_change_button_04" onClick={()=>{ SetBackGround_img("form_04"); SetBackGround_btn("img_change_button_04"); }}  >click me 04</button>
        <button  className="img_change_button img_change_button_06" onClick={()=>{ SetBackGround_img("form_06"); SetBackGround_btn("img_change_button_06"); }}  >click me 06</button>
        <button  className="img_change_button img_change_button_07" onClick={()=>{ SetBackGround_img("form_07"); SetBackGround_btn("img_change_button_07"); }}  >click me 07</button>
        {/* <button  className="img_change_button img_change_button_02" onClick={()=>{ SetBackGround_img("form_08"); ; }}  >click me 08</button>
        <button  className="img_change_button img_change_button_02" onClick={()=>{ SetBackGround_img("form_09"); ; }}  >click me 09</button>
        <button  className="img_change_button img_change_button_02" onClick={()=>{ SetBackGround_img("form_10"); ; }}  >click me 10</button>
        <button  className="img_change_button img_change_button_02" onClick={()=>{ SetBackGround_img("form_11"); ; }}  >click me 11</button> */}
        <button  className="img_change_button img_change_button_12" onClick={()=>{ SetBackGround_img("form_12"); SetBackGround_btn("img_change_button_12"); }}  >click me 12</button>
        <button  className="img_change_button img_change_button_13" onClick={()=>{ SetBackGround_img("form_13"); SetBackGround_btn("img_change_button_13"); }}  >click me 13</button>
        <button  className="img_change_button img_change_button_14" onClick={()=>{ SetBackGround_img("form_14"); SetBackGround_btn("img_change_button_14"); }}  >click me 14</button>
        <button  className="img_change_button img_change_button_15" onClick={()=>{ SetBackGround_img("form_15"); SetBackGround_btn("img_change_button_15"); }}  >click me 15</button>
        {/* <button  className="img_change_button img_change_button_02" onClick={()=>{ SetBackGround_img("form_16"); ; }}  >click me 16</button>
        <button  className="img_change_button img_change_button_02" onClick={()=>{ SetBackGround_img("form_17"); ; }}  >click me 17</button> */}
        <button  className="img_change_button img_change_button_18" onClick={()=>{ SetBackGround_img("form_18"); SetBackGround_btn("img_change_button_18"); }}  >click me 18</button>
        <button  className="img_change_button img_change_button_19" onClick={()=>{ SetBackGround_img("form_19"); SetBackGround_btn("img_change_button_19"); }}  >click me 19</button>
        <button  className="img_change_button img_change_button_20" onClick={()=>{ SetBackGround_img("form_20"); SetBackGround_btn("img_change_button_20"); }}  >click me 20</button>
        {/* <button  className="img_change_button img_change_button_02" onClick={()=>{ SetBackGround_img("form_21"); ; }}  >click me 21</button>
        <button  className="img_change_button img_change_button_02" onClick={()=>{ SetBackGround_img("form_22"); ; }}  >click me 22</button>
        <button  className="img_change_button img_change_button_02" onClick={()=>{ SetBackGround_img("form_23"); ; }}  >click me 23</button>
        <button  className="img_change_button img_change_button_02" onClick={()=>{ SetBackGround_img("form_24"); ; }}  >click me 24</button>
        <button  className="img_change_button img_change_button_02" onClick={()=>{ SetBackGround_img("form_25"); ; }}  >click me 25</button>
        <button  className="img_change_button img_change_button_02" onClick={()=>{ SetBackGround_img("form_26"); ; }}  >click me 26</button> */}
        <button  className="img_change_button img_change_button_27" onClick={()=>{ SetBackGround_img("form_27"); SetBackGround_btn("img_change_button_27"); }}  >click me 27</button>
        {/* <button  className="img_change_button img_change_button_02" onClick={()=>{ SetBackGround_img("form_28"); ; }}  >click me 28</button> */}
        <button  className="img_change_button img_change_button_29" onClick={()=>{ SetBackGround_img("form_29"); SetBackGround_btn("img_change_button_29"); }}  >click me 29</button>
        {/* <button  className="img_change_button img_change_button_02" onClick={()=>{ SetBackGround_img("form_30"); ; }}  >click me 30</button>
        <button  className="img_change_button img_change_button_02" onClick={()=>{ SetBackGround_img("form_31"); ; }}  >click me 31</button> */}
    </div>
  </div>

    <div  className='main_content_2'>

      {/* <Link to="/">HOME PAGE</Link> */}
      
      <div className='Apple_Tree'> 
        <div className='inside_Apple_tree'>
        
          <div className='apple_sun'>
            <b style={{color:"cyan"}}>
              Your Account has been successfully Registered!!!
            </b>
          </div>



          <div className='apple_moon'>To Register Another Account Click Below</div>
          <button onClick={()=>not_navigate("/")}>Register Another Account</button>
        </div>
      </div>
     
    </div>

</div>

    )
}

export default Welcome_Page