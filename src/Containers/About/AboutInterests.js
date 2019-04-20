import React from "react";
import Icon from '@mdi/react';
import { mdiTriangle} from '@mdi/js'
import "./styles/AboutInterests.scss"

export default function AboutInterests(props) {
    const interests = ["Hiking", "Rock Climbing", "Fitness", "Football", "Playing Instruments", "International Volunteering"]

    return (
        <div id="InterestContainer">
            {
            interests.map(interest => {
                return (
                    <div key={interest} className="AboutBullet">
                    <Icon 
                    path={mdiTriangle}
                    size={0.5}
                    rotate={90}
                    color="black"
                    />  {interest}
                </div>
                )
            })
            }
        </div>
    )




}