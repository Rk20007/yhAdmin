'use client'

import { useState } from 'react'

export default function ImageUploader() {
  const [imageUrl, setImageUrl] = useState(null)

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('file', file)

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })

    const data = await res.json()
    setImageUrl(data.url)
  }

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {imageUrl && (
        <div>
          <p>✅ Uploaded Image:</p>
          <a href={imageUrl} target="_blank" rel="noreferrer">{imageUrl}</a>
          <img src={imageUrl} alt="Uploaded" width={200} className="mt-2 rounded" />
        </div>
      )}
    </div>
  )
}
