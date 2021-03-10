import './About.css';
import './Style.css';

import { motion } from '../node_modules/framer-motion';
import PageTop from './components/PageTop';
import aboutImage from '../src/img/aboutImage.png';
import Icon from '@material-ui/core/Icon';

const containerVariants ={
    hidden:{
        opacity:0
    },
  
    visible:{
        opacity:1,
        transition:{
            delay:0.4,
            duration:0.8,
            when:"beforeChildren"
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



function About() {

  return (
    
    <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="About">
    
        <PageTop 
            title="ABOUT"
            text="展覧会について"
        />
        <div className="container">
            
            <div className="greeting" id="greeting">
                <h2>ごあいさつ</h2>

                <p>
                2020年2月、突如として襲った世界的出来事は、
                有無を言わさず、私たちの大学生活を変えていきました。<br></br>

                授業もゼミも研究も、そして友達とのたわいもない会話までも。<br></br>
                <br></br>
                各行事が自粛やオンライン化を図る中で、
                私たちは何度も議論を重ね、卒業展示の開催に踏み切りました。<br></br>
                私たちが何を考え、想い、社会に向き合っていくのか。
                このような状況だからこそ、発信する意義があるのではないでしょうか。<br></br>
                <br></br>
                デザイン工学部での学びの集大成。<br></br>
                卒業制作を通して、各々が“ものづくり”について真剣に向き合った答えがここにあります。<br></br>
                <br></br>
                今年で9回目となる卒業・終了研究展。2017年に学部内の再編成を行って、最初の展示会になります。<br></br>
                今までとは違う新たなデザイン工学部の一面を感じ取ってみてください。<br></br>
                <br></br>
                皆様のお越しを心よりお待ちしております。
                <div className="writername">
                     2020.3.13<br></br>
                      芝浦工業大学デザイン工学部卒業・修了研究展委員
                    </div>
                </p>

            </div>


            <div className="concept">
                <h2>コンセプト</h2>

                <div className="conceptContents">

                        <div className="conceptTitle">
                            <p>ハカる</p>
                        </div>

                        <div className="conceptText">
                        <p>なぜ「ハカる」にしたのか。その背景や理由などをここに記述する。卒展に込める思い、来場する人に何を伝えたいのか。<br></br>
                        <br></br>
                        なぜ「ハカる」にしたのか。その背景や理由などをここに記述する。卒展に込める思い、来場する人に何を伝えたいのか。<br></br>
                        なぜ「ハカる」にしたのか。その背景や理由などをここに記述する。卒展に込める思い、来場する人に何を伝えたいのか。<br></br>
                        <br></br>
                        なぜ「ハカる」にしたのか。その背景や理由などをここに記述する。卒展に込める思い、来場する人に何を伝えたいのか。</p>
                        </div>
                        
                </div>

            </div>


            <div className="overView">
             <h2>開催概要</h2>

            <div className="overViewcontents">

                <div className="about-texts">
                    <div className="about-texts-row mg-16">
                    <h4>展覧会名</h4>
                    <p>芝浦工業大学デザイン工学部卒業・修了研究展2021</p>
                    </div>

                    <div className="about-texts-row mg-16">
                    <h4>入場料</h4>
                    <p>入場無料</p>
                    </div>

                    <div className="about-texts-row mg-16">
                    <h4>会期</h4>
                        <div >
                        <p>2021.3.14(日) - 3.28(日)<br></br>10:00 ~ 18:00 (最終入場時間 17:30)</p>
                        <p className="about-subtext">*日曜日は休校日のため、ご入場できません。<br></br>*最終開催日は17:00までの入場となります。</p>
                        </div>
                    </div>

                    <div className="about-texts-row mg-16">
                        <h4>会場</h4>
                        <div>
                         <p>芝浦工業大学芝浦キャンパス<br></br>〒108-8548 東京都港区芝浦3-9-14</p>
                         <p className="about-subtext">*大学敷地内に駐車場・駐輪場はございません。</p>
                        </div>
                    </div>

                    <div className="about-texts-row">
                    <h4>主催</h4>
                    <p>芝浦工業大学学生自治会</p>
                    </div>
                </div>
                <img src={aboutImage} className="about-image" alt="exhibitionPoster"/>
            </div>
            </div>

            
            <div className="access">
                <h2>アクセス</h2>

                <div className="accessContents">

                    <div className="accessText">
                
                        <h3>芝浦工業大学 芝浦キャンパス</h3>
                        <p>〒108-8548東京都港区芝浦3-9-14</p>

                        <ul className="bigMap">
                            <li>
                                <h4><a href="https://www.google.co.jp/maps/place/%E8%8A%9D%E6%B5%A6%E5%B7%A5%E6%A5%AD%E5%A4%A7%E5%AD%A6%E8%8A%9D%E6%B5%A6%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9/@35.6434231,139.7494067,19.35z/data=!4m13!1m7!3m6!1s0x60188bb4d9a8052b:0xc5aaaf0b3d68e69d!2z44CSMTA4LTAwMjMg5p2x5Lqs6YO95riv5Yy66Iqd5rWm77yT5LiB55uu77yZ4oiS77yR77yUIOiKnea1puW3pealreWkp-WtpiDoip3mtabjgq3jg6Pjg7Pjg5Hjgrk!3b1!8m2!3d35.6434443!4d139.7496359!3m4!1s0x60188bb4d90f4165:0xc16d0476cce240aa!8m2!3d35.6433728!4d139.7496946?hl=ja" target="_blank" rel="noopener noreferrer">大きな地図で見る</a></h4>
                            
                            </li>
                            <li>
                                <Icon>open_in_new</Icon>
                            </li>
                        </ul>

                        <h4>電車でのアクセス</h4>
                        <p>JR山手線 京浜東北線「田町駅」芝浦口から徒歩3分<br></br>
                        都営地下鉄 三田線・浅草線「三田駅」から徒歩5分</p>
                    </div>

                    <iframe className="accessMap" src="https://maps.google.co.jp/maps?output=embed&t=m&hl=ja&z=18&ll=35.6433503734224, 139.7496825387055&q=35.6433503734224, 139.7496825387055" frameborder="0" scrolling="no" width="auto"></iframe>
                    
                </div>
            </div>
       
        </div>
    </motion.div>
  );
}

export default About;


