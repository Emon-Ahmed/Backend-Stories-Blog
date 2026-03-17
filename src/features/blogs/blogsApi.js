import { apiSlice } from "../api/apiSlice";

export const blogsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/api/blogs",
    }),
    getBlog: builder.query({
      query: (id) => `/api/blogs/${id}`,
    }),
    getCategories: builder.query({
      query: () => "/api/categories",
    }),
    getCategory: builder.query({
      query: (id) => `/api/categories/${id}`,
    }),
    getAuthors: builder.query({
      query: () => "/api/authors",
    }),
    getAuthor: builder.query({
      query: (id) => `/api/authors/${id}`,
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetAuthorsQuery,
  useGetAuthorQuery,
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useGetBlogQuery,
} = blogsApi;
