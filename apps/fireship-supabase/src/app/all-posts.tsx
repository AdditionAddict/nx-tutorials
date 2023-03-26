import { useParams } from "react-router-dom"

export default function AllPosts() {
  const {pageNumber} = useParams()
  return (
    <h2 className="
      text-gray-300
    ">All Posts; page: {pageNumber}</h2>
  )
}