import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from '@material-ui/core/styles';

import Links from '@material-ui/core/Link';
import {Link} from '../../node_modules/react-router-dom';


import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    link: {
      display: 'flex',
      fontFamily:'Yugothic'
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
    current: {
        fontWeight:300
      }
  }));

export default function SimpleBreadcrumbs(props) {
    const classes = useStyles();

    return (
    <Breadcrumbs aria-label="breadcrumb">
        
        <Link to="/">
        <Links className={classes.link}>
            <HomeIcon className={classes.icon} style={{ color:"#777777",margin:0}}/>
        </Links>
        </Link>


    <Typography color="textPrimary" className={classes.current}>{props.current}</Typography>
    </Breadcrumbs>
    );
}
