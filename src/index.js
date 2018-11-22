import React from "react";
import ReactDOM from "react-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import "index.scss";
import CopyConstructor from "./copyconstructor"

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
    return <div margin="0" >
      <Grid container spacing={16} >
        <Grid item xs={12} sm={6}><TextField fullWidth multiline onChange={this.handleChange}/></Grid>
        <Grid item xs={12} sm={6}><TextField fullWidth multiline value={this.state.result}/></Grid>
      </Grid>
      <Button onClick={this.build}>Build</Button>
      <Button onClick={this.build}>Build</Button>
      <Button onClick={this.build}>Build</Button>
    </div>
  }
  handleChange(event) {
    this.setState({input: event.target.value});
  }

  build() {
    this.setState({result: CopyConstructor(this.state.input)});
  }
}

ReactDOM.render(
  <CopyConstructorBuilder/>,
  document.getElementById("root")
);
