import React from 'react';
import './SlideMenuButton.css';
import {Link} from '../../node_modules/react-router-dom';



class SlideMenuButton extends React.Component{

    render(){

        let MenuButton;

        if(this.props.flag === 'true'){

            MenuButton = ( //current
                <div className="SlideMenuButton">
                        <div className="current">
                            <div className="Button-text-current">{this.props.value}</div>
                            <p className="Button-subtext-current">{this.props.sub}</p>
                        </div>
                </div>
            );

        }else{
            MenuButton = ( //default
                <div className="SlideMenuButton">
                    <Link to={this.props.link} style={{ textDecoration: 'none' }}>
                        <div className="default">
                            <div className="Button-text">{this.props.value}</div>
                            <p className="Button-subtext">{this.props.sub}</p>
                        </div>
                    </Link>
                </div>
            );
        }
                
        return( 
            <div>
                {MenuButton}
            </div>
        );
    }
}

export default SlideMenuButton;