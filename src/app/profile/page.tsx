import React from 'react'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#e7a1a2] p-4 flex items-center justify-center font-mono">
      <div className="w-full max-w-md bg-[#ff6b6b] rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 uppercase tracking-wider">Profile</h1>
        
        <div className="flex">
          <div className="flex-grow space-y-4">
            <div>
              <label htmlFor="address" className="block text-sm font-bold mb-1 uppercase tracking-wider">Address</label>
              <input
                type="text"
                id="address"
                className="w-full px-3 py-2 border-2 border-black bg-white"
              />
            </div>
            
            <div>
              <label htmlFor="knife-equip" className="block text-sm font-bold mb-1 uppercase tracking-wider">Knife Equip</label>
              <div className="flex mb-2 space-x-1">
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`w-3 h-3 rounded-full ${level <= 3 ? 'bg-green-500' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
              <input
                type="text"
                id="knife-equip"
                className="w-full px-3 py-2 border-2 border-black bg-white"
              />
            </div>
            
            <div>
              <label htmlFor="nickname" className="block text-sm font-bold mb-1 uppercase tracking-wider">Nickname</label>
              <input
                type="text"
                id="nickname"
                className="w-full px-3 py-2 border-2 border-black bg-white"
              />
            </div>
            
            <div>
              <label htmlFor="bio" className="block text-sm font-bold mb-1 uppercase tracking-wider">Bio (Optional)</label>
              <textarea
                id="bio"
                className="w-full px-3 py-2 border-2 border-black bg-gray-100 h-24 resize-none"
              ></textarea>
            </div>
          </div>
          
          <div className="ml-4 flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl">🌟</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-4 mt-6">
          <button className="flex-1 bg-pink-300 hover:bg-pink-400 text-black py-2 px-4 border-2 border-black uppercase font-bold">
            Cancel
          </button>
          <button className="flex-1 bg-[#b08968] hover:bg-[#9a775c] text-black py-2 px-4 border-2 border-black uppercase font-bold">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

