import React, { useState, useEffect } from 'react';
import { Line, HorizontalBar } from 'react-chartjs-2';
import { Typography, CardContent, Card, Grid } from '@material-ui/core';
import { fetchDailyData, fetchCurrentData } from '../../api-handler/index';
import { makeStyles } from '@material-ui/core/styles';

import TopBar from '../TopBar/TopBar';
import SGCards from '../Cards/SGCards';

const useStyles = makeStyles({
  container: {
    display: 'flexbox',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    marginLeft: '10%',
    marginTop: '0% !important',
  },
  card: {
    width: '80%',
    marginTop: '2% !important',
    borderRadius: '12px',
    backgroundColor: 'rgb(0, 0, 225, 0.1)'
  },
  card1: {
    width: '80%',
    marginTop: '1% !important',
    borderRadius: '12px',
    backgroundColor: 'rgb(225, 0, 0, 0.1)'
  }
})

const Singapore = () => {
  const [dailyData, setDailyData] = useState([]);
  const [currentData, setCurrentData] = useState({});

  const styles = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      setDailyData(await fetchDailyData());
      setCurrentData(await fetchCurrentData());
    }
    fetchData();
  }, [])

  const sgLineGraph = (
    dailyData.length
      ? (<Line
        data={{
          labels: dailyData.map(items => new Date(items.Date).toDateString()),
          datasets: [{
            data: dailyData.map(items => items.Confirmed),
            label: 'Confirmed',
            borderColor: '#FFA500',
            backgroundColor: 'rgba(255,165,0, 0.3)',
            fill: 'origin'
          }, {
            data: dailyData.map(items => items.Deaths),
            label: 'Deaths',
            borderColor: '#FF0000',
            backgroundColor: 'rgba(255,0,0, 0.3)',
            fill: 'origin'
          }, {
            data: dailyData.map(items => items.Recovered),
            label: 'Recovered',
            borderColor: '#00FF7F',
            backgroundColor: 'rgba(0,255,127, 0.3)',
            fill: 'origin'
          }, {
            data: dailyData.map(items => items.Active),
            label: 'Active',
            borderColor: '#FFFF00',
            backgroundColor: 'rgba(255,255,0, 0.3)',
            fill: 'origin'
          }]
        }}
        options={{
          maintainAspectRatio: true,
          responsive: true
        }} />)
      : null
  )

  const sgBarGraph = (
    currentData ? (
      <HorizontalBar
        data={{
          labels: ['Confirmed', 'Recovered', 'Active', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(255,165,0, 0.5)', 'rgba(0,255,127, 0.5)', 'rgba(255,255,0, 0.5)', 'rgba(255, 0, 0, 0.3)'],
              data: [currentData.infected, currentData.recovered, currentData.active, currentData.deaths],
            },
          ],
        }}
        options={{
          legend: { display: false }
        }}
      />
    ) : null
  )

  return (
    <>
      <TopBar />
      <div className={styles.info}>
        <SGCards />
      </div>
      <div className={styles.container}>
        <Grid alignItems='center' direction='row'>
          <Grid item component={Card} className={styles.card}>
            <CardContent>
              <Typography variant='h5' align='center'>Singapore Trends 🇸🇬</Typography>
              {sgLineGraph}
            </CardContent>
          </Grid>
          <Grid item component={Card} className={styles.card1}>
            <CardContent>
              <Typography variant='h5' align='center'>Singapore Summary 🇸🇬</Typography>
              {sgBarGraph}
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Singapore;