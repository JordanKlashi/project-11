
import image from "../../img/icon-chat.png"

function Features() {

const FeaturesType = [
    {  
        img: {image},
        text: "You are our #1 priority",
        sub: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
        img: "../../img/icon-money.png",
        text: "More savings means higher rates",
        sub: "The more you save with us, the higher your interest rate will be!"
    },
    {
        img: "../../img/icon-security.png",
        text: "Security you can trust",
        sub: "We use top of the line encryption to make sure your data and money is always safe."
    }
]


console.log(FeaturesType)
    return(
        <>
        <div className="features">
            {FeaturesType.map((Item) => (
                <div className="features-item">
                    <img src={Item.img} alt={Item.text}></img>
                    <p>{Item.text}</p>
                    <p>{Item.sub}</p>
                </div>
            ))}
        </div>
        </>
        
    )

}

export default Features