import React from "react";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  Select,
} from "@material-ui/core";
import styled from "styled-components";
import ProductList from "./components/ProductList";
import plus from "./plus.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
    minHeight: 60,
  },
  inputSize: {
    fontSize: "32px",
    color: "#000",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Button = styled.button`
  width: 140px;
  height: 50px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const BodyWrapper = styled.div`
  width: 100vw;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 500px;
  background: #f9f9f9;
  margin: 0;
  text-align: center;
`;

const WrapperTop = styled.div`
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const P = styled.p`
  font-size: 18px;
  margin-top: 6rem;
`;

const PlusIcon = styled.img`
  margin-right: 16px;
`;

function App() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <BodyWrapper>
      <Wrapper>
        <WrapperTop>
          {/* material ui components */}
          {
            /* <FormControl className={classes.formControl}>
            <Select className={classes.inputSize} value={10}>
              <option value={10}>All Posts</option>
              <option value={20}>Popular Posts</option>
            </Select>
          </FormControl> */
            <FormControl className={classes.formControl}>
              <NativeSelect
                value={state.age}
                onChange={handleChange}
                name="age"
                className={classes.inputSize}
                inputProps={{ "aria-label": "age" }}
              >
                <option value="">All Posts</option>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </NativeSelect>
            </FormControl>
          }

          <Button>
            <PlusIcon src={plus} />
            ADD POST
          </Button>
        </WrapperTop>
        <P>
          Your campaign stats will show up here <br /> here after your first add
          goes live.
        </P>
      </Wrapper>
      <ProductList />
    </BodyWrapper>
  );
}

export default App;
