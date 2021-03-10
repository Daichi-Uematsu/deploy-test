import React from 'react';
import './Footer.css';
import '../Style.css';
import Logo from '../img/logo-white.svg';
import Icon from '@material-ui/core/Icon';
import SnsShare from './SnsShare';
import {Link} from '../../node_modules/react-router-dom';

class Footer extends React.Component{

    render(){

        const FooterUpper =(
            <div className="footer-upper">
                <img src={Logo} alt='logo' className="footer-left" />

                <div className="footer-center">
                    <div className="ankerlink">
                        <Link to="/about">ABOUT</Link>
                        <p className="slash">/</p>
                        <Link to="/works">WORKS</Link>

                        <p className="slash">/</p>
                        <Link to="/contact">CONTACT</Link>
                    </div>

                    <div className="mg-auto"><SnsShare color='#ffffff'/></div>
                    
                </div>

                <div className="footer-right">
                    <h4>お問い合わせ先</h4>
                    <p className="footer-text">芝浦工業大学 2021卒展委員</p>
                    <div　className="footer-text"><Icon className="ic-white mgr-4">mail_outline</Icon><span className="footer-text">shibasotsu2021@gmail.com</span></div>
                    <div className="footer-text"><Icon className="ic-white mgr-4">insert_link</Icon><Link to="/contact" className="footer-contact-link footer-link">お問い合わせフォーム</Link></div>
                </div>
            </div>
        );

        const FooterUpperSp =(
            <div className="footer-upper">

                <div className="footer-sp-left">
                    <img src={Logo} alt='logo' className="footer-left" />
                    <div className="mg-auto"><SnsShare color='#ffffff'/></div>    
                </div>

                <div className="footer-sp-right">
                    <div className="ankerlink">
                        <Link to="/about">ABOUT</Link>
                        <p className="slash">/</p>
                        <Link to="/works">WORKS</Link>
                        <p className="slash">/</p>
                        <Link to="/contact">CONTACT</Link>
                    </div>
                </div>

            </div>
        );


        return( 
            <div className="footer">
                <div className="footer-container">
                    <div className="hidden-sp">{FooterUpper}</div>
                    <div className="hidden-pc">{FooterUpperSp}</div>
                    <p className="copyright">Copyright ©︎ 芝浦卒展委員 All Rights Reserved.</p>
                </div>
            </div>
        );
    }
}

export default Footer;