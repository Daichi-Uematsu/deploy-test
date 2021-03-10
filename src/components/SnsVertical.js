import React from 'react';
import './SnsVertical.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


class Btn extends React.Component{

    render(){
        return(
            <div className="sns-vertical">
                <p className="vertical">SHIBAURA SOTSUTEN 2021  SNS</p>
                <div className="sns-icons-vertical">
                    <a href="https://www.facebook.com/shibauradesign2020/" target="_blank" rel="noopener noreferrer"><FacebookIcon className={"Icon"} style={{ color:'#212121',fontSize: 20 }} /></a>
                    <a href="https://twitter.com/sit_designex" target="_blank" rel="noopener noreferrer"><TwitterIcon className={"Icon"} style={{ color:'#212121',fontSize: 20 }} /></a>
                    <a href="https://www.instagram.com/shibasotsu_2021/?hl=ja" target="_blank" rel="noopener noreferrer"><InstagramIcon className={"Icon"} style={{ color:'#212121',fontSize: 20 }} /></a>
                </div>
            </div>
        );
    }
}

export default Btn;