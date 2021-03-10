import React from 'react';
import './NewsItem.css';
import '../Style.css'


class NewsItem extends React.Component{

    render(){

    const image = this.props.image;
    let src = `${process.env.PUBLIC_URL}/assets/${image}`;
        
        return( 
            <div className="news-item">
                <a href={this.props.link} target="_blank" rel="noopener noreferrer" title={this.props.title}>
                    {/*imageに指定がなければデフォルト画像を表示するようにする */}
                    <div className="news-item-container">
                    <div className="news-image-container"><img src={src} alt="サムネイル" className="news-item-image" /></div>
                        <div className="news-item-info">
                            <p className="news-item-date">{this.props.date}</p>

                            <div className="news-item-title" >{this.props.title}</div>
                            <p className="news-item-text">{this.props.text}</p>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

export default NewsItem;