import { apiSlice } from "../api/apiSlice";

export const blogsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/api/blogs",
    }),
    getBlog: builder.query({
      query: (id) => `/api/blogs/${id}`,
    }),
    getCategory: builder.query({
      query: () => "/api/categories",
    }),
    getAuthor: builder.query({
      query: () => "/api/authors",
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetAuthorQuery,
  useGetCategoryQuery,
  useGetBlogQuery,
} = blogsApi;
