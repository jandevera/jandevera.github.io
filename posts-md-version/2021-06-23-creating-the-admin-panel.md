# Creating the admin panel

Hello everybody! Apologies for the late post. I was finishing my goal for the weekend which is to create an admin panel and have a UI for the user to update the post. I actually had a really hard with Angular forms, but once I created the "new post" part, it was smooth from there.

Last weekend, I only had a READ part so that the public pages can fetch the posts. This weekend, I created the other parts (CREATE, UPDATE, and DELETE), and I was able to create a form for each method. DELETE was super easy to implement. The CREATE part was hard because of the form. Once CREATE was complete, UPDATE was easy. It's just a combination of READ and CREATE, and it sounds easy because I got through the hard part.

Next weekend, my goal will be to create a schema and CRUD for users, and then squeeze in reading the route guard guide. 

Well, back to work. See you next week!

## Frontend
- [x] Setup Angular, Angular Router (for pages), ~Angular Forms (for the admin),~ and Angular Http client (for fetching from backend)
- [x] Setup Angular Material and use a **default** theme
- [x] Create public pages (/, /posts, /posts/{id}). These will have the same layout as this page
- [x] Fetch data from API and display the initial pages
- [x] Create admin pages (/admin, /admin/posts/, /admin/posts/{id}). Roughly the same layout with this one but with forms (installed)
- [x] Connect admin pages with backend (**Complete with CRUD functions**)
- [ ] **NEW** Create route guard for admin panel
- [ ] Create login screen for admin (dependent on my progress on the backend)

## Backend
- [x] Setup schema for posts
- [x] Setup CRUD for posts
- [ ] Setup schema for users
- [ ] Setup CRUD for users