import React from 'react';
import SlideMenu from './SlideMenu'
import SlideMenuSp from './SlideMenuSp'

import './Header.css';
import '../Style.css'
import {Link} from '../../node_modules/react-router-dom';
import src from '../img/logo.svg';
import BackIcon from '@material-ui/icons/ArrowBackIos';

class Header extends React.Component{

    render(){
        let header;
        if (this.props.theme === "right"){
            header = (
                <div className="header">        
                    <div className="header-container">
                        {header}
                        <div className="header-left" ><Link to="/"><img className="header-logo" src={src} alt="logo"/></Link></div>
                        <div className="header-right">
                            <div className="hidden-sp"><SlideMenu currentPath={this.props.currentPath}/></div>
                            <div className="responsive-tb-sp"><SlideMenuSp currentPath={this.props.currentPath}/></div>
                        </div>
                    </div>
                    <div className="blur"></div>
                </div>
            );
        }else if(this.props.theme === "dark"){
            header = (
                <div className="header-dark">        
                <div className="header-container-dark">
                    <Link to="/works" className="pageBack"><BackIcon style={{ fontSize: 28 }} /><h4>一覧に戻る</h4></Link>
                    <div className="header-right-dark">
                        <div className="hidden-sp"><SlideMenu currentPath={this.props.currentPath}/></div>
                        <div className="responsive-tb-sp"><SlideMenuSp currentPath={this.props.currentPath}/></div>
                    </div>
                </div>
                <div className="blur"></div>
            </div>
            );
        }

        return(
            
            <div>
            {header}

            </div>
            
        );
    }
}

export default Header;