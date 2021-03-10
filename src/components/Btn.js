import React from 'react';
import './Btn.css';
import { Link } from 'react-router-dom'


class Btn extends React.Component{

    render(){
    
        let btn =( 
                    <div className="btn">
                        <div className="btn-container">
                            <p className="btn-text">{this.props.text}</p>
                        </div>
                    </div>
                );
        
        let icon = this.props.ic;

        if(icon){
            btn=(
                <div className="btn">
                    <div className="btn-container">
                        <svg className="ic-grid" >
                            <path d="M4 4H8V8H4V4Z" fill="#212121"/>
                            <path d="M4 10H8V14H4V10Z" fill="#212121"/>
                            <path d="M8 16H4V20H8V16Z" fill="#212121"/>
                            <path d="M10 4H14V8H10V4Z" fill="#212121"/>
                            <path d="M14 10H10V14H14V10Z" fill="#212121"/>
                            <path d="M10 16H14V20H10V16Z" fill="#212121"/>
                            <path d="M20 4H16V8H20V4Z" fill="#212121"/>
                            <path d="M16 10H20V14H16V10Z" fill="#212121"/>
                            <path d="M20 16H16V20H20V16Z" fill="#212121"/>
                        </svg> 
                        <p className="btn-text">{this.props.text}</p>
                    </div>
                </div>
            );
        }

        return(
            <div>
                <Link to={this.props.link}> {btn} </Link>
            </div>
        );
    }
}

export default Btn;