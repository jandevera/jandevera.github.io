# Starting to be MEAN

As I mentioned in my last post, I'm gonna start a project with Angular, and I will document my progress here. So a little overview with the project I'm making.

I want to recreate this blog site with a few improvements:
1. Use Angular Material for less work in terms of design
2. Create an admin panel so that I can post without making more commits
3. Deploy in a new server that supports backend development

Yes, using Firebase should have been easier, but I got too overwhelmed with Angular that if I push myself to learn both at the same time, I might not finish it. So, small steps. Since I am familiar with JS backend stuff (NodeJS, ExpressJS, and MongoDB), I think I can finish this project if I take this path. Maybe if I'm confident enough to create multiple MEAN projects, I might learn Firebase. I can't promise to do that this year or the next. I have too many projects lined up after the blog.

So, a little bit of breakdown on how to do this:
## Frontend
- [x] Setup Angular, Angular Router (for pages), Angular Forms (for the admin), and Angular Http client (for fetching from backend)
- [ ] Setup Angular Material and use a theme
- [ ] Create public pages (/, /posts, /posts/{id}). These will have the same layout as this page
- [ ] Use a dummy API to test the frontend side
- [ ] Create admin pages (/admin, /admin/posts/, /admin/posts/{id}). Roughly the same layout with this one
- [ ] Connect admin pages with backend (dependent on my progress on the backend)
- [ ] Create login screen for admin (dependent on my progress on the backend)

## Backend
- [ ] Setup schema for posts
- [ ] Setup CRUD for posts
- [ ] Setup schema for users
- [ ] Setup CRUD for users

Just in case you're wondering why some tasks are accomplished, I started this project last Thursday while planning for this project. The tasks written down today might be different in the next few posts, so I might mention it in the future and explain what changed and why it changed. That's all for this post and see you next week!