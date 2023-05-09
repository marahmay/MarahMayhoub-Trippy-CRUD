

const MyFooterLink = (props) => {
    return (

        <div className="footerLinks">
            <h4>{props.title}</h4>
            <a href="/">{props.link1}</a>
            <a href="/">{props.link2}</a>
            <a href="/">{props.link3}</a>
            <a href="/">{props.link4}</a>
        </div>
    );
}


export default MyFooterLink;