import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux';
import {reduxForm, getFormValues} from 'redux-form';
import './ChangePassword.css';
import handleSubmit from './handleSubmit';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

function ChangePassword(props) {
    const [viewOldPassword,
        setViewOldPassword] = useState(false);
    const [viewNewPassword,
        setViewNewPassword] = useState(false);
    const [oldPassword,
        setOldPassword] = useState('');
    const [newPassword,
        setNewPassword] = useState('');
    const [error, setError] = useState(null);
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Paper elevation={10} className="CP_paper">
                <form>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={2}>
                        <Grid item>
                            <Typography variant="h5">
                                Reset Password
                            </Typography>
                            {error&&<Typography className="CP_error">
                                {error}
                            </Typography>}
                        </Grid>

                        <Grid item>
                            <TextField
                                placeholder="Old Password"
                                variant="outlined"
                                type={viewOldPassword?"text":"password"}
                                value={oldPassword}
                                onChange={e => {
                                setOldPassword(e.target.value)
                            }}
                                InputProps={{
                                endAdornment: <IconButton aria-label="view" onClick={()=>setViewOldPassword(!viewOldPassword)}>  
                                        {viewOldPassword?<VisibilityIcon/>:<VisibilityOffIcon/>}
                                    </IconButton>
                            }}/>

                        </Grid>
                        <Grid item>
                            <TextField
                                placeholder="New Password"
                                variant="outlined"
                                type={viewNewPassword?"text":"password"}
                                value={newPassword}
                                onChange={e => {
                                setNewPassword(e.target.value)
                            }}
                                InputProps={{
                                    endAdornment: <IconButton aria-label="view" onClick={()=>setViewNewPassword(!viewNewPassword)}>  
                                        {viewNewPassword?<VisibilityIcon/>:<VisibilityOffIcon/>}
                                    </IconButton>
                            }}/>

                        </Grid>
                        <Grid item>
                            <Button
                                className="CP_button"
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={(event) => {
                                event.preventDefault();
                                handleSubmit(props, {
                                    oldPassword:oldPassword,
                                    newPassword:newPassword
                                    },setError)

                                
                            }}>
                                Submit
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Paper>
        </Grid>

    );
}

const mapStateToProps = (state) => {
    return {
        allValues: getFormValues('changePassword')(state)
    }
}
export default connect(mapStateToProps)(reduxForm({form: 'changePassword', destroyOnUnmount: true, forceUnregisterOnUnmount: true})(ChangePassword));
