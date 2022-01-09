import styled from "styled-components";
import { makeStyles, Theme } from "@material-ui/core";

export const modalStyles = makeStyles((theme: Theme) => ({
  modalPlacement: {
    width: "100vw",
    height: "50vh",
    marginLeft: "25%",
    marginTop: "8%"
  },
  dialogPaper: {
    minHeight: "200px",
    maxHeight: "200px",
    borderRadius: "15px"
  },
  customWidth: {
    maxWidth: 719,
    backgroundColor: "white",
    fontSize: "11px",
    color: "lightgray",
    fontWeight: 500,
    boxShadow: "0px 2px 10px #00000027",
    padding: "8px 20px",
    textAlign: "center"
  },
  arrowStyles: {
    color: "white",
    boxShadow: "#00000027"
  }
}));

export const AddDogContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
`;

export const DogButton = styled.button`
  background-color: darkgrey;
  border-radius: 10px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: flex;
  font-size: 1em;
`;

export const DogListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  padding: 8px;
  border-color: darkgrey;
  border-style: solid;
  border-width: 1.5px;
  border-radius: 15px;
  background-color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
`;

export const ListContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 6px;
  margin: 8px;
`;

export const DogNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 4;
  margin: 8px;
  padding: 6px;
  border-color: darkgrey;
  border-radius: 15px;
  background-color: darkgrey;
  font-size: 1.25em;
`;
