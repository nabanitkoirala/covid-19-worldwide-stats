import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import Countup from 'react-countup';
import Class from 'classnames';



const Cards=({data:{ confirm, recover,dead,update }})=>{
    if(!confirm){
        return 'Loading...'
    }
    
    return(
        <div>
        <h1 className={styles.text}>Statistics</h1>
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={Class(styles.Card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5"><Countup 
                            start={0}
                            end={confirm.value}
                            duration={3}
                            separator=","
                        />
                        </Typography>
                         <Typography colr="textSecondary">{new Date(update).toDateString()}</Typography>
                        <Typography variant="body2">Number of Active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={Class(styles.Card,styles.recover)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5"><Countup
                            start={0}
                            end={recover.value}
                            duration={3}
                            separator=","
                        /></Typography>
                        <Typography colr="textSecondary">{new Date(update).toDateString()}</Typography>
                        <Typography variant="body2">Number of Recovered cases from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={Class(styles.Card,styles.dead)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"><Countup
                            start={0}
                            end={dead.value}
                            separator=","
                        /></Typography>
                        <Typography colr="textSecondary">{new Date(update).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
        </div>
    )
}



export default Cards;