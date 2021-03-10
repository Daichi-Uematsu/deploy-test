import React from 'react';
import './ClassTag.css';



class ClassTag extends React.Component{

    render(){

    const taglist = [
        {class:'プロダクト',color:'product'},
        {class:'生産',color:'produce'},
        {class:'データ駆動',color:'data'},
        {class:'ロボティクス',color:'robotics'},
        {class:'ソフトウェア',color:'software'},
        {class:'UI/UX',color:'uiux'},
    ]

    let tag;
    let i;

    for (i = 0; i < taglist.length; i++) {
        if(this.props.class === taglist[i].class){break;}
    };

    switch(i){
        case 0:
            tag = (
                <div className="tag product">
                    {this.props.class}
                </div>
            );
            break;

        case 1:
            tag = (
                <div className="tag produce">
                    {this.props.class}
                </div>
            );
            break;
        
        case 2:
            tag = (
                <div className="tag data">
                    {this.props.class}
                </div>
            );
            break;
        
        case 3:
            tag = (
                <div className="tag robotics">
                    {this.props.class}
                </div>
            );
            break;
            
        case 4:
            tag = (
                <div className="tag software">
                    {this.props.class}
                </div>
            );
            break;

        case 5:
            tag = (
                <div className="tag uiux">
                    {this.props.class}
                </div>
            );
            break;

        default:
            tag = (
                <div className="tag uiux">
                    {this.props.class}
                </div>
            );
    }

    return(
        <div>
            {tag}
        </div>
    );

    }  
}

export default ClassTag;