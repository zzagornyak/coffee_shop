import "./bean-insert.sass"
import logo from "../../images/coffee_bean_image/bean-insert.svg"
import line from "../../images/coffee_bean_image/cofee-bean-line.svg"


const BeanInsert = () => {
    return (
        <div className="bean-insert">
            <div>
                <img src={line} alt="" />
            </div>
            <img className="bean-insert__coffee" src={logo} alt="coffee bean" />
            <div>
                <img src={line} alt="" />
            </div>
        </div>
    )
}

export default BeanInsert;