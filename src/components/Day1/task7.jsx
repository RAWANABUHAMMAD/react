import React from 'react'

export default function task7() {
  const isLoggedIn = true;
  return (
    <div>
{isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>please register</h1>
      )}
    </div>
  
  )
}
