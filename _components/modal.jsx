import React from 'react';
import styles from './modal.module.scss';

export default class Modal extends React.Component{

    constructor(props){
        super();
        this.state = {showModal: false}
    }

    _showModal(){
        this.setState({showModal:true});
    }
    _closeModal(){
        this.setState({showModal:false});
    }

    render() {
        return (
            <div style={{display: this.state.showModal? 'block':'none'}} className={styles.modal_background}>
                <div className={styles.modal_wrapper}>
                    <div className={styles.modal_exit_button} onClick={this._closeModal.bind(this)}>X</div>
                    {this.props.innerContent}
                </div>
            </div>
        );
    }
}