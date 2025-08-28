import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { CREATE_COMMENT } from "../../GraphQL/Mutations";
import { useMutation } from "@apollo/client/react";
import { ToastContainer, toast } from "react-toastify";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [createComment, { data, loading, error }] = useMutation(CREATE_COMMENT);

  const sendHandler = () => {
    if (name && email && text) {
      createComment({ variables: { name, email, text, slug } });
    } else {
      toast.warn("تمام فیلدها رو پر کن", { position: "bottom-right" });
    }
  };

  if (data) {
    toast.success("کامنت ارسال شد و منتظر تأیید می باشد", {
      position: "bottom-right",
    });
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      {/* form title */}
      <Grid size={{ xs: 12 }} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          فرم ارسال کامنت
        </Typography>
      </Grid>

      {/* first input row  */}
      <Grid size={{ xs: 12 }} m={2}>
        <TextField
          //   id="outlined-basic"
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%", direction: "rtl" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      {/* second input row */}
      <Grid size={{ xs: 12 }} m={2}>
        <TextField
          //   id="outlined-basic"
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      {/* third input row */}
      <Grid size={{ xs: 12 }} m={2}>
        <TextField
          //   id="outlined-basic"
          label="متن کامنت"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      {/* button */}
      <Grid size={{ xs: 12 }} m={2}>
        {/* <Button variant="contained" onClick={sendHandler}>
          {loading ? "در حال ارسال..." : "ارسال"}
        </Button> */}

        {loading ? (
          <Button variant="contained" disabled>
            در حال ارسال...
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            ارسال
          </Button>
        )}
        <ToastContainer />
      </Grid>
    </Grid>
  );
}

export default CommentForm;
