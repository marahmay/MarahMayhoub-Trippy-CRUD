import './../Form/FormStyle.css'

const MyForm = (props) => {
    return (

        <>

            <div className="MyForm">
                <h1>{props.title}</h1>
                <form>
                    <input className='name' type="text" placeholder={props.placeholderName} required />
                    <input className='email' type="email" placeholder={props.placeholderEmail} required />
                    <input className='subject' type="text" placeholder={props.placeholderSubject} required />
                    <input className='pass' type="password" placeholder={props.placeholderPassword} required />
                    <input className='re_pass' type="password" placeholder={props.placeholderRePassword} required />
                    <textarea cols="30" rows="5" placeholder={props.placeholderMessage}></textarea>
                    <input className="btn" type="button" value={props.btnValue} />
                </form>

            </div>
        </>
    );
}

export default MyForm;