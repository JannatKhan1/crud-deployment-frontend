import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from "axios";

function CreateStudent()
{
    const [arr,setArr] = useState([]); //arr= [raj,raj@gmail.com,1]

    const getState = (childData) => { //childData => [raj,raj@gmail.com,1]
        setArr(childData); //
    }

    const handleSubmit = () => {
        const data = {name: arr[0], email: arr[1], rollNo: arr[2]}
        Axios.post("https://crud-deployment-backend-q4ck.onrender.com/studentRoute/create-student",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record added successfully")
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} nameValue="" emailValue=""
                rollNoValue=""/>
        </form>
    )
}
export default CreateStudent;


//component to view and vice versa --> Data Binding