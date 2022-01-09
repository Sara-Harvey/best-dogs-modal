import { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { AddDogField } from "./AddDogField";
import { DogListContainer, ListContainer } from "./AddDogStyles";

interface Dog {
  id: number;
  name: string;
}

export const DogList = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [selectedDog] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const onSelectDog = (event: any) => {
    const selectedDogName = event.target.value;
    document.getElementById("showName").innerHTML = selectedDogName;
  };

  const onCreateDog = async (name: string) => {
    const newDog: Dog = { name };
    const newDogList = [...dogs, newDog];
    setDogs(newDogList);
  };

  return (
    <div>
      <DogListContainer>
        <ListContainer>
          <Select value={selectedDog} onChange={onSelectDog}>
            {dogs.map((dog: Dog) => (
              <MenuItem value={dog.name}>{dog.name}</MenuItem>
            ))}
          </Select>
        </ListContainer>
        <AddDogField
          onCreateDog={onCreateDog}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
      </DogListContainer>
    </div>
  );
};
