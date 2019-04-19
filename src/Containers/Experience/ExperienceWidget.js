import React from "react";
import Icon from '@mdi/react';
import { mdiTriangle} from '@mdi/js'
import "./styles/ExperienceWidget.scss";
import UnderlineWords from '../../Components/UnderlineWords.js'

export default function ExperienceWidget({ job, finalJob }) {
    return (
        <div className="ExperienceWidget" style={finalJob ? {} : { marginBottom: "6%"} }>
            <div className="WidgetHeader">
                <p className="WidgetTitle">
                    {job.title} {"@ "}<a href={job.companyLink} target="_blank" rel="noopener noreferrer">
                        <UnderlineWords word={job.company} />
                    </a>
                </p>
                <p className="WidgetTitle"></p>
                <p className="WidgetDate">
                    {job.dates}
                </p>
            </div>
            <div className="WidgetTextContainer">
                {
                    job.descriptions.map(descText => {
                        return (
                            <div className="WidgetDescription">
                                <Icon 
                                    path={mdiTriangle}
                                    size={0.4}
                                    rotate={90}
                                    color="black"
                                    />
                                <p> 
                                {descText}
                                </p>
                            </div>
                        )
                    })
                }
                <div className="WidgetImageContainer">
                {
                    job.techs.map(language => {
                        return (
                            <img className="WidgetImage" src={`images/${language}`} alt={language} />
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}