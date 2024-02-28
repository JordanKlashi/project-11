function Connect() {
    return (
        <div className="BackgroundConnect">
            <section className="modalconnect">
                <p className="modalconnect-title">Sign In</p>
                <form>
                    <div className="modalconnect-form">
                        <label>Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="modalconnect-form">
                        <label>Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="modalconnect-rememb">
                        <input type="checkbox" id="remember-me" /><label for="remember-me">Remember me</label>
                    </div>
                    <div>
                        <button className="modalconnect-button" type="submit">Sign In</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Connect