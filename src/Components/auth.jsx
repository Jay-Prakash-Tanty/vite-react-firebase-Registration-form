




//^([\w])+(?:[.][\w]+)*@[\w]+\.[A-Za-z]{2,}(?:[.][a-zA-Z]{2,})*$









import { useNavigate } from 'react-router-dom';



import {auth,googleProvider} from '../Config/firebase.js'
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import { data_base } from '../Config/firebase.js';
import { getDocs,collection } from 'firebase/firestore';
import { addDoc, documentId } from 'firebase/firestore';



import {useState,useEffect} from 'react';

export const Auth = ()=>{



    const Navigate = useNavigate();
    const [uusernname, setuusernname] = useState([]);

    const namescollectionref = collection(data_base, "User-names")


    useEffect(()=>{
        const getnmaesss = async () =>{
    
          //read the data from data base
        try{
              const data = await getDocs(namescollectionref);
              const  filteredData = data.docs.map((doc)=>({
                ...doc.data()
              }
              
            )
          )
              console.log("apple is green:"+JSON.stringify(filteredData))
              setuusernname(filteredData);
        }
        catch(err){
          console.error(err);
        }
        };
        getnmaesss();
      }, [])



    console.log("or are you first ???")
    const form_div = document.getElementById("form_div")

    const [Email,setEmail] = useState("")  
    // console.log("Password value should match :"+Password);
    const [Password,setPassword] = useState("");
    console.log("Password value should match :"+Password);

    let [redder,setredder] = useState("white")
    let [redder_upp,setredder_upp] = useState("white")
    let [redder_low,setredder_low] = useState("white")
    let [redder_num,setredder_num] = useState("white")
    let [redder_spec,setredder_spec] = useState("white")
    let [redder_email,setredder_email] = useState("white")

    let[Email_valid_Y_N, setEmail_valid_Y_N] = useState("Invalid Email id")
    let [Sign_in_Load_ing, setSign_in_Load_ing] = useState("Sign in");

    let [disdis,setdisdis] = useState("none");
    let [disdis_2,setdisdis_2] = useState("none");


    let [redder_user, setredder_user] = useState("2px red transparent")
    let [redder_mail, setredder_mail] = useState("2px red transparent")
    let [redder_wor, setredder_wor] = useState("2px red transparent")

    let [user_state,setuser_state] = useState("");
    let [pass_state,setpass_state] = useState("");
    let [email_state,setemail_state] = useState("");

    let [Box_Shadow,setBox_Shadow] = useState("");
    

    let[none_1, setnone_1] = useState("block");
    let[none_2, setnone_2] = useState("none") 


    let[romcom_1,setromcom_1] = useState("password");



    //state for storing username
        const [Username, setUsername] = useState("");
        
        //reference for my firebase database
            const User_database_Ref = collection(data_base,"User-names")

            // auth.onAuthStateChanged(user=>
            //     {
            //         console.log("apopo"+user)
            //         if(user==null){
            //             document.getElementById("login_info").innerHTML = "<div>No user is logged in<div>";
            //         }
            //         else{
            //             document.getElementById("login_info").innerHTML = `<div class="logger">logged in with <br>${auth?.currentUser?.email}</div>`;
            //         }
            //     }
                    
            //     )

// if(Email || Password != "")
// {
//             if(auth?.currentUser?.email!=undefined){
//                 console.log("i should be logged in ")
//                 // document.getElementById("login_info").innerHTML = `<div>logged in with ${auth?.currentUser?.email}</div>`;
//                 console.log("happy"+document.getElementById("login_info").innerHTML);
//                 const onbject = document.getElementById("login_info");
//                 onbject.innerHTML = `<div>not hp ayy</div>` 
//             }
//             else{
//                 console.log("i should not be logged in ")
//                 // document.getElementById("login_info").innerHTML = "<div>No user is logged in<div>";
//             }
//         }

                                                //password checker



                                                console.log("am i first ???")
                                                                            
                                                // function conditions_displayers(){
                                                //     var all_pass_cond = document.querySelectorAll(".conditions");
                                                //     console.log("all_pass_cond:"+all_pass_cond[0])
                                                //     all_pass_cond.forEach(()=>{
                                                //         all_pass_cond.style.display = "block";
                                                //     })
                                                // }

                                                const Uppercase = new RegExp("(?=.*[A-Z])")
                                                const Lowercase = new RegExp("(?=.*[a-z])")
                                                const Number = new RegExp("(?=.*[0-9])")                                            
                                                const Special_char = new RegExp("(?=.*[~`!@#$%^&*\(\)-+={}\[\]|\\:;<>,.?/_₹])")
                                                const Eight_length = new RegExp("(?=.{8,})");

                                                const email_valid = (Email)=>{ return /^([\w])+(?:[.][\w]+)*@[\w]+\.[A-Za-z]{2,}(?:[.][a-zA-Z]{2,})*$/.test(Email);
                                                };

                                                if(email_valid(Email)){
                                                    Email_valid_Y_N = "Valid Email id";
                                                    redder_email = "green";
                                                    
                                                }
                                                else{
                                                    redder_email = "red";
                                                    // Email_valid_Y_N = "Invalid Email id"
                                                }
                                                if(Eight_length.test(Password)){            
                                                    // conditions_displayers()                                        
                                                    
                                                    redder = "green";
                                                    
                                                    
                                                    // setredder(redder);
                                                //    { console.log("apple is redddddddddddddddddddd"); 
                                                //     (e)=>{setredder("red");console.log("uiiiiiiiiiiiiiiu")};
                                                //     console.log("uupdateeeeeee:setredder:"+redder);
                                                //     {setredder("red");}
                                                // }
                                                    // condtion_text[4].style.color = "red"
                                                }else{
                                                    redder = "red";
                                                    // conditions_displayers()
                                                    // disdis = "block";
                                                    console.log("apple is green");
                                                    console.log("is Password same as you write::"+Password);
                                                    // condtion_text[4].style.color = "green"
                                                }

                                                if(Uppercase.test(Password)){
                                                    redder_upp = "green";
                                                }
                                                else{
                                                    redder_upp = "red";
                                                }

                                                if(Lowercase.test(Password)){
                                                    redder_low = "green";
                                                }
                                                else{
                                                    redder_low = "red";
                                                }

                                                if(Number.test(Password)){
                                                    redder_num = "green";
                                                }
                                                else{
                                                    redder_num = "red";
                                                }

                                                if(Special_char.test(Password)){
                                                    redder_spec = "green";
                                                }
                                                else{
                                                    redder_spec = "red";
                                                }








//                                                 function_of_reactttt();

// function function_of_reactttt(){

                                                


                                            // }


                                                    // const condtion_text = document.querySelectorAll(".conditions");
                                                    // (()=>{
                                                        console.log("does apple even exists")
                                                        
                                                    // })();


                                                    console.log("Password value should match :"+Password);
    

    // form_div.addEventListener("submit",function(e) {

            // e.preventDefault();
            // console.log("is yuou working")


            const Not_Sign_inn =  async (link_to_welcome)=>{

                if(
                    
                    Username!=null
                    &&
                    redder_email == "green"
                    &&
                    redder == "green"
                    &&
                    redder_upp == "green"
                    &&
                    redder_low == "green"
                    &&
                    redder_num == "green"
                    &&
                    redder_spec == "green"

                ){

                    
                    try{
                    await addDoc(namescollectionref, {
                        Name: Username
                    });
                    }
                    catch(err){
                        console.error(err);
                    
                    }

                        const UUsername = document.getElementById("UUsername");
                
                
                        console.log("UUsername.value"+UUsername.value)
                
                        // if(UUsername === ""){
                
                        // }
                    try {
                        await createUserWithEmailAndPassword(auth, Email, Password);
                        Navigate(link_to_welcome);
                    } catch (error) {
                        console.log("hahahahhahahaha:error lool:::"+error);
                        if (error=="FirebaseError: Firebase: Error (auth/email-already-in-use)."){
                            alert("Email is already in use!!!\nPlease use another one")
                        }
                    
                    }
                    
        }
        else{
            alert("Please fill all the inputs and make sure they are valid!!")
        }



        }


        //to add username feature
        // (async ()=>{

        //     try {
        //         await addDoc(User_database_Ref, {
        //             Name:Username
        //         })
        //     } catch (error) {
        //        console.error(error);
        //     }
        //     console.log("is iffies workijng???")
        // })();


    // });

    const Not_sign_in_in_google = async ()=>{
        try {
            await signInWithPopup(auth,googleProvider);
        } catch (error) {
            console.error(error);
            
        }
        
    };

    const Not_Log_out = async ()=>{
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
            
        }
        
    };
    console.log(auth?.currentUser?.email);
    // console.log("FirebaseAuth.instance.currentUser:"+FirebaseAuth.instance.currentUser)


