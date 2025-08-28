import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Link
            to="/"
            style={{ width: "100%", textDecoration: "none", color: "inherit" }}
          >
            <Typography flex="1" component="h1" variant="h5" fontWeight="bold">
              وبلاگ من
            </Typography>
          </Link>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
