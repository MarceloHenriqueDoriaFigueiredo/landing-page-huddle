import './Footer.css'

function Footer(){
    return(
        <div>
            <footer className="footer">
                <div className="social">
                    <a className="social-icon-box" href="/">
                        <i className="social-icon fab fa-facebook-f"></i>
                    </a>

                    <a className="social-icon-box" href="/">
                        <i className="social-icon fab fa-twitter"></i>
                    </a>

                    <a className="social-icon-box" href="/">
                        <i className="social-icon fab fa-instagram"></i>
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer