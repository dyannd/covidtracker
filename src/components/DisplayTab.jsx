import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
function DisplayTab(props) {

    return (
        <div className="col-12 col-sm-12 col-md-6 displaytab-wrapper">
            <div className="displaytab shadow  ">
                <TransitionGroup>
                    <CSSTransition key={props.content} timeout={1000} classNames="fade">
                        <div>
                            <h1 className="displaycontent">{props.content}</h1>
                            <h2 className="displaysubcontent">{props.subcontent !== null ? 'Today: +' + props.subcontent : null}</h2>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
                <p className="displaytitle">{props.title}</p>
            </div>
        </div>
    )
}

export default DisplayTab