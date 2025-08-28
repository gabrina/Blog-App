import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../shared/Loader";
import { useQuery } from "@apollo/client/react";
import { GET_BLOG_BY_SLUG } from "../../GraphQL/Queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import sanitizeHTML from "sanitize-html";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_BLOG_BY_SLUG, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h3>Something went wrong.</h3>;
  const {
    post: { title, coverPhoto, author, content },
  } = data;
  // console.log(data);
  return (
    <Container maxWidth="lg">
      <Grid container>
        {/* top row:title and back */}
        <Grid
          item
          size={{ xs: 12 }}
          mt={9}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {title}
          </Typography>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </Grid>
        {/* cover coverPhoto */}
        <Grid size={{ xs: 12 }} mt={6}>
          <img
            src={coverPhoto.url}
            alt={slug}
            width="100%"
            style={{ borderRadius: "15px" }}
          />
        </Grid>
        {/* author */}
        <Grid size={{ xs: 12 }} mt={7} display="flex" alignItems="center">
          <Avatar
            src={author.avatar.url}
            sx={{ width: "80px", height: "80px", marginLeft: 2 }}
          />
          <div>
            <Typography component="p" variant="h5" fontWeight={700}>
              {author.name}
            </Typography>
            <Typography component="p" variant="h5" color="secondary">
              {author.field}
            </Typography>
          </div>
        </Grid>
        {/* content */}
        <Grid size={{ xs: 12 }} mt={5}>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(content.html) }}
          ></div>
        </Grid>
        {/* comment form */}
        <Grid size={{ xs: 12 }}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
