import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
function DisplayTab(props){
    
    return(
        <div className={"displaytab col-lg-6 col-md-6 col-sm-12 shadow "+props.class}>
           <TransitionGroup>
            <CSSTransition key={props.content} timeout={1000} classNames="fade">
             <h1 className="displaycontent">{props.content}</h1>
            </CSSTransition>
           </TransitionGroup>
            <p className="displaytitle">{props.title}</p>
        </div>
    )
}

export default DisplayTab