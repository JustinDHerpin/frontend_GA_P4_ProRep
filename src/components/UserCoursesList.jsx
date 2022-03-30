// import React from "react";
// import { useState, useEffect } from "react";
// // import { FaSignInAlt } from "react-icons/fa";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";
// import { getUserCourses } from "../features/courses/coursesSlice";
// // import coursesService from "../features/courses/coursesService";

// function UserCoursesList() {
//   // const navigate = useNavigate();
//   const dispatch = useDispatch();
//   // const [courses, setCourses] = useState([]);

//   const { user } = useSelector((state) => state.auth);

//   const { userCourses, getAllCourses, isError, isSuccess, message } =
//     useSelector((state) => state.courses);
//   // const token = user.token;
//   useEffect(() => {
//     dispatch(getUserCourses());
//     console.log(userCourses);
//   }, [dispatch]);

//   return (
//     <div>
//       <h2>CoursesList</h2>

//       {userCourses[0]?.map((course) => {
//         return <h3>{course.name}</h3>;
//       })}
//     </div>
//   );
// }

// export default UserCoursesList;
