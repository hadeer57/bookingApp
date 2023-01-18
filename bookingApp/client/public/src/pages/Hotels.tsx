import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Hotels() {
    const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://th.bing.com/th/id/OIP.SM5OtEWM09jdpfleHrXTBAHaFj?w=261&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://th.bing.com/th/id/OIP.nnhP_fjGIUkpIqFD3WFJUQHaE8?pid=ImgDet&rs=1",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://th.bing.com/th/id/R.a6af2c5dadd10ef7fd0787eeac3e94c2?rik=VlECFTA7jnh%2bIQ&riu=http%3a%2f%2fjeffontheroad.com%2fwp-content%2fuploads%2f2016%2f06%2fdezjeff-amsterdam-hotel-w-rooftop-3.jpg&ehk=M8kGnZkGJr5Gk4gd64FD8G4TIsHM7qpkfAqa4JrqmOs%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://th.bing.com/th/id/R.f36904bd74c96d09910cc8d44177274b?rik=mRhVgt1t1o4Agg&riu=http%3a%2f%2fwww.groomedandglossy.com%2fwp-content%2fuploads%2f2019%2f03%2fcr993-177-1.jpg&ehk=lm7dw2Rr19mrGOH4sb9RZ3ZoEbGVlHnkVB%2bJuqxADpo%3d&risl=&pid=ImgRaw&r=0",
    },
  ];
  const getText = (html:any) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="blogimg">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;


