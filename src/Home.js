import React from 'react';

import './Home.css';
import './Style.css';

import Btn from './components/Btn';
import Scroll from './components/Scroll';
import SnsVertical from './components/SnsVertical';
import BtnAttention from './components/BtnAttention';
import WorksItem from './components/WorksItem';
import TopSection from './components/TopSection';
import NewsItem from './components/NewsItem'
import PortfolioItem from './components/PortfolioItem'

import { TwitterTimelineEmbed } from '../node_modules/react-twitter-embed'
import Iframe from '../node_modules/react-iframe'
import { motion} from '../node_modules/framer-motion';

import IcTwitter from '../src/img/twitter-white.svg';
import IcFacebook from '../src/img/facebook-white.svg';
import aboutImage from '../src/img/aboutImage.png';
import Hakaru from '../src/img/hakaru.svg';




const containerVariants = {
  hidden:{
    opacity:0
  },
  visible:{
      opacity:1,
      transition:{
            delay:0.4,
            duration:0.8,
            
      }
  },
  exit:{
    opacity:0,
    transition:{
        delay:0.4,
        duration:0.8
    }
  }
}

const childVariants = {
  hidden:{
    scale:0.9
  },
  visible:{
    scale:1,
    transition:{
      duration:1.4,
    },
  }
}

