import MyForm from '../Form/Form';
import MyHero from '../Hero/Hero';
import HeroImg from './../../assets/2.jpg'
import './../SignUp/SignUpStyle.css'

const SignUp = () => {

    return (
        <>
            <div className="SignUpHero">
                <MyHero
                    heroImg={HeroImg}
                    title="Sign Up"
                />
            </div>

            <div className='RegisterForm'>
                <MyForm

                    title="Create an Account"
                    placeholderName="Your Name"
                    placeholderEmail="Your Email"
                    placeholderPassword="Your Password"
                    placeholderRePassword="Repeat Your Password"
                    btnValue="Register"

                />
            </div>


        </>

    );
}

export default SignUp;