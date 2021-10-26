const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div>
            <div className="footer">
                <div className="footerContainer">
                <div className="footer_left">
                    <div className="footer_leftDate">
                        <p>@ {date} Airbnb, Inc</p>
                    </div>
                    <div className="footerLeftLinks">
                        <ul>
                            <li><a href="">Privacy</a></li>
                            <li><a href="">Terms</a></li>
                            <li><a href="">SiteMap</a></li>
                            <li><a href="">UK Modern Slavery Act</a></li>
                            <li><a href="">Company details</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_right">
                    <div className="footer_right_media">
                    <ul>
                        <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href=""><i class="fab fa-twitter"></i></a></li>
                        <li><a href=""><i class="fab fa-instagram"></i></a></li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer
