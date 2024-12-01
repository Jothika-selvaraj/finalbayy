import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import PropTypes from 'prop-types'

const BlogTableItem = ({ authorImg, title, author, date, deleteBlog, mongoId }) => {
    const BlogDate = new Date(date);
    return (
        <tr className='bg-white border-b'>
            <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <Image 
                    width={40} 
                    height={40} 
                    src={authorImg || assets.profile_icon} 
                    alt={author ? `${author}'s profile picture` : 'Default profile icon'}  
                />
                <p>{author || "No author"}</p>
            </th>
            <td className='px-6 py-4'>
                {title || "no title"}
            </td>
            <td className='px-6 py-4'>
                {BlogDate.toDateString()}
            </td>
            <td className='px-6 py-4'>
                <button 
                    onClick={() => deleteBlog(mongoId)} 
                    className='cursor-pointer'
                    aria-label="Delete blog"
                >
                    x
                </button>
            </td>
        </tr>
    );
}

BlogTableItem.propTypes = {
    authorImg: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string.isRequired,
    deleteBlog: PropTypes.func.isRequired,
    mongoId: PropTypes.string.isRequired
}

export default BlogTableItem
