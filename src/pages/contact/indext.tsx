import './styles.css';

function Contact() {
    return (
        <section className='page contact' id='contact'>
          <h2 className='section-title'>Contact</h2>

          <p className='contact__message'>Wanna say hello?</p>
          <form className='contact__form'>
            <input className='contact__input' type='text' placeholder='Your name (required)' required />
            <input className='contact__input' type='email' placeholder='Your email (required)' required />
            <textarea rows={5} className='contact__input' placeholder='Say hi' required />
          </form>
        </section>
    )
}

export default Contact;