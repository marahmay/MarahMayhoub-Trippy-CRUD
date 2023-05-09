import MyForm from '../Form/Form';
// import ContactForm from '../Form/Form';
import MyHero from '../Hero/Hero';
import HeroImg from './../../assets/2.jpg'
import './../Contact/ContactStyle.css'

const Contact = () => {
    return (

        <>
            <div className="ContactHero">
                <MyHero
                    heroImg={HeroImg}
                    title="Contact"
                />
            </div>

            <div className='SendForm'>
                <MyForm

                    title="Send a message to us"
                    placeholderName=" Name"
                    placeholderSubject = "Subject"
                    placeholderEmail=" Email"
                    placeholderMessage = "Message"
                    btnValue="Send Message"

                />
            </div>
        </>
    );
}

export default Contact;