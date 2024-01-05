import {Btn} from "./Btn.jsx"
import jumpingguy from "./jumpingguy.png"
export function Card(){
    const info = [
        {
            "name": "Course 1",
            "speaker": "Dr. Smith",
            "location": "Los Angeles",
            "date": "2023-03-21",
            "isNew": true
        },
        {
            "name": "Course 2",
            "speaker": "Prof. Johnson",
            "location": "Los Angeles",
            "date": "2023-08-26",
            "isNew": true
        },
        {
            "name": "Course 3",
            "speaker": "Dr. Brown",
            "location": "Chicago",
            "date": "2023-08-23",
            "isNew": true
        },
        {
            "name": "Course 4",
            "speaker": "Dr. Williams",
            "location": "New York",
            "date": "2023-11-03",
            "isNew": true
        },
        {
            "name": "Course 5",
            "speaker": "Prof. Davis",
            "location": "Houston",
            "date": "2023-11-05",
            "isNew": false
        },
        {
            "name": "Course 6",
            "speaker": "Prof. Davis",
            "location": "New York",
            "date": "2023-11-10",
            "isNew": true
        },
        {
            "name": "Course 7",
            "speaker": "Dr. Williams",
            "location": "New York",
            "date": "2023-09-22",
            "isNew": true
        },
    ]

    const arrayDataItems = info.map((course, index) =>{
    let izNew;
    if(course.isNew){
        izNew = <span className={"newCheck"}>New</span>
    }
    function onClick(){
        alert(course.name);
    }
    return(
            <div className={"divik"} key={index}>
                <div className={"courseandsmth"}>
                    <span className={"courseName"}>{course.name}</span>
                    {izNew}
                </div>
                <p className={"name"}>Law 10{index + 1}</p>
                <p className={"location"}>Location: {course.location}</p>
                <p className={"date"}>Date: {course.date}</p>
                <Btn txt={"Enroll"} onClick={onClick}/>
                <p className={"speakerName"}><img alt={'logo'} src={jumpingguy} className={"jumpingGuy"}/>{course.speaker}</p>
            </div>
        );
    })
    return (
        <>
            {arrayDataItems}
        </>
    )
}