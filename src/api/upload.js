import { v2 as cloudinary } from 'cloudinary'
import { NextResponse } from 'next/server'
import { IncomingForm } from 'formidable'
import fs from 'fs'

export const config = {
  api: {
    bodyParser: false,
  },
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(req) {
  const form = new IncomingForm()

  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return reject(NextResponse.json({ error: 'Error parsing form' }, { status: 500 }))
      }

      const file = files.file[0]
      const upload = await cloudinary.uploader.upload(file.filepath)

      resolve(NextResponse.json({ url: upload.secure_url }, { status: 200 }))
    })
  })
}
