import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header('Content-type'));
  console.log(c.req.query('param'));

  return c.text('Hello Hono!')
})

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My HTML Page</title>
<style>
/* Your CSS styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
}
.container {
    max-width: 600px;
    margin: 0 auto;
    margin: 250px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}
</style>
</head>
<body>
<div class="container">
    <h1>Hello from 100xdev student!</h1>
    <p>This is a sample landing page.</p>
    <h4>Kindly do a POST request with a JSON body to see more function in effect!</h4>
</div>
</body>
</html>
`;

app.get('/', (c) => {
  return c.html(html)
})

export default app;