//         localStorage.setItem("local_username",Username);
//         localStorage.setItem("local_email",Email);
//         localStorage.setItem("local_password",Password);



// if(
//     Username!=""
//     ||
//     Email!=""
//     ||
//     Password!=""
// ){
//     user_state= localStorage.getItem("local_username");

//    email_state=     localStorage.getItem("local_email");
   
//      pass_state=  localStorage.getItem("local_password",);

// }
localStorage.clear();




// const lava = ()=>{
    useEffect(()=>{
        // if(none_2=="block"){
        //     setnone_2("none")
        // }
        if(Password==null){
       setdisdis("none")
       setnone_2("none")
       setnone_1("none")
        }
    if(Email==null){
       setdisdis_2("none")
    }
    },[disdis,disdis_2])
// }

// function setromcom_1_function (event){
//     if(Password!="null"){
//     setromcom_1(event);}
//     else {setromcom_1("none")}
// }
// none_1="block"
    return (



        <div id='inside_main_container'>
                   <div className='Headdig'>Registration form</div>
                    {/* uncommen this to display usernames */}
                    {/* <div>
                            {uusernname.map((name_of_user)=>(
                              <div>Logged in as 
                                <h1>{name_of_user.Name}</h1>              
                              </div>
                            ))}
                          </div>
                          */}
            {/* <form className='form_div'> */}


            <div className='User_input_section'>
                <div className='Tiles_of_title'>Username:</div>
                <input 
                // value={user_state}
                style={{border:redder_user}}
                id='UUsername'
                placeholder="Eg: Jack Sparrow"
                onChange ={(e)=>{setUsername(e.target.value);setBox_Shadow("0px 0px 7px 1px rgb(219, 255, 255)")}}
                />
            </div>

            <div className='Emial_input_section'>

                <div className='Tiles_of_title'>Email:</div>

                <input 
                id="emial_iomput"
                // value={email_state}
                style={{border:redder_mail}}
                placeholder="Eg: Jack@Sparrow.com"
                onChange ={(e)=>{setEmail(e.target.value);setdisdis_2("block");lava()}}
                />

                <p className="conditions" style={{color:redder_email,display:disdis_2}}>{Email_valid_Y_N}</p>
                {/* Invalid email id */}
            </div>

            <div className='Pass_input_section'>

                <div className='Tiles_of_title guava'>Password:</div>

                <div className='input_man'>
                    
                    <div className='jojojo'>


                            


                        <div className='haahhohoho'>
                            <div className='input_of_apple_is_mango'>
                                <input 
                                id="Pass_iomput"
                                // value={pass_state}
                                style={{border:redder_wor}}
                                placeholder="Eg: P@$$w0rd" 
                                type={romcom_1}
                                // onKeyUp={Password_Checker}
                                onChange ={(e)=>{setPassword(e.target.value);setdisdis("block")}}
                                />
                            </div>
                            
                            <div className='apple_is_mango'>
                                <i onClick={()=>{setnone_1("block"),setnone_2("none"),setromcom_1("password")}}class="fa-regular fa-eye inside_input_man" style={{display:none_2}}></i>
                                <i onClick={()=>{setnone_1("none"),setnone_2("block"),setromcom_1("text")}} class="fa-regular fa-eye-slash inside_input_man" style={{display:none_1}}></i>
                            </div>

                        </div>
                    </div>
                </div>

                <p className="conditions" style={{color:redder,display:disdis}}>8 Characters long </p>
                <p className="conditions" style={{color:redder_upp,display:disdis}}>1 Uppercase Letter</p>
                <p className="conditions" style={{color:redder_low,display:disdis}}>1 Lowercase Letter</p>
                <p className="conditions" style={{color:redder_num,display:disdis}}>1 Number </p>
                <p className="conditions" style={{color:redder_spec,display:disdis}}>1 Special Character </p>

            </div>




            <button className="not_button" onClick={()=>{Not_Sign_inn("/Welcome_Page")}}>{Sign_in_Load_ing}</button>
            {/* </form> */}

            {/* <button onClick={Not_sign_in_in_google} >Sign in with google</button><br/> */}

            {/* <button className="not_button" onClick={Not_Log_out} >Log out</button> */}

        </div>
// </div>
    );
};