import React from 'react';
import {Card , CardContent , Typography} from '@material-ui/core';
import './InfoBox.css';

function InfoBox({active , title , cases , isRed , total , ...props}) {
    return (
        <div>
            <Card className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`} onClick={props.onClick} >
                <CardContent>
                    <Typography color="textSecondary" className="infoBox__title">
                        {title}
                    </Typography>
                    <h2 className={`infoBox_cases ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>
                    <Typography color="textSecondary" className="infoBox__total">{total} Total</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBox
