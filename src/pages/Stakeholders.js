import React from 'react'

const Stakeholders = ()=> {
  return (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
<div className="mt-20 mx-4">
          <div className="w-full overflow-hidden rounded-lg shadow-xs">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">wallet Address</th>
                    <th className="px-4 py-3">Position</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                  <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                       
                        <div>
                          <p className="font-semibold">Hans Burger</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">5376379270201691831981818</td>
                    <td className="px-4 py-3 text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-slate-700   dark:text-green-100"> Teacher </span>
                    </td>
                                       </tr>
                  
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
        </div>
      )
}


export default Stakeholders