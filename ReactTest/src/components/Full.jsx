import {Card} from "./Card.jsx";
import {Nav} from "./Nav.jsx";

export function Full() {
    return (
        <>
            <Nav txt1={"Courses"} txt2 ={"Speakers"} txt3 ={"Locations"}/>
            <div className="container">
                <Card/>
            </div>
        </>
    );
}