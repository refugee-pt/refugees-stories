I Built this Backend from scratch as part of a team of 3 developers who the other 2 did the frontend of the project.  I built the database made all the endpoints for the frontend to call.  I made the Authentication from scratch.  


Refugee-Stories backend database has two tables.  The username Table has a Username column and a Password column.  The story table has a Name, Age, Location, Approved, and image column.  

  To register a new user you would use server.post("/api/register").  The function is called register and its in the routes.js

  To login you would use server.post("/api/login").  You would need to use the username and password that you used when you registered.  The function is called Login and its in the routes.js

  To post a story you would use server.post("/api/story")  the function is called postStory and its in the routes.js.  You would not need to be logged in to post a story.

  To get the pending stories you would use server.get("/api/story"); The function is called getStories. You have to be logged in as an admin to see stories that need to be approved.

  To approve the pending stories you would use server.put("/api/approve/:id") The function is called approveStories and its in the routes.js. You have to be logged in as an admin to approve a story.

  To delete a pending story you would use server.delete("/api/story/:id") The function is called deleteStory and its in the routes.js. You have to be logged in as an admin to delete a pending story. 

  To see all published stories you would use server.get("/api/stories")  The function is called publishedStories and its in the routes.js.  You do not need to be logged in. 


