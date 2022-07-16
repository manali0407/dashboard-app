// import ReactExport from "react-export-excel";

// const ExcelFile = ReactExport.ExcelFile;
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// const ExcelColumn = ReactExport.ExcelSheet.ExcelColumn;

// const data = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: "Krystal", age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// const ExportToExcel = () => {
//   const filterColumns = () => {
//     // Get column names

//     const columns = Object.keys(data[0]);
//     console.log(columns);
//     // Remove by key (firstname)
//     const filterColsByKey = columns.filter((c) => c !== "firstname");

//     // OR use the below line instead of the above if you want to filter by index
//     // columns.shift()

//     return filterColsByKey; // OR return columns
//   };

//   const camelCase = (str) => {
//     return str.substring(0, 1).toUpperCase() + str.substring(1);
//   };

//   return (
//     <div>
//       {/* <ExcelFile filename="UesrInfo">
//         <ExcelSheet data={data} name="uesrs">
//         </ExcelSheet>
//       </ExcelFile> */}
//       {/* <ExcelFile element={<button>Download Data With Styles</button>}>
//         <ExcelSheet data={data} name="Sheet1">
//           {/* <ExcelColumn label="Id" value="id" />
//           <ExcelColumn label="FirstName" value="firstName" />
//           <ExcelColumn label="LastName" value="lastName" />
//           <ExcelColumn label="age" value="age" /> */}
//       {/* </ExcelSheet>
//       </ExcelFile>  */}

//       <table>
//         <thead>
//           <tr>
//             <th>Firstname</th>
//             <th>Lastname</th>
//             <th>Age</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => {
//             return (
//               <tr>
//                 <td>{item.id}</td>
//                 <td>{item.firstName}</td>
//                 <td>{item.lastName}</td>
//                 <td>{item.age}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ExportToExcel;
