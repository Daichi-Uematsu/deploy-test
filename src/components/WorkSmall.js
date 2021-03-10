import React from 'react';
import './WorkSmall.css';

import { withRouter } from 'react-router';


class WorkSmall extends React.Component{

    handleClick = () => {
        this.props.history.push({
            pathname: '/work',
            state: {id: this.props.id}
        })
    }

    render(){

        const image = this.props.image;
        let src = `${process.env.PUBLIC_URL}/assets/workImageList1/workImage_${this.props.id}_01.png`;
        
        return( 
            <div className="work-small" onClick={this.handleClick}>
                
                    {/*imageに指定がなければデフォルト画像を表示するようにする */}
                    <div className="image-container"><img src={src} alt="サムネイル" className="work-small-image" /></div>
                    <div className="work-small-title" >{this.props.title}</div>
                    <div className="works-small-subtext">
                        <p>{this.props.name} | {this.props.lab}</p> 
                        <p></p>
                    </div>

                
            </div>
        );
    }
}

export default withRouter(WorkSmall);