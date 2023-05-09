
import './../Footer/FooterStyle.css'
import MyFooterLink from './FooterLinks';
const MyFooter = () => {
    return (

        <div className="footer">


            <div className="footerTop">
                <div className="top-text">
                    <h1>Trippy</h1>
                    <p>Choose your favourite destination</p>
                </div>
                <div className='footerIcons'>
                    <a href="/"><i className="fa-brands fa-facebook-square"></i></a>
                    <a href="/"><i className="fa-brands fa-instagram-square"></i></a>
                    <a href="/"><i className="fa-brands fa-whatsapp-square"></i></a>
                    <a href="/"><i className="fa-brands fa-twitter-square"></i></a>
                </div>
            </div>

            <div className="footerBottom">
                <MyFooterLink
                    title="Project"
                    link1="Changelog"
                    link2="Status"
                    link3="Lisence"
                    link4="All Versions"
                />
                <MyFooterLink
                    title="Community"
                    link1="Github"
                    link2="Issues"
                    link3="Project"
                    link4="Twitter"
                />
                <MyFooterLink
                    title="Help"
                    link1="Support"
                    link2="Troubleshooting"
                    link3="Contact us"
                />
                <MyFooterLink
                    title="Others"
                    link1="Terms of Service"
                    link2="Privacy Policy"
                    link3="Lisence"
                />
            </div>



        </div>
    );
}


export default MyFooter;