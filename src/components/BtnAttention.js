import React from 'react';
import './BtnAttention.css';
import { Link } from 'react-router-dom'



class Btn extends React.Component{

    render(){
        return(
            <div className="btn-attention">
                <Link to="/Attention">
                <div className="btn-attention-container">
                <p>{this.props.text}</p>
                </div>
                </Link>
                
            </div>
        );
    }
}

export default Btn;