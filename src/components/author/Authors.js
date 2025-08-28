import { Avatar, Divider, Typography } from "@mui/material";
import { useQuery } from "@apollo/client/react";
import { Grid } from "@mui/material";
import { GET_AUTHORS_INFO } from "../../GraphQL/Queries";
import { Link } from "react-router-dom";
import React from "react";
import Loader from "../../shared/Loader";


function Authors() {
  const { data, loading, error } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <Loader />
  if (error) return <p>Something went wrong</p>;
  const { authors } = data;
  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item size={{ xs: 12 }} padding={2}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography component="p" variant="p" color="secondary">
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid item size={{ xs: 12 }}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
