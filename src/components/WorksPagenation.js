import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import WorksTable from './WorksTable';
import './WorksPagenation.css';


const json = require('../test.json');
let WorksArray = [];
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


for(let i=0; i < json.length;i++){
  const item = json[i];
  let formalName = '';

  for(let i = 0; i < labList.length; i++){
    if(item.lab === labList[i].lab){
      formalName = labList[i].formalName;
    }
  };


  WorksArray.push({id:item.id,title:item.title,name:item.name,lab:formalName,image:'WorksItemBG01.png'})
};


const countPc = Math.ceil(WorksArray.length / 9);
const countSp = Math.ceil(WorksArray.length / 8);


const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));



export default function PaginationControlled() {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const PaginationPc = (
    <Pagination count={countPc} size="large" page={page} onChange={handleChange}/>
  );

  const PaginationSp = (
    <Pagination count={countSp} size="medium" page={page} onChange={handleChange}/>
  );

  return (
    <div className={classes.root}>
      <WorksTable list={WorksArray} page={page}/>
      <div className="hidden-sp">{PaginationPc}</div>
      <div className="responsive-tb-sp">{PaginationSp}</div>
    </div>
  );
}