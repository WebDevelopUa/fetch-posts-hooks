import React from "react";
import useResources from "./useResources";

const ResourceList = ({resource}) => {
    const resources = useResources(resource)

    if (!resources.length) {
        return (
            <div className="ui relaxed divided list">
                <div className="ui loading vertical segment">
                    <p>&nbsp;</p>
                </div>
            </div>
        )
    } else
        return (
            <div className="ui relaxed divided list">
                {resources.map(record => (
                    <div key={record.id} className="item">
                        <i className="ui big react top aligned blue icon"/>
                        <div className="content">
                            <div className="ui small header">{record.title}</div>
                            <div className="description">{record.body || record.completed.toString()}</div>
                        </div>
                    </div>))
                }
            </div>
        )
}

export default ResourceList