import React from 'react';
import '../postGrid/postGrid.css';

var Campaign = props => {
    return (
        <div className="row post-grid m-0">
            {props.postDetails.map(campaign =>
                <div className="col-md-4 col-12 mb-3" key={campaign.id}>
                    <div className="post-grid_item">
                        {/* Post Header */}
                        {campaign.brand ?
                            <div className="post-grid__header">
                                <h4 className="post-grid__head">Campaign Name</h4>
                                <h5 className="post-grid__title">{campaign.brand}</h5>
                            </div>
                            : null
                        }

                        {/* Post Body */}
                        <div className="post-grid__body">
                            {campaign.body ?
                                <section className="post-grid__section">
                                    <h4 className="post-grid__head">Campaign Description</h4>
                                    <p>{campaign.body}</p>
                                </section>
                                : null
                            }
                            {campaign.date ?
                                <section className="post-grid__section">
                                    <h4 className="post-grid__head">Campaign Duration</h4>
                                    <p>{campaign.date} - Present</p>
                                </section>
                                : null
                            }
                        </div>

                        {/* Post Footer */}
                        {campaign.status ?
                            <div className="post-grid__footer d-flex align-items-center">
                                <div className="post-grid__status">
                                    {campaign.status === "Completed" ?
                                        <i className="fa fa-check-circle"></i>
                                        : <i className="fa fa-spinner"></i>
                                    } {campaign.status}
                                </div>
                                <button className="ml-auto btn btn-blue-border" onClick={ props.clicked.bind(null, campaign) } key={campaign.id}><i className="fa fa-bar-chart"></i> Insights</button>
                            </div>
                            : null
                        }
                    </div>
                </div>
            )}
        </div>        
    )
}

export default Campaign;
