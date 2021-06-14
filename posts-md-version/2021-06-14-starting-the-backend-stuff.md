# Starting the backend stuff

Hello everybody! I shall update you with the progress of the blog project that I'm making.

For the frontend, I have very small progress. I was able to create the pages that I need for the public to access (/, /posts, /posts/{id})

For the backend, I used MongoDB Atlas as my database, and I setup a simple CRUD for me to use. I might make a few modifications with this, and I'll decide on this once I'm at the deployment stage.

Where I got stuck and wasted a lot of time is connecting the frontend and backend. I had a hard time. I was used to React where we just use ```fetch```. In Angular, there is a module for it which is Angular Http client. It took time. A lot of going back and forth between files, but in the end, I was able to set it up thanks to the docs and some tutorials online.

## Frontend
- [x] Setup Angular, Angular Router (for pages), ~Angular Forms (for the admin),~ and Angular Http client (for fetching from backend)
- [x] Setup Angular Material and use a **default** theme
- [x] Create public pages (/, /posts, /posts/{id}). These will have the same layout as this page
- [ ] ~Use a dummy API to test the frontend side~
- [ ] **NEW** Fetch data from API and display the initial pages
- [ ] Create admin pages (/admin, /admin/posts/, /admin/posts/{id}). Roughly the same layout with this one but with forms (not yet installed)
- [ ] Connect admin pages with backend (dependent on my progress on the backend)
- [ ] Create login screen for admin (dependent on my progress on the backend)

## Backend
- [x] Setup schema for posts
- [x] Setup CRUD for posts
- [ ] Setup schema for users
- [ ] Setup CRUD for users