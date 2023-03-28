import React, { useContext } from "react";
import { contextProduct } from "../store/contextstore";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const AddProduct = (props) => {
  const { list, addproducts } = useContext(contextProduct);
  const [anchorEl, setAnchorEl] = React.useState(false);

  const handleClose = () => {
    setAnchorEl(false);
  };

  const handleAddProduct = async (event) => {
    event.preventDefault();

    const id = props.id;

    addproducts(props.item, id);
    setAnchorEl(event.currentTarget);
    setTimeout(() => {
      handleClose();
    }, 1500);
  };
  const addedPop = list.length;
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <form>
        <div>
          <Button
            aria-describedby={id}
            variant="contained"
            size="small"
            onClick={handleAddProduct}
          >
            Add to cart
          </Button>
        </div>
        <div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 500, left: 2000 }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 4 }}>
              Your Product : Album{" "}
              <span style={{ color: "red" }}>{addedPop}</span> is added to the
              cart
            </Typography>
          </Popover>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
