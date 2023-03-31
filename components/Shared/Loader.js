import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <>
                <div className={`preloader ${this.props.loading ? '' : 'preloader-deactivate'}`}>
                    <div className="spinner">
                        <img src="/images/spinnerlogo.png" alt="" />
                    </div>
                </div>
            </>
        );
    }
}

export default Loader;