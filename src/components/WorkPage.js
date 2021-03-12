import React from 'react';
import './WorkPage.css';
import '../Style.css';
import WorkSmall from './WorkSmall';

/** min以上max以下の整数値の乱数を返す */
function intRandom(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min;
    }

class WorkPage extends React.Component{


    render(){

        const json = require('../test.json');
        const array = this.props.array; //ページに表示する１つの作品

        var randoms = [];
        var min = 0, max = 70;
        for(let i = 0; i < 4; i++){
        while(true){
            var tmp = intRandom(min, max);
            if(!randoms.includes(tmp)){
            randoms.push(tmp);
            break;
            }
        }
        }

        let recommendWorksListPc = (
            <div className="hidden-sp">
                <div className="recommend-works" >
                    <WorkSmall 
                        id={json[randoms[0]].id}
                        image=""
                        title={json[randoms[0]].title}
                        name={json[randoms[0]].name}
                        lab={json[randoms[0]].lab}
                        theme="dark"
                    />

                    <WorkSmall 
                        id={json[randoms[1]].id}
                        image=""
                        title={json[randoms[1]].title}
                        name={json[randoms[1]].name}
                        lab={json[randoms[1]].lab}
                        theme="dark"
                    />

                    <WorkSmall 
                        id={json[randoms[2]].id}
                        image=""
                        title={json[randoms[2]].title}
                        name={json[randoms[2]].name}
                        lab={json[randoms[2]].lab}
                        theme="dark"
                    />
                </div>
            </div>
        )

        let recommendWorksListSp = (
            <div className="responsive-works-sp responsive-tb-sp">
                <div className="recommend-works" >
                <WorkSmall 
                    id={json[randoms[0]].id}
                    image=""
                    title={json[randoms[0]].title}
                    name={json[randoms[0]].name}
                    lab={json[randoms[0]].lab}
                    theme="dark"
                />

                <WorkSmall 
                    id={json[randoms[1]].id}
                    image=""
                    title={json[randoms[1]].title}
                    name={json[randoms[1]].name}
                    lab={json[randoms[1]].lab}
                    theme="dark"
                />

                </div>

                <div className="recommend-works" >
                <WorkSmall 
                    id={json[randoms[2]].id}
                    image=""
                    title={json[randoms[2]].title}
                    name={json[randoms[2]].name}
                    lab={json[randoms[2]].lab}
                    theme="dark"
                />

                <WorkSmall 
                    id={json[randoms[3]].id}
                    image=""
                    title={json[randoms[3]].title}
                    name={json[randoms[3]].name}
                    lab={json[randoms[3]].lab}
                    theme="dark"
                />

                </div>
            </div>
        )

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
        
        let references = "";
        if (array.id === "21"){
            references = (
                <div className="work-content-list">
                    <h4>引用</h4>
                    <p>"(1)K. Otsuka, S. Shimizu, Development of Collision Alert System Using
                    a Single WAF Sensor - Proposal of Mean Manhattan Distance Algorithm from
                    Detected Feature Points -, Proc. of SAMCON2021 (2021.3)"</p>
                </div>
            )
        };
        
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
                            
                        
                        {references}
                        
                        
                        <hr></hr>

                        <div className="recommend-works-list">
                            <div className="title">他の研究・作品</div>

                            {recommendWorksListPc}
                            {recommendWorksListSp}
                        </div>
                        

                    </div>
                    
                </div>

            </div>
        );
    }
}

export default WorkPage;