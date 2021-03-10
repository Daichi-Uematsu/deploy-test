import './Attention.css';
import './Style.css';
import {Link} from '../node_modules/react-router-dom';
import { motion } from 'framer-motion';


import PageTop from './components/PageTop';

function Attention() {

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

  return (
    <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="Attention"
    >
        {/* <PageTop 
            title="ATTENTION"
            text="芝浦工業大学デザイン工学部卒業・修士研究展2021 一般公開中止のご案内"
        /> */}

        <div className="container">
            <div className="attentionTitle">
              <h2>芝浦工業大学デザイン工学部卒業<br class="sp"></br>・修士研究展2021 一般公開中止<br class="sp"></br>のご案内</h2>
            </div>

            <div className="titleTexts">
              <p>いつもご覧いただきましてありがとうござい<br class="sp"></br>ます。<br></br>この度、昨今の新型コロナウイルス感染拡大の影響および緊急事態宣言の延長を受け、3月13日〜21日に開催予定であった「芝浦工業<br class="sp"></br>大学デザイン工学部卒業・修士研究展2021」について、<span class="redText">一般公開を中止させて</span>頂く運びとなりましたのでご連絡致します。
             <br></br><br></br>来場を楽しみにしておられました方につきましては、大変恐縮ですが、ご理解頂けると幸いです。<br></br><br></br>なお、オンラインでの展示は引き続き開催<br class="sp"></br>予定です。オンライン展示詳細につきましては、開催日（3月13日）にSNSや本ホーム<br class="sp"></br>ページ等で告知予定ですので、ご確認の程<br class="sp"></br>よろしくお願いいたします。<br></br><br></br></p>
              
              <p className="attentionWriter">芝浦工業大学デザイン工学部<br class="sp"></br>卒業・修士研究展2021 卒業展示委員会一同</p>
            </div>
            
          {/* <div className="check1">
            <h3>ご来校時の体温チェック</h3>
            <p>ご来校時に、スタッフが非接触型体温計で<br class="sp"></br>検温をさせていただきます。37.5度以上の<br class="sp"></br>発熱が見つかった場合、ご本人および同伴の方は事前予約いただいてもご入場いただけ<br class="sp"></br>ません。あらかじめご了承ください。</p>
          </div>

          <div className="check2">
            <h3>ご来校に際してお願い</h3>
            <p>以下のような症状に心当たりがある方は、<br class="sp"></br>ご来校をご遠慮ください。</p><br></br>
            <p className="boldText">
               -  37.5℃を超える発熱がある。<br></br>
               -  息苦しさ、強いだるさがある。<br></br>
               -  咳や微熱など比較的軽い風邪の症状が続いている。<br></br>
               -  味覚や嗅覚に違和感がある。<br></br>
               -  無症状だが、感染もしくは感染者との接触の心配や不安がある。
            </p><br></br>
            <p>ご本人や身近な方が過去14日以内に、「入管法に基づく入国制限対象地域」への訪問歴をお持ちの方はご来場をご遠慮ください。<br></br><br></br>アルコール消毒液を使用した手指の消毒や、石けんを使用したこまめな手洗いにご協力<br class="sp"></br>ください。</p>
            <br></br>
            <p>マスク着用のご協力をお願いいたします。<br class="sp"></br>マスクをお持ちでないお客様は咳やくしゃみをされる際はハンカチ等で口をしっかり覆う「咳エチケット」にご協力ください。</p>
          </div>

          <div className="check3">
            <h3>その他の取り組み</h3>
            <p>・スタッフはマスクの着用をして対応させていただきます。<br></br>
            ・スタッフは手洗いや手指消毒をこまめに<br class="sp"></br>行い、風邪症状や発熱のある場合は参加<br class="sp"></br>いたしません。<br></br>
            ・会場内の混雑状況によってご入場を制限<br class="sp"></br>させていただく場合がございます。<br></br>
            ・校内および周辺では、他の参加者と一定の距離を保つようお声がけする場合がございます。<br></br>
            ・本展覧会のスタッフはマスクの着用をして対応させていただきます。</p>
          </div> */}
        
        </div>
    </motion.div>
  );
}

export default Attention;