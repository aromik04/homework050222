"use strict";

const URL = "https://web-app-papatomatoe.herokuapp.com";

const postList = document.querySelector(".posts__list");
const postTitleValue = document.querySelector(".value");
const btn = document.querySelector(".posts__button");
const btn2 = document.querySelector("add-post__button")
const addPostTitle
const p = document.querySelector(".posts__loader")

const getPostMarkup = (post) => {
    const postItem = document.createElement("li");
    const postTitle = document.createElement("h3");
    const postContent = document.createElement("p");
    const postDate = document.createElement("time");

    postTitle.innerText = post.title;
    postContent.innerText = post.content;
    postDate.innerText = post.createDate;
    postDate.setAttribute("datetime", post.createDate);
    
    postItem.classList.add("posts__item");
    postTitle.classList.add("posts__title");
    postContent.classList.add("posts__content");
    postDate.classList.add("posts__date");

    postItem.append(postTitle);
    postItem.append(postContent);
    postItem.append(postDate);

    return postItem;
};

const fragment = new DocumentFragment();

const getPosts = () => {
    p.classList.add("visually-hidden")
    fetch(`${URL}/posts`)
        .then((response) => {
            return response.json();
        })
        .then((posts) => {
            posts.forEach((post) => {
                const postElement = getPostMarkup(post);
                fragment.append(postElement);
            });

            postTitleValue.innerText = posts.length;
            postList.append(fragment);
        })
        .catch((error) => console.error(error));
};



btn.addEventListener("click", getPosts);
