import React from "react";
import '../stylesheets/footer.css'

function Footer() {
    return (

        <div class="footer">

            <div class="footer__container">
                <div class="footer__top">
                    <div class="company__info">
                        <h2 class="company__logo">Mau Webs</h2>
                        <div>
                            <ul>
                                <div></div>
                                <li>
                                    <a href="https://m.facebook.com/profile.php?id=100086829729023" target="_blank">

                                        <span class="fa fa-facebook"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/Mau_Webs" target="_blank">

                                        <span class="fa fa-twitter"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/mau_webs/" target="_blank">

                                        <span class="fa fa-instagram"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/mauricio-vidal-webs" target="_blank">

                                        <span class="fa fa-linkedin"></span>
                                    </a>
                                </li>
                                <div></div>
                            </ul>
                        </div>

                        <span class="copyright">&copy;2022 MauWebs. All rights reserved.</span>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;