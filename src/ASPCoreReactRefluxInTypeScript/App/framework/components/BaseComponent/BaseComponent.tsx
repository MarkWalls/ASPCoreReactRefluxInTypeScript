import * as React from 'react';

interface IComponentProps { }
interface IComponentState { }


export default class BaseComponent<IComponentProps, IComponentState> extends React.Component <IComponentProps, IComponentState > {
    constructor() {
        super();
    }


}
