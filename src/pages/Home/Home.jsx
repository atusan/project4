import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
import {  Grid } from 'semantic-ui-react'

export default function Home({user,handleLogout}){

    return (
        <Grid centered >
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            hello
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{maxWidth: 450}}>
            hello2
          </Grid.Column>
        </Grid.Row>
    </Grid>

    )
}