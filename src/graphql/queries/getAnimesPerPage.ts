import { gql } from "@apollo/client";

export const getAnimesPerPageQuery = gql`
  query getAnimesPerPage($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
      }
      media {
        coverImage {
          medium
        }
        title {
          english
          native
        }
      }
    }
  }
`;