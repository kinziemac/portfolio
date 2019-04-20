import React from "react";
import Icon from '@mdi/react';
import { mdiTriangle} from '@mdi/js'
import "./styles/ExperienceWidget.scss";

export default function ExperienceWidget({ job }) {
    return (
        <div className="ExperienceWidget">
            <div className="WidgetHeader">
                <div className="WidgetJobTitleSection">
                    <p className="WidgetTitle">{job.title}</p>
                    <p className="WidgetSubtitle">{job.company}</p>
                    <p className="WidgetDate">{job.dates}</p>
                </div>
                <img className="CompanyLogo" src={require(`images/${job.companyLogo}`)} />
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
                </div>
            </div>
        </div>
    )
}