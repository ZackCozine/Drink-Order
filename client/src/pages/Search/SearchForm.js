import React from "react";
import "./SearchForm.css";
import {Input, Row} from 'react-materialize';

// Form for keyword input used in google books search
const SearchForm = props => (
//   <form align="center">
//     <div className="form-group container">
//       <div className="row">
//         <div className="col-md-9">
//           <input
//             onChange={props.handleInputChange}
//             value={props.search}
//             name="search"
//             type="text"
//             className="form-control"
//             placeholder="Search for a Book"
//             id="search"
//           />
//         </div>
//         <div className="col-md-3">
//           <button
//             onClick={props.handleFormSubmit}
//             className="search-button"
//           >
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   </form>
// );
<div class="container">
<Row>
    <Input s={12} label="First Name" />
    <Input s={12} label="Last Name" />
    <Input s={12} label="username" />
    <Input type="password" label="password" s={12} />
    <Input type="email" label="Email" s={12} />
</Row>
</div>
);

export default SearchForm;
