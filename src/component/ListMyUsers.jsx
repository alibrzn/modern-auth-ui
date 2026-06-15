// import { useState } from "react"
import IconDelete from "../assets/delete.svg"

export default function ListMyUsers(props) {
    // console.log(props.listUsers)

   /*  توجه داشته باشید که به دین صورت پراپزی اگر ارسال شود 
   در رندر بعدی دیگر چاپ نمیشود و داینامیک و در لحظه چاپ میشود
    هر تغییر یا کابری که به سیستم اضافه شود */
    // clg(props.ListUsers)

    function handlerRemoveUser(id) {
        console.log("object")

        props.SetlistUsers(props.listUsers.filter((list)=> {
            list.id !== id
        }))

    }

    return (

        <div className="w-1/2">

            <div className="flex flex-col justify-center gap-5 items-center w-full h-fit"> {props.listUsers.map((user)=> (
                <p className="listPrintUsers" key={ user.id }> 
                    <span>
                        نام و نام خانوادگی: { user.FirstName } { user.LastName } 
                        <br></br>
                        <span className="fontIranNumber">  شماره تلفن:  { user.PhoneNumber }</span>
                    </span>
                    {/* <img onClick={ ()=> handlerRemoveUser(user.id) } src={ IconDelete } alt="delete" /> */}
                </p>
                
                ))} 
            </div>
    
        </div>

    );

}