import React from 'react';
import './WorksItem.css';

import { withRouter } from 'react-router';


class WorksItem extends React.Component{

    handleClick = () => {
        this.props.history.push({
            pathname: '/work',
            state: {id: this.props.id}
        })
    }

    render(){

        const image = this.props.image;
        let src = `${process.env.PUBLIC_URL}/assets/${image}`;
        
        return(
            <div className="works-item-container" onClick={this.handleClick}>

                <img src={src} className="works-item-bg" alt="workThumbnail" />
                <div className="works-item-contents">
                    <h4 className="works-item-title white">{this.props.title}</h4>
                    <div className="works-item-subtext">
                        <p>{this.props.lab}</p>
                        <p>{this.props.name}</p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default withRouter(WorksItem);