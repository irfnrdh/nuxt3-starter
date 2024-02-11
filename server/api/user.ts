export default defineEventHandler(async (event) => {

  const data = await $fetch('/api/users')
  return data
    
  });


// import { UserModel as User } from "../models/User.model";

// export default defineEventHandler(async (event) => 
//   switch (event.reqmethod) {
//  case 'GET': {
      
//     }
//     case 'POST': {
//       const body = await getBody(event);
//       const { name, email } = body;
//       const user = await User.create({ name, email });
//       return { statusCode: 201, body: user };
//     }
//     case 'PUT': {
//       const query = getQuery(event);
//       const id = query.id;
//       const body = await getBody(event);
//       const { name, email } = body;
//       const user = await User.findByPk(id);
//       if (user) {
//         user.name = name;
//         user.email = email;
//         await user.save();
//         return { statusCode: 200, body: user };
//       } else {
//         return { statusCode: 404, body: { message: 'User not found' } };
//       }
//     }
//     case 'DELETE': {
//       const query = getQuery(event);
//       const id = query.id;
//       const user = await User.findByPk(id);
//       if (user) {
//         await user.destroy();
//         return { statusCode: 204 };
//       } else {
//         return { statusCode: 404, body: { message: 'User not found' } };
//       }
//     }
//     default: {
//       return { statusCode: 405, body: { message: 'Method not allowed' } };
//     }
//   }
// });