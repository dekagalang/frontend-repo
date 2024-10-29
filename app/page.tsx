// "use client";
// import React, { useState } from "react";
// import { Button, TextField, Typography, Container } from "@mui/material";

// const Home: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Login
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Name"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <Button variant="contained" color="primary" type="submit">
//           Submit
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default Home;

import Counter from "../components/Counter";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Next.js with Redux!</h1>
      <Counter />
    </div>
  );
};

export default Home;
