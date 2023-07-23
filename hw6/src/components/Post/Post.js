import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsService} from "../../services";
import PostDetail from "./PostDetail/PostDetail";

const Post = () => {
    const [post, setPost] = useState(null);
    const {postId} = useParams();

    useEffect(()=>{
        postsService.getById(postId).then(({data})=>setPost(data))
    }, [postId])

    return (
        <div>
            {post&&<PostDetail post={post}/>}
        </div>
    );
};

export default Post;