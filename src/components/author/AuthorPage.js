import { useParams } from "react-router-dom";
import { GET_AUTHOR_BY_SLUG } from "../../GraphQL/Queries";
import { useQuery } from "@apollo/client/react";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import sanitizeHTML from "sanitize-html";
import CardEL from "../../shared/CardEL";

function AuthorPage() {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(GET_AUTHOR_BY_SLUG, {
    variables: { slug },
  });
  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Something went wrong.</h3>;
  console.log(data);

  const {
    author: { name, avatar, field, description, posts },
  } = data;
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          size={{ xs: 12 }}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {/* <Avatar src={data.authors[0].avatar.url} /> */}
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight="700" mt={4}>
            {name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {field}
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12 }} mt={5}>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(description.html) }}
          ></div>
        </Grid>
        <Grid item size={{ xs: 12 }} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {posts.map((post) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
                <CardEL
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
