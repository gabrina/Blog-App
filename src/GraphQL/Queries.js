import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      title
      slug
      id
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_BY_SLUG = gql`
  query getAuthorBySlug($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      id
      posts {
        coverPhoto {
          url
        }
        id
        title
        slug
      }
    }
  }
`;

const GET_BLOG_BY_SLUG = gql`
  query getBlogsBySLug($slug: String!) {
    post(where: { slug: $slug }) {
      title
      content {
        html
      }
      coverPhoto {
        url
      }
      datePublished
      # comment {
      #   name
      #   email
      #   text
      # }
      author {
        name
        field
        avatar {
          url
        }
      }
    }
  }
`;

const GET_COMMENTS_BY_POST_SLUG = gql`
  query getCommentsByPostSlug($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      name
      email
      text
    }
  }
`;

export {
  GET_BLOGS_INFO,
  GET_AUTHORS_INFO,
  GET_AUTHOR_BY_SLUG,
  GET_BLOG_BY_SLUG,
  GET_COMMENTS_BY_POST_SLUG,
};
