function Footer() {
    return (
        <footer id="App-Footer">
            <h2>Contact Me</h2>
            <form className="Contact-Form">
                <input type="text" id="Name" aria-label="Name" placeholder="Name..."/>
                <input type="email" id="Email" aria-label='Email' placeholder="Email..."/>
                <textarea id="Body" aria-label="Message" placeholder="Message..."/>
                <button type='submit'>Submit</button>
            </form>
        </footer>
    )
}
export default Footer