function Footer() {
    return (
        <footer id="App-Footer">
            <div>
                <h2>Contact Me</h2>
                <form className="Contact-Form" name="contact" method="POST" data-netlify="true" onSubmit="submit">
                    <input type="hidden" name='form-name' value='content'/>
                    <label htmlFor="Name">Name</label>
                    <input required type="text" id="Name" aria-label="Name" placeholder="Name..." name='name'/>
                    <label htmlFor="Email">Email</label>
                    <input required type="email" id="Email" aria-label='Email' placeholder="Email..." name='email'/>
                    <label htmlFor="Message">Message</label>
                    <textarea required id="Body" aria-label="Message" placeholder="Message..." name='message'/>
                    <button type='submit'>Submit</button>
                </form >
            </div>
        </footer>
    )
}
export default Footer