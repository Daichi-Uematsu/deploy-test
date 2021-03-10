import React from 'react';
import './WorkPage.css';
import '../Style.css';

class WorkPage extends React.Component{

    render(){

    const array = this.props.array;


    let firstSrc = `${process.env.PUBLIC_URL}/assets/workImageList1/workImage_${array.id}_01.png`; 
    let secondSrc = `${process.env.PUBLIC_URL}/assets/workImageList2/workImage_${array.id}_02.png`; 

    let kanji = `${process.env.PUBLIC_URL}/assets/kanji_${array.genre}.svg`; 

    const labList = [
        {lab:'橋田研究室',formalName:'エモーショナルデザイン研究室'},
        {lab:'蘆澤研究室',formalName:'デザインプロモーション研究室'},
        {lab:'増成研究室',formalName:'デザイン史・デザイン文化研究室'},
        {lab:'古屋研究室',formalName:'製品計画研究室'},
        {lab:'吉武研究室',formalName:'ユーザーエクスペリエンスデザイン研究室'},
        {lab:'梁研究室',formalName:'感性インタラクションデザイン研究室'},
        {lab:'日高研究室',formalName:'色彩・コミュニケーションデザイン研究室'},
        {lab:'島田研究室',formalName:'モーションコントロール研究室'},
        {lab:'清水研究室',formalName:'人間支援知能ロボティクス研究室'},
        {lab:'野田研究室',formalName:'ソフトウェアデザイン研究室'},
        {lab:'山崎研究室',formalName:'コンピューティングデザイン研究室'},
        {lab:'安齋研究室',formalName:'形状創製工学研究室'},
        {lab:'安斎研究室',formalName:'形状創製工学研究室'},
        {lab:'田邊研究室',formalName:'リサイクルデザイン研究室'},
        {lab:'澤研究室',formalName:'臨床機械加工研究室'},
        {lab:'加藤研究室',formalName:'人・組織とデザイン研究室'},
      ];

    let formalName = '';
    for(let i = 0; i < labList.length; i++){
        if(array.lab === labList[i].lab){
          formalName = labList[i].formalName;
        }
    }
    

    let workImages = (
        <ul className="work-imgs">
            <li class="item"><img src={firstSrc} className="work-img" alt="workImage01"/></li>
            <li class="item"><img src={secondSrc} className="work-img" alt="workImage02"/></li>
        </ul>

        );
        
        return( 
            <div>
                {workImages}

                <div className="work-contents-container">
                    <div className="work-contents">
                        <div className="work-about">
                            <img src={kanji} className="kanji" alt="exhibitionPoster"/>
                            <div className="work-title">
                                <div className="title">{array.title}</div>
                                <div className="name-lab">{array.name} | {formalName}</div>
                            </div>
                        </div>
                        <hr></hr>

                        <div className="work-content-list">
                            <h4>研究背景</h4>
                            <p>{array.background}</p>
                        </div>

                        <div className="work-content-list">
                            <h4>目的</h4>
                            <p>{array.purpose}</p>
                        </div>

                        <div className="work-content-list">
                            <h4>結果</h4>
                            <p>{array.result}</p>
                        </div>
                        <hr></hr>
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default WorkPage;