function Home() {

  
  const upperWorksArray = [
    {id:'2',title:'コーテッド超硬合金製ラジアスエンドミルによるインコネル625の切削特性',lab:'形状創製工学研究室', name:'海老原迅',image:'workImageList1/workImage_2_01.png'},
    {id:'3',title:'駅構内における案内サインのわかりやすさに関する検討',lab:'ユーザーエクスペリエンスデザイン研究室', name:'加賀谷幸彦',image:'workImageList1/workImage_3_01.png'},
    {id:'16',title:'商品住宅における情報提示に関するガイドライン構築',lab:'デザインプロモーション研究室', name:'加藤菜々子',image:'workImageList2/workImage_16_02.png'},
    {id:'21',title:'単眼広角中心窩センサによる前方衝突警報の開発',lab:'人間支援知能ロボティクス研究室', name:'大塚健太',image:'workImageList1/workImage_21_01.png'},
    {id:'27',title:'ページ間の類似度を考慮したノウハウサイトの発見',lab:'コンピューティングデザイン研究室', name:'光藤多恵',image:'workImageList2/workImage_27_02.png'},
    {id:'29',title:'異文化間におけるモバイルアプリのUIの違いに関する研究-ライフスタイルの影響を受けて-',lab:'感性インタラクションデザイン研究室', name:'秋葉美怜',image:'workImageList1/workImage_29_01.png'},
    {id:'31',title:'未来感を表現するコンテンツの色彩とは何か？',lab:'色彩・コミュニケーションデザイン研究室', name:'新倉旭',image:'workImageList1/workImage_31_01.png'},
    {id:'6',title:'子供の防災に役立つカバンの提案',lab:'エモーショナルデザイン研究室', name:'近藤真弓子',image:'workImageList1/workImage_6_01.png'},
    {id:'33',title:'心を落ち着かせる食品要素の研究-非常食設計のために-',lab:'エモーショナルデザイン研究室', name:'嶋田祥之',image:'workImageList1/workImage_33_01.png'},
    {id:'38',title:'折り構造をもつ可変立体',lab:'製品計画研究室', name:'大霜 創',image:'workImageList1/workImage_38_01.png'},
  ];

  const lowerWorksArray = [
    {id:'50',title:'ライフスタイルの変化にシンクロする広場のあり方',lab:'製品計画研究室', name:'青木絵美',image:'workImageList1/workImage_50_01.png'},
    {id:'51',title:'フードトラックで用いられるテイクアウト容器',lab:'デザイン史・デザイン文化研究室', name:'筒井湧太郎',image:'workImageList1/workImage_51_01.png'},
    {id:'53',title:'20年間の変遷から見る車体形状',lab:'製品計画研究室', name:'村田千尋',image:'workImageList2/workImage_53_02.png'},
    {id:'55',title:'活動意志の違いによる運動データの活用に関する研究',lab:'感性インタラクションデザイン研究室', name:'安西竜晟',image:'workImageList1/workImage_55_01.png'},
    {id:'56',title:'編みを活かした構造体',lab:'製品計画研究室', name:'佐々木陸',image:'workImageList2/workImage_56_02.png'},
    {id:'68',title:'地域活性化を促進する超小型モビリティの提案',lab:'エモーショナルデザイン研究室', name:'片桐昂樹',image:'workImageList1/workImage_68_01.png'},
    {id:'60',title:'射出成形により作製したPP／セルブレンECの機械的特性に関する研究',lab:'形状創製工学研究室', name:'佐藤大樹',image:'workImageList1/workImage_60_01.png'},
    {id:'65',title:'若者世代に特化したコインランドリーDX化の検討',lab:'感性インタラクションデザイン研究室', name:'野口玲奈',image:'workImageList1/workImage_65_01.png'},
    {id:'69',title:'Vtuberによる大学PRの提案',lab:'デザイン史・デザイン文化研究室', name:'林響紀',image:'workImageList1/workImage_69_01.png'},
    {id:'71',title:'女子の入浴ストレスを解消し、入浴意欲を高めるプロダクトの提案',lab:'エモーショナルデザイン研究室', name:'松井彩也子',image:'workImageList1/workImage_71_01.png'},
  ];

 

  const NewsArray = [
    {date:'2020.3.13',title:'公式Youtubeチャンネルが開設されました。',text:'このチャンネルでは、一部の展示者のパネル発表を配信予定です。',image:'news-default.png',link:'https://www.instagram.com/p/CLgrRjwlo67/?utm_source=ig_web_copy_link'},
    {date:'2020.3.13',title:'コンセプトムービーが公開されました。',text:'今回の卒業展覧会のテーマは「ハカる」です。デザインを行う上で我々は”ハカル”ということを知らず知らずの内に重ねてきました。',image:'news-default.png',link:'https://www.instagram.com/p/CLgrRjwlo67/?utm_source=ig_web_copy_link'},
    {date:'2020.3.13',title:'ここにニュースを追加します。',text:'公開先の文章やニュースの説明をここに入力します。公開先の文章やニュースの説明をここに入力',image:'news-default.png'},
  ];
  

  const PortfolioArray = [
    {status:'UI/UX',name:'山本瑛士',image:'PortfolioBG01.png',className:"mgr-16",link:'https://www.instagram.com/p/CLMOTnCl1dP/?utm_source=ig_web_copy_link'},
    {status:'プロダクト',name:'渡邊拓実',image:'PortfolioBG02.png',className:"mgr-16",link:'https://www.instagram.com/p/CLRYmQzFFB1/?utm_source=ig_web_copy_link'},
    {status:'UI/UX',name:'湯崎野郁也',image:'PortfolioBG03.png',className:"mgr-16",link:'https://www.instagram.com/p/CK8iPCzFBTF/?utm_source=ig_web_copy_link'},
    {status:'プロダクト',name:'竹内さつき',image:'PortfolioBG04.png',link:'https://www.instagram.com/p/CKvvCz0FqRO/?utm_source=ig_web_copy_link'},
  ];


  return (
    
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="Top">

      <div className="mobile-hidden">
        <SnsVertical />
      </div>



      <div className="top-container">
        <motion.div variants={childVariants}>
        <p className="top-exhibition-title"><span>芝浦工業大学デザイン工学部<br class="br-sp"></br>卒業・修了研究展2021</span></p> 

        <img src={Hakaru}  className="hakaru" alt="Hakaru"/>
        <div className="exhibition-date">
            <div className="date">
                <p>3.13</p>
                <span className="day">SUT</span>
            </div>
            <div className="date-border">ー</div>
            <div className="date">
                <p>3.21</p>
                <span className="day">SUN</span>
            </div> 
        </div>
        <div className="exhibition-time">
          <span className="text-red">オンライン展示実施中</span>
        </div>   
        </motion.div>
        <Scroll />

        <BtnAttention text="ご来場される方への重要なお知らせ"/>
        
      </div>
      
    
      <div className="work-container">
        
        <div className="works-list" id="works-list">
          <div class="upper-loop-wrap">
            <ul>
            {upperWorksArray.map((work) =>{
              return(
              <li key={work.title}>
                <WorksItem
                  id={work.id}
                  title={work.title}
                  lab={work.lab}
                  name={work.name}
                  image={work.image}
                />
              </li>
              )
            })}
            </ul>

            <ul>
            {upperWorksArray.map((work) =>{
              return(
              <li key={work.title}>
                <WorksItem 
                  id={work.id}
                  title={work.title}
                  lab={work.lab}
                  name={work.name}
                  image={work.image}
                />
              </li>
              )
            })}
            </ul>

          </div>
          
          <div class="loop-wrap mg-40">
            <ul>
              {lowerWorksArray.map((work) =>{
                return(
                <li key={work.title}>
                  <WorksItem
                    id={work.id} 
                    title={work.title}
                    lab={work.lab}
                    name={work.name}
                    image={work.image}
                  />
                </li>
                )
              })}
            </ul>

            <ul>
            {lowerWorksArray.map((work) =>{
              return(
              <li key={work.title}>
                <WorksItem 
                  id={work.id}
                  title={work.title}
                  lab={work.lab}
                  name={work.name}
                  image={work.image}
                />
              </li>
              )
            })}
            </ul>

          </div>
        </div>

        <Btn 
          text='展示作品一覧を見る'
          ic='true'
          link='/Works'
        />
      </div>


      <div className="container">
          <TopSection 
            sectionTitle='NEWS'
          />
          
          <div className="news-list">

          {NewsArray.map((news) =>{
              return(
                <NewsItem key={news.title}
                  date={news.date}
                  title={news.title}
                  text={news.text}
                  image={news.image}
                  link={news.link}
                />
              )
            })}
         
          </div>

      </div>


      <div className="container">
        <TopSection 
          sectionTitle='PORTFOLIO'
        />

        <div className="portfolio-list">
          {PortfolioArray.map((portfolio) =>{
              return(
                <PortfolioItem key={portfolio.name}
                  status={portfolio.status}
                  name={portfolio.name}
                  image={portfolio.image}
                  className={portfolio.className}
                  link={portfolio.link}
                />
              )
            })}
        </div>

      </div>


      <div className="container">
        <TopSection 
            sectionTitle='ABOUT'
        />

        <div className="about-contents">
          
          <img src={aboutImage} className="about-image" alt="exhibitionPoster"/>

          <div className="about-texts">
            <div className="about-texts-row mg-16">
            <h4>展覧会名</h4>
            <p>芝浦工業大学デザイン工学部<br class="br-sp"></br>卒業・修了研究展2021</p>
            </div>

            <div className="about-texts-row mg-16 ">
            <h4>入場料</h4>
            <p>入場無料</p>
            </div>

            <div className="about-texts-row mg-16 ">
            <h4>会期</h4>
                <div >
                <p>2021.3.13(土) - 3.21(日)<br></br>10:00 ~ 17:00 <br class="br-sp"></br>(最終入場時間 16:15)</p>
                <p className="about-subtext">*日曜日は休校日のため、ご入場<br class="br-sp"></br>できません。<br></br>*最終開催日は16:00までの入場<br class="br-sp"></br>となります。</p>
                </div>
            </div>

            <div className="about-texts-row mg-16 ">
                <h4>会場</h4>
                <div>
                  <p>芝浦工業大学芝浦キャンパス<br></br>〒108-8548<br class="br-sp"></br>東京都港区芝浦3-9-14</p>
                  <p className="about-subtext">*大学敷地内に駐車場・駐輪場は<br class="br-sp"></br>ございません。</p>
                </div>
            </div>

          </div>
          
        </div>

        


        
        <div>
              <Btn
              text='詳しく見る'
              link='/About'
              />
        </div>
          


        

      </div>


      <div className="container">
        <TopSection 
          sectionTitle='SNS'
        />

        <p className="portfolio-text">運営スタッフによるSNSアカウントです。<br></br>最新情報はこちらからチェックできます。</p>

        <div className="flex">
          <div className="sns-container">
            <a className="label-twitter" href="https://twitter.com/sit_designex" target="_blank" rel="noopener noreferrer">
              <img src={IcTwitter} className="sns-ic" alt="Twitter"/>
            </a>

            <div className="twitter-embed">
              <TwitterTimelineEmbed　
                sourceType="profile"
                screenName="sit_designex"
                theme="light"
                options={{ width: 440, height: 300 }}
              />
            </div>          
          </div>

          <div className="sns-container">
            <a className="label-facebook" href="https://www.facebook.com/shibauradesign2020/" target="_blank" rel="noopener noreferrer">
              <img src={IcFacebook} className="sns-ic" alt="Facebook"/>
            </a>

            <div className="twitter-embed">
              <Iframe url={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fshibauradesign2020%2F&tabs=timeline&width=440&height=300&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`}
              width="100%"
              height="300px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"/>
            </div>
          </div>
        </div>

        
      </div>
      
    </motion.div>

            
  );
}

export default Home;
