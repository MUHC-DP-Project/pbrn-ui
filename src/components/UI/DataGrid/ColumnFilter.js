import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import './BasicTable.css'
function ColumnFilter({column}) {
    const {filterValue, setFilter} = column;
    const [open, setOpen] = useState(false);
    return (
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center" >
            <Grid item>
                <IconButton aria-label="sort desc" size="small" onClick={()=>setOpen(!open)}>
                    <SearchIcon fontSize="small"/>
                </IconButton>
            </Grid>
            <Grid item>
                {open&&<Grow
                className="headerTextSearch"
                in={open}
                {...(open ? { timeout: 1000 } : {})}>
                <input value={filterValue || ''}  onChange={e => setFilter(e.target.value)}/>
                </Grow>}
            </Grid>
        </Grid>
    )
}

export default ColumnFilter
