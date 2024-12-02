import React from 'react'
import PropTypes from 'prop-types'

const SubsTableItem = ({ email, mongoId, deleteEmail, date }) => {
    
    const emailDate = new Date(date);

  return (
    <tr className='bg-white border-b text-left'>
      <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
        {email || "No Email"}
      </th>
      <td className='px-6 py-4'>{emailDate.toDateString()}</td>
      <td className='px-6 py-4'>
        <button onClick={() => deleteEmail(mongoId)} className="cursor-pointer">x</button>
      </td>
    </tr>
  )
}

SubsTableItem.propTypes = {
    email: PropTypes.string,
    mongoId: PropTypes.string.isRequired,
    deleteEmail: PropTypes.func.isRequired,
    date: PropTypes.string.isRequired
}

export default SubsTableItem
