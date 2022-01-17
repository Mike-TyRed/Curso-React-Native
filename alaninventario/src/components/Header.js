import Button from "@mui/material/Button";
import { useState } from "react";
import SideBar from "./SideBar";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button variant="outlined" onClick={() => setOpen(!open)}>
                Menu
            </Button>
            {open ? <SideBar/> : null}
        </div>
    )
}
export default Header;