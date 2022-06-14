import { Component } from "react";

import womenWithCoffeePicture from "../../images/our-coffee/womenWithCoffeePicture.png"

import BeanInsert from "../bean-insert/bean-insert";

import "./about.sass"

class About extends Component{

    
    render() {
        const elements = () => {
            switch(this.props.currentPage){
    
            case "ourCoffee":
                return (
                    <div className="about about_to-our-coffee">
                        <div className="about__img-wrapper_to-our-coffee">
                            <img className="about__img_to-our-coffee" src={womenWithCoffeePicture} alt="women with coffee" />
                        </div>
                        <div className="about__tittle-wrapper">
                            <div className="about__tittle">
                                <span>About our beans</span>
                            </div>
                            <BeanInsert/>
                            <div className="about__text about__text_to-our-coffee">
                                <p>
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                </p>
                                <p>
                                    As greatly removed calling pleased improve an. Last ask him cold feel
                                    met spot shy want. 
                                    Children me laughing we prospect answered followed. At it went
                                    is song that held help face.
                                </p>
                            
                            </div>
                        </div>
                    </div>
                )
            case "forYourPleasure":
                return (
                    null
                )
            default:
                return (
                    <div className="about">
                        <div className="about__tittle">
                            <span>About</span>
                        </div>
                        <BeanInsert/>
                        <div className="about__text">
                            <p>
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                            </p>
                            <p>
                                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                horrible but confined day end marriage. Eagerness furniture set preserved far
                                recommend. Did even but nor are most gave hope. Secure active living depend son
                                repair day ladies now.
                            </p>
                        </div>
                    </div>
                )
            }
        }

        return(
            elements()
        )
    }
}

export default About;