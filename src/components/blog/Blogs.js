import React from "react";
import { GET_BLOGS_INFO } from "../../GraphQL/Queries";
import { useQuery } from "@apollo/client/react";
import { Grid } from "@mui/material";
import CardEL from "../../shared/CardEL";

function Blogs() {
  const { data, loading, error } = useQuery(GET_BLOGS_INFO);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <div>
      <Grid container spacing={2}>
        {data.posts.map((post) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
            <CardEL {...post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Blogs;
