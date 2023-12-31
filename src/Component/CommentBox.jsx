import React from "react";


function CommentBox(props){
    return(
        <>

      
        <div className="mt-2">
        <div className="comment_icon">
            <i className={props.className}></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <i className={props.className1}></i>
            </div>
        <div className="Comment_box">
        <svg  viewBox="0 -960 960 960" fill="var(--websiteColor)" width="50"><path d="M248.462-277.807q54.808-36.346 111.154-53.462Q415.962-348.384 480-348.384q64.038 0 120.384 17.115 56.346 17.116 111.346 53.462 38.424-42.115 57.328-93.52 18.904-51.405 18.904-108.746 0-128.294-89.865-218.091-89.864-89.798-218.327-89.798-128.462 0-218.097 89.798-89.635 89.797-89.635 218.091 0 57.341 18.904 108.746 18.904 51.405 57.52 93.52Zm231.649-141.809q-55.265 0-93.88-38.505-38.615-38.504-38.615-93.768 0-55.265 38.505-93.88 38.504-38.615 93.768-38.615 55.265 0 93.88 38.505 38.615 38.504 38.615 93.768 0 55.265-38.505 93.88-38.504 38.615-93.768 38.615Zm.165 295.538q-73.528 0-138.514-27.725-64.985-27.724-113.623-76.461-48.638-48.737-76.349-113.609-27.712-64.872-27.712-138.585 0-73.987 27.725-138.376 27.724-64.389 76.461-113.027 48.737-48.638 113.609-76.349 64.872-27.712 138.585-27.712 73.987 0 138.376 27.725 64.389 27.724 113.027 76.461 48.638 48.737 76.349 113.279 27.712 64.542 27.712 138.181 0 73.528-27.725 138.514-27.724 64.985-76.461 113.623-48.737 48.638-113.279 76.349-64.542 27.712-138.181 27.712Z"/></svg> <spam className="comment_name">{props.name}</spam><small className="comment_user">{props.username}</small>
            <p>{props.comment}</p>
        </div>

      
        
        </div>
        </>
    )
}

export default CommentBox;