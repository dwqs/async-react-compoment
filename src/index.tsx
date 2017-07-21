import React from 'react';

export interface AsyncState {
    Component: any
}

function getAsyncComponent<T>(promise: () => Promise<T>): any {
	return class AsyncComponent extends React.Component<{}, AsyncState>{
        public state: AsyncState;
        
		constructor(props: {}) {
            super(props);
            this.state = {
                Component: null,
            };
        }

		public componentWillMount() {
            if (!this.state.Component) {
                promise().then((mod: any) => {
                    this.setState({
                        Component: mod.default ? mod.default : mod,
                    });
                });
            }
        }
		
        public render() {
            const { Component } = this.state;
            if (Component) {
                return (
                     <Component {...this.props} />
                );
            }
            // Failed to resolve async component
            return null;
        }
	}
}

const ReactAsyncComponent = {
    getAsyncComponent,
};

export default ReactAsyncComponent;