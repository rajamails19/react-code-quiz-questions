function withSubscription(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectData(DataSource, props)
      };
    }
    
    // ... lifecycle methods to subscribe to DataSource
    
    render() {
      return <________ data={this.state.data} {...this.props} />;
    }
  };
}
