import React from "react";
import CopyConstructor from "./copyconstructor"
import { TextField, Button, Grid } from '@material-ui/core';

class CopyConstructorBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      result: "result"
    };

    this.handleChange = this.handleChange.bind(this);
    this.build = this.build.bind(this);
  }
  render() {
    return <>
      <Grid container>
        <Grid item xs={12} sm={6} style={{padding: 24}}><TextField fullWidth multiline onChange={this.handleChange} /></Grid>
        <Grid item xs={12} sm={6} style={{padding: 24}}><TextField fullWidth multiline value={this.state.result} /></Grid>
      </Grid>
      <Button onClick={this.build}>Build</Button>
      <Button onClick={this.build}>Build</Button>
      <Button onClick={this.build}>Build</Button>
    </>
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  build() {
    this.setState({ result: CopyConstructor(this.state.input) });
  }
}

export default CopyConstructorBuilder;