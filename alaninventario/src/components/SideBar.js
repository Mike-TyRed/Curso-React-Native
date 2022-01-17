import { Button, Stack, Drawer } from '@mui/material';
//import Drawer from '@mui/material/Drawer';

const SideBar = () => {
    return (
        <div style={{
            position:"fixed",
            height: "100%",
            width: 200,
            marginTop: 10,
        }}>
            <Stack spacing={2} direction={"column"}>
                <Button variant="outlined">Productos</Button>
                <Button variant="outlined">Ventas</Button>
                <Button variant="outlined">Clientes</Button>
            </Stack>
        </div>
    )
}
export default SideBar;