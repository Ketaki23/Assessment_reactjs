import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const styles = theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing.unit * 3,
    },
    group: {
      margin: `${theme.spacing.unit}px 0`,
    },
  });
class AddBlogForm extends React.Component  {
    constructor(props){
        super(props);
        this.state={
        blogname:'',
        blogdescription:'',
        value: 'active',
        }
       }
      handleChange = event => {
        this.setState({ value: event.target.value });
      };
      render() {
        const { classes } = this.props;
        return (
            <div>
            <MuiThemeProvider>
              <div>
              <AppBar
                 title="Add Blog"
               />
               <TextField
                 hintText="Blog Title"
                 floatingLabelText="Blog Name"
                 onChange = {(event,newValue) => this.setState({blogname:newValue})}
                 />
               <br/>
                 <TextField
                   hintText="Blog Description"
                   floatingLabelText="Blog Description"
                   onChange = {(event,newValue) => this.setState({blogdescription:newValue})}
                   />
                 <br/>
                 <br/>
          <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Status</FormLabel>
             <RadioGroup aria-label="status" name="status" className={classes.group} value={this.state.value}  onChange={this.handleChange}>
               <FormControlLabel value="active" control={<Radio />} label="Active" />
                <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
              </RadioGroup>
            </FormControl>
          </div>
          <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             <RaisedButton label="Cancel" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
        );
      }
    }
    const style = {
        margin: 15,
       };
    AddBlogForm.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    export default withStyles(styles)(AddBlogForm);
    