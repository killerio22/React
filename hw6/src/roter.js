import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";
import TodosPage from "./pages/TodosPage/TodosPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import PostPage from "./pages/PostPage/PostPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const router= createBrowserRouter([
    {path:'',
     element:<MainLayout/>,
     children:[
         {
             index:true,
             element:<Navigate to={'todos'}/>
         },
         {
             path:'todos',
             element:<TodosPage/>
         },
         {
             path:'albums',
             element:<AlbumsPage/>
         },
         {
             path:'comments',
             element:<CommentsPage/>,
             children:[
                 {
                     path:'posts/:postId',
                     element:<PostPage/>
                 }
             ]
         }
     ]
    },
    {
        path:'*',
        element:<NotFoundPage/>
    }
])

export {router}