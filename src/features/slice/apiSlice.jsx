import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice=createApi({
reducerPath: "api",
baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com/"}),
endpoints:(builder)=>({
    getPosts: builder.query({
        query: ()=> "products",
    }),
    getPostById: builder.query({
        query: (id)=> `products/${id}`,
    }),
    getCategoryList: builder.query({
        query: ()=> "products/category-list",
    }),
    getPostsByCategory: builder.query({
        query: (category)=> `products/category/${category}`,
    })
})

})

export const {useGetPostsQuery, useGetPostByIdQuery, useGetCategoryListQuery, useGetPostsByCategoryQuery }=apiSlice;