import Image from 'next/image'
import HomePage from "./home";

let postData = [
  
  {
    _id: "1",
    title: "post man",
    slug: "9",
    mainImage: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    author: { name:"Joel", image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" },
    categories:["Hope","health"],
  },
  {
    _id: "2",
    title: "insomia",
    slug: "9",
    mainImage: "https://images.unsplash.com/photo-1593234270323-0414ec1574e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    author: { name:"James", image: "https://images.unsplash.com/photo-1593234270323-0414ec1574e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" },
    categories:["LOVE"],
  },
  {
    _id: "3",
    title: "insomia",
    slug: "9",
    mainImage: "https://images.unsplash.com/photo-1593234270323-0414ec1574e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    author: { name:"James", image: "https://images.unsplash.com/photo-1593234270323-0414ec1574e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" },
    categories:["LOVE"],
  },
  {
    _id: "4",
    title: "insomia",
    slug: "9",
    mainImage: "https://images.unsplash.com/photo-1593234270323-0414ec1574e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    author: { name:"James", image: "https://images.unsplash.com/photo-1593234270323-0414ec1574e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" },
    categories:["LOVE"],
  },
  {
    _id: "5",
    title: "insomia",
    slug: "9",
    mainImage: "https://images.unsplash.com/photo-1593234270323-0414ec1574e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    author: { name:"James", image: "https://images.unsplash.com/photo-1593234270323-0414ec1574e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" },
    categories:["LOVE"],
  },
  {
    _id: "6",
    title: "insomia",
    slug: "9",
    mainImage: "https://images.unsplash.com/photo-1593234270323-0414ec1574e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    author: { name:"James", image: "https://images.unsplash.com/photo-1593234270323-0414ec1574e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" },
    categories:["LOVE"],
  }
]

export default  async function Home() {
  const posts =  postData;
  return <HomePage posts={posts} />;

}

