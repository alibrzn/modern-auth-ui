/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import ListMyUsers from "./component/ListMyUsers";
import iconinput1 from "../src/assets/user.svg"
import iconinput2 from "../src/assets/lock.svg"
import social1 from "../src/assets/group1.svg"
import social2 from "../src/assets/group2.svg"
import social3 from "../src/assets/group3.svg"
import Rectangle from "../src/assets/Rectangle.svg"
import Ellipse1 from "../src/assets/Ellipse1.svg"
import Ellipse2 from "../src/assets/Ellipse2.svg"
import polygon1 from "../src/assets/polygon1.svg"
import polygon2 from "../src/assets/polygon2.svg"

function App() {

  const [SwitchCard, SetSwitchCard] = useState(false)

  let index = 0;
  let [IsLoginError, SetIsLoginError] = useState(false)
  let [IsLoginConfirm, SetIsLoginConfirm] = useState(false)

  const [Users, SetUsers] = useState([]);

  const [user, Setuser] = useState({
      FirstName : "",
      LastName : "",
      PhoneNumber : "",
      PassWord : "",
      id : Date.now()
    });

  function handlerSubmit(e) {

    e.preventDefault();
    handlerSendDataForm();
    Setuser({
          FirstName : "",
          LastName : "",
          PhoneNumber : "",
          PassWord : "",
          id : Date.now()
    });
    
    // unFocus Input :
    document.activeElement.blur();

  }
  function handlerSendDataForm() {

    if (user.FirstName != "" && user.LastName != "" && user.PassWord != "") {

      
      // alert("موفق")

        // SetUsers(prev => [...prev, user]);
        SetUsers(
          [
            ...Users,
            user
          ]
        );
        
      POSTapibyFetch(Users)
      console.log(Users)
      console.log(user)

      
    SetIsLoginConfirm(true)
    SetIsLoginError(false)
      

      } else {
        SetIsLoginError(true) 
        SetIsLoginConfirm(false)
        // console.log("not log")
    }


  }
  function handlerSetfirstName(e) {

    Setuser({
      ...user,
      FirstName : e.target.value
    })

    // console.log("FirstName: ", e.target.value)

  }
  function handlerSetlastName(e) {

    Setuser({
      ...user,
      LastName : e.target.value
    })

    // console.log("LastName: ", e.target.value)

  }
  function handlerSetphonenumber(e) {

    Setuser({
      ...user,
      PhoneNumber : e.target.value
    })

    // console.log("PhoneNumber: ", e.target.value)

  }
  function handlerSetpassword(e) {

    Setuser({
      ...user,
      PassWord : e.target.value
    })

    // console.log("Password: ", e.target.value)

  }
  function handlerSwitchCard() {
    SetSwitchCard(!SwitchCard)
  }
  function POSTapibyFetch(Users) {
    fetch('https://api-ex-js-default-rtdb.firebaseio.com/user.json',{
      method : 'POST',
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify(Users)
    })
    .then(res => console.log(res))
  }

  return (
    <div dir="rtl" lang="fa" className="divMain" >

      <img className="absolute -top-20 right-0 w-75"
       src={ Rectangle } alt=""/>

      {/*------ Sign ------*/}
      <div className="ParentFormandSidebar">  {/* mobile */}
        <div className={ SwitchCard ? 'formOFF' : 'sidebar' }>
          <img className="w-20 absolute z-0 top-15 right-36" src={ polygon2 } alt=""/>
          <img className="w-20 absolute z-0 top-50 -right-10" src={ Ellipse2 } alt=""/>
          <img className="w-20 absolute z-0 top-75 right-15" src={ polygon1 } alt=""/>
          <h1 className="h1Customized text-white">خوش آمدید !</h1>
          <p className="text-center text-emerald-100 max-md:text-sm">برای ارتباط با ما، لطفا
            <br></br>
             با اطلاعات شخصی خود وارد شوید</p>
          <button type="button" onClick={ handlerSwitchCard }
          className="btnSidebar"
          >ورود به حساب کاربری</button>
        </div>

        <form onSubmit={ handlerSubmit } className={ SwitchCard ? 'formOFF' : 'formON' }>

        <h1 className="h1Customized text-emerald-800">ایجاد حساب کاربری</h1>

        <div className="flex flex-row w-50 justify-center items-center gap-8 max-md:gap-4">
          <div className="iconSocial">
            <img className="w-4 h-4" src={ social1 } alt=""/>
          </div>
          <div className="iconSocial">
            <img className="w-4 h-4" src={ social2 } alt=""/>
          </div>
          <div className="iconSocial">
            <img className="w-4 h-4" src={ social3 } alt=""/>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center">

          <input className="input" value={user.FirstName} onChange={ handlerSetfirstName }
           type="text"/>
          <label className={`label ${user.FirstName ? "inputFilled" : "label"}`} >نام</label>
          <img className="iconInput" src={ iconinput1 } alt=""/>
          

        </div>
        <div className="flex flex-row justify-center items-center">

          <input className="input" value={user.LastName} onChange={ handlerSetlastName }
           type="text"/>
          <label className={`label ${user.LastName ? "inputFilled" : "label"}`} >نام خانوادگی</label>
          <img className="iconInput" src={ iconinput1 } alt=""/>

        </div>
        <div className="flex flex-row justify-center items-center">

          <input className="input fontIranNumber" value={user.PhoneNumber} onChange={ handlerSetphonenumber }
           type="number"/>
          <label className={`label ${user.PhoneNumber ? "inputFilled" : "label"}`} >شماره تلفن</label>
          <img className="iconInput" src={ iconinput1 } alt=""/>

        </div>
        <div className="flex flex-row justify-center items-center">

          <input className="input" value={user.PassWord} onChange={ handlerSetpassword }
           type="password"/>
          <label className={`label ${user.PassWord ? "inputFilled" : "label"}`} >رمز عبور</label>
          <img className="iconInput" src={ iconinput2 } alt=""/>

        </div>
        <div className="flex flex-row justify-center items-center">

          <button type="submit"
        className="btnClickForm" 
        >ثـبـت نــام</button>

        </div>


      <div className={ IsLoginError ? "SectionErrorFormSign" : "hidden" }>
        <p>کاربر عزیز لطفا اطلاعات را صحیح تکمیل کنید</p>
        <button type="button" onClick={ ()=> SetIsLoginError(false) }>بـاشـه</button>
      </div>
      <div className={ IsLoginConfirm ? "SectionConfirmFormSign" : "hidden" } >
        <p>ثبت‌نام با موفقیت انجام شد</p>
        <button type="button" onClick={ ()=> SetIsLoginConfirm(false) }>بـاشـه</button>
      </div>

      
      

      </form>

      </div>
      
      <img className="absolute bottom-8 left-0 w-75"
        src={ Ellipse1 } alt=""/>
      {/*------ login ------*/}
      <div className="ParentFormandSidebar">

          <div className={ SwitchCard ? 'sidebar' : 'formOFF' }>
            <h1 className="h1Customized text-white">خوش آمدید !</h1>
            <p className="text-center text-emerald-100 max-md:text-sm">برای ارتباط با ما، لطفا
              <br></br>
              با اطلاعات شخصی خود وارد شوید</p>
            <button type="button" onClick={ handlerSwitchCard }
            className="btnSidebar"
            >ایجاد حساب کاربری</button>
          
          
          
        </div> 

        <form onSubmit={ handlerSubmit } className={ SwitchCard ? 'formON' : 'formOFF' }>

        <h1 className="h1Customized text-emerald-800">ورود به حساب کاربری</h1>

        <div className="flex flex-row w-50 justify-center items-center gap-8">
          <div className="iconSocial">
            <img className="w-4 h-4" src={ social1 } alt=""/>
          </div>
          <div className="iconSocial">
            <img className="w-4 h-4" src={ social2 } alt=""/>
          </div>
          <div className="iconSocial">
            <img className="w-4 h-4" src={ social3 } alt=""/>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center">

          <input className="input fontIranNumber" value={user.PhoneNumber} onChange={ handlerSetphonenumber }
           type="number"/>
          <label className={`label ${user.PhoneNumber ? "inputFilled" : "label"}`} >شماره تلفن</label>
          

        </div>
        <div className="flex flex-row justify-center items-center">

          <input className="input" value={user.PassWord} onChange={ handlerSetpassword }
           type="password"/>
          <label className={`label ${user.PassWord ? "inputFilled" : "label"}`} >رمز عبور</label>
          

        </div>
        
        <div className="flex flex-row justify-center items-center">

        <button type="submit" 
        className="btnClickForm" 
        >ورود</button>

        </div>

        

      </form>

        
      </div>

      <ListMyUsers listUsers={Users} SetlistUsers={SetUsers} />

    </div>

  );

  }

export default App;
