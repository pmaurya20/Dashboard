import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Portlet from '../../components/HOC/portlet/portlet';
import CampaignPost from '../../components/postGrid/postGrid';
import Modal from '../../components/HOC/fullModal/fullModal';
import Axios from '../../axios/axios1';
import $ from 'jquery';

class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            modalData: ''
        }
    }

    componentDidMount() {
        Axios.get("/").then(res => {
            const result = this;
            result.setState({
                data: res.data
            });
        }).catch(response => {
            const result = this;
            result.setState({
                data: response.data
            });
        });
    }

    // Open Modal
    onClickHandler = (campaign) => {
        $('.modal').show();
        $('.modal').closest('body').addClass('body-hidden-overflow');
        this.setState({
            modalData: campaign
        });
     }

    //  Close Modal
     closeModalHandler = (current) => {
        $('.modal').hide();
        $('.modal').closest('body').removeClass('body-hidden-overflow');
     }

    render() {
        let cmapaignData = this.state.data.slice();   
        return (
            <div className="content">
                <Container className="w-75">                
                    {/* Post Grid */}
                    <Portlet PortletTitle="All Campaigns">{<CampaignPost postDetails={cmapaignData} clicked={this.onClickHandler} />}</Portlet>
                    
                    {/* Full Modal */}
                    <Modal ModalData={this.state.modalData} closeEvent={this.closeModalHandler.bind(this)}></Modal>
                </Container>
            </div>
        )
    }
}

export default Reports;
