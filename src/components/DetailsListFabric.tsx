import React from "react";

class Foo extends React.Component<{}> {
  constructor(props:{}) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Test foo</div>;
  }
  componentDidMount() {
    console.log("Foo - componentDidMount");
    this.setState({})
  }

  componentWillUnmount() {
    console.log("Foo - componentWillUnmount");
  }
}

const FooFC: React.FunctionComponent = () => {
  const [state, setState] = React.useState({});

  React.useEffect(() => {
    console.log("FooFC - componentDidMount");
    setState({});

    return () => console.log("FooFC - componentWillUnmount");
  }, []);
  return <div>Test foo</div>;
}

export const DetailsListFabric = () => {
  return (
    // <FooFC />
    <Foo />
  );
};
