import {Grid, Box} from '@mui/material'

function Products(){
    return(
        <div className="">
            <Grid container spacing={2}>
                <Grid item  xs={4}>
                    <Box p={2}>
                    <img src={require("E:\\Projects\\Work\\LearnReact\\learn_react\\src\\cat.jpg")} alt="Logo"  width={"100px"} />
                    <p>Item 1</p>
                    </Box>
                </Grid>
                <Grid item  xs={4}>
                    <Box p={2}>
                    <img src={require("E:\\Projects\\Work\\LearnReact\\learn_react\\src\\cat.jpg")} alt="Logo"  width={"100px"} />
                    <p>Item 1</p>
                    </Box>
                </Grid>
                <Grid item  xs={4}>
                    <Box p={2}>
                    <img src={require("E:\\Projects\\Work\\LearnReact\\learn_react\\src\\cat.jpg")} alt="Logo"  width={"100px"} />
                    <p>Item 1</p>
                    </Box>
                </Grid>
                <Grid item  xs={4}>
                    <Box p={2}>
                    <img src={require("E:\\Projects\\Work\\LearnReact\\learn_react\\src\\cat.jpg")} alt="Logo"  width={"100px"} />
                    <p>Item 1</p>
                    </Box>
                </Grid>
            
            </Grid>
        </div>
    );
}

export default Products;