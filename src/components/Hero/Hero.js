import '../Hero/HeroStyle.css'

const MyHero = (props) =>{
    return(

        <div className="hero">
            <img src={props.heroImg} alt="HeroImg" />
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
            </div>
        </div>
    );
}

export default MyHero;