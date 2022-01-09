import { useState } from "react";
import { Dialog, DialogContent, TextField } from "@material-ui/core";
import { modalStyles, AddDogContainer, DogButton } from "./AddDogStyles";
import { useFormik } from "formik";

interface AddDogFieldProps {
  onCreateDog: (name: string) => Promise<void>;
  handleClickOpen: () => any;
  handleClose: () => any;
}

interface DogFormValues {
  dogName: string;
}

export const AddDogField = (props: AddDogFieldProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      dogName: ""
    },
    onSubmit: async (
      values: DogFormValues,
      { resetForm }: { resetForm: () => void }
    ) => {
      if (values.dogName.length > 0) {
        await props.onCreateDog(values.dogName);
        resetForm();
      }
    }
  });

  function handleClickOpen() {
    setModalOpen(true);
  }

  const handleClose = () => {
    setModalOpen(false);
  };

  const classes = modalStyles();

  return (
    <AddDogContainer>
      <DogButton onClick={handleClickOpen}>Add dog</DogButton>
      <Dialog
        open={modalOpen}
        onClose={handleClose}
        classes={{
          container: classes.modalPlacement,
          paper: classes.dialogPaper
        }}
        fullWidth={true}
        maxWidth={"xs"}
      >
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="dogName"
              name="dogName"
              type="dogName"
              variant="standard"
              placeholder="Dog's name"
              fullWidth
              style={{ fontSize: "14px" }}
              value={formik.values.dogName}
              onChange={formik.handleChange}
              error={formik.touched.dogName && Boolean(formik.errors.dogName)}
              helperText={formik.touched.dogName && formik.errors.dogName}
            />
            <DogButton type="submit" style={{ margin: "10px 0px" }}>
              Submit
            </DogButton>
          </form>
          <DogButton onClick={() => handleClose()}>Close</DogButton>
        </DialogContent>
      </Dialog>
    </AddDogContainer>
  );
};
