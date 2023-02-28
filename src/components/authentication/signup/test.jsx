function loadable(loadableComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { loading: false };
    }
    onLoading = () =>
      this.setState({
        loading: !this.state.loading,
      });
    render() {
      const { loading } = this.state;
      {
        loading ? (
          "Loading..."
        ) : (
          <loadableComponent onLoading={this.onLoading} {...this.props} />
        );
      }
    }
  };
}
