import { BlogsComponent } from '@/components/blogs'
import React from 'react'

 const AllBlogs = ({params}) => {

  const { slug } = params;

  return (
    <div>
      <BlogsComponent slug={slug} />
    </div>
  )
}

export default AllBlogs
