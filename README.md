# Customisable birthday site
1. `npm install && npm run dev`
2. Edit `lib/config.ts`: name, birthday date/time, date of birth (age), captions, message, song.
3. Add images: `public/photos/1.jpg…`, `public/scrapbook/1.jpg…`, music `public/music/song.mp3`.
   Missing images show a placeholder. Add/remove entries in config to change the count.
4. The curtain countdown shows until `birthday`; "PREVIEW" skips it.

## Hosting with shared photos/song (Vercel Blob)
1. Push to GitHub, import in Vercel.
2. Vercel project > Storage > Create > Blob > connect to the project.
3. Settings > Environment Variables: add ADMIN_PASSWORD (your own secret). Redeploy.
4. Open the live site, tap the faint lock (top-left), enter the password. Upload buttons appear for you only.
