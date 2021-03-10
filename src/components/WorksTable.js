import React from 'react';
import './WorksTable.css';

import WorkSmall from './WorkSmall';






class WorksTable extends React.Component{
  
  render(){

    /*  worksItemに渡すデータ */
    const WorksArray = this.props.list;//データ全体
    const LIST_START = (this.props.page - 1)*9;
    const LIST_END = this.props.page * 9;

    const LIST_START_SP = (this.props.page - 1)*8;
    const LIST_END_SP = this.props.page * 8;


    let ShowListPc = WorksArray.slice(LIST_START,LIST_END);
    let ShowListTbSp = WorksArray.slice(LIST_START_SP,LIST_END_SP);
    

    return( 
        <div className="work-table">
          <p className="works-number">作品総数：{WorksArray.length}</p>

          <div className="work-list">
            {ShowListPc.map((work) =>{
                return(
                  
                  <WorkSmall 
                    id={work.id}
                    image={work.image}
                    title={work.title}
                    name={work.name}
                    lab={work.lab}
                  />
                  
                )
              })}
          </div>

          <div className="work-list-sp">
            {ShowListTbSp.map((work) =>{
                return(
                  
                  <WorkSmall 
                    id={work.id}
                    image={work.image}
                    title={work.title}
                    name={work.name}
                    lab={work.lab}
                  />
                  
                )
              })}
          </div>

        </div>
    );
    }
}

export default WorksTable



