import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ButtonGroup,
  Typography,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  genders,
  postType,
  products,
  competitors,
  mile,
  treatment,
} from "../db";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  toLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  btn: {
    background: "#000",
    color: "#fff",
  },
  acc: {
    paddingLeft: "6rem",
  },
}));

const SidebarBlock = styled.div`
  width: 350px;
  background: #fff;
  height: auto;
  margin-right: 3rem;
  font-size: 14px;
  padding-top: 3rem;

  border-right: 1px solid #cfcfcf;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const MyInput = styled.input`
  width: 40px;
  height: 35px;
  border: 2px solid #c4c4c4;
  border-radius: 4px;
  padding: 8px;
`;

const Line = styled.span`
  margin: 0 10px;
`;

const F = styled.p`
  margin-bottom: 20px;
  font-weight: 500;
  opacity: 0.6;
  margin-left: 7rem;
`;

const Select = styled.select`
  width: 200px;
  height: 40px;
  padding: 0 8px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin-top: 8px;
`;

const SelectMini = styled.select`
  width: 80px;
  height: 40px;
  padding: 4px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin-right: 8px;
`;

const Sidebar = (props) => {
  const classes = useStyles();

  return (
    <>
      <SidebarBlock>
        <F>FILTER BY</F>
        <Accordion className={classes.acc}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>POST TYPE</Typography>
          </AccordionSummary>
          {postType.map((type) => (
            <AccordionDetails
              onClick={() => props.handleToggle(type.name)}
              key={type.id}
              className={classes.toLeft}
            >
              <p>{type.name}</p>
              {props.checked.indexOf(type.name) === -1 ? null : (
                <CheckIcon fontSize="small" />
              )}
            </AccordionDetails>
          ))}
        </Accordion>
        <Accordion className={classes.acc}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>PRODUCTS</Typography>
          </AccordionSummary>
          {products.map((product) => (
            <AccordionDetails
              onClick={() => props.handleToggle(product.name)}
              key={product.id}
              className={classes.toLeft}
            >
              <p>{product.name}</p>
              {props.checked.indexOf(product.name) === -1 ? null : (
                <CheckIcon fontSize="small" />
              )}
            </AccordionDetails>
          ))}
        </Accordion>
        <Accordion className={classes.acc}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>COMPETITORS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Column>
              <label htmlFor="sort">Posts</label>
              <Select onChange={(e) => props.handleToggle(e.target.value)}>
                <option>Select...</option>
                {competitors.map((c) => (
                  <option value={c.name} key={c.id}>
                    {c.name}
                  </option>
                ))}
              </Select>
            </Column>
          </AccordionDetails>
          <AccordionDetails>
            <Column>
              <label htmlFor="sort">Location</label>
              <Flex>
                <SelectMini
                  onChange={(e) => props.handleToggle(e.target.value)}
                >
                  <option>0</option>
                  {mile.map((m) => (
                    <option key={m.id} value={m.name}>
                      {m.name}
                    </option>
                  ))}
                </SelectMini>
                <p>mile radius</p>
              </Flex>
            </Column>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.acc}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>AUDIENCE</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Column>
              <label>Gender</label>
              <ButtonGroup
                style={{ marginTop: "8px" }}
                aria-label="outlined button group"
              >
                {genders.map((gender) => (
                  <Button
                    key={gender.id}
                    onClick={() => props.handleToggle(gender.name)}
                    className={
                      props.checked.indexOf(gender.name) === -1
                        ? null
                        : classes.btn
                    }
                  >
                    {gender.name}
                  </Button>
                ))}
              </ButtonGroup>
            </Column>
          </AccordionDetails>
          <AccordionDetails>
            <Column>
              <label>Age</label>
              <Flex>
                <MyInput
                  key="0"
                  onChange={(e) => props.setAge(e.target.value)}
                  type="number"
                  placeholder="35"
                  value={props.age}
                />
                <Line> - </Line>
                <MyInput
                  key="1"
                  onChange={(e) => props.setAge2(e.target.value)}
                  type="number"
                  placeholder="55"
                  value={props.age2}
                />
              </Flex>
            </Column>
          </AccordionDetails>
          <AccordionDetails>
            <Column>
              <label htmlFor="sort">Treatment</label>
              <Select onChange={(e) => props.handleToggle(e.target.value)}>
                <option>Select...</option>
                {treatment.map((t) => (
                  <option value={t.name} key={t.id}>
                    {t.name}
                  </option>
                ))}
              </Select>
            </Column>
          </AccordionDetails>
        </Accordion>
      </SidebarBlock>
    </>
  );
};

export default Sidebar;
