import React, { useState, useEffect } from 'react';
import axios from 'axios';
const From = () => {
                const [fn, un] = useState({
                  name:   "",
                  phone:  "",
                  email:  "",
                  msg:    "",
                });
                const [sf, su] = useState("");
                  useEffect(() => {
                    if (fn.name === "" && fn.phone === "" && fn.email === "" && fn.msg === "") {
                      console.log('');
                    }
                    else {
                      const val = JSON.stringify(fn);
                        axios.post("http://localhost/ajax/load/api.php",val)
                          .then(function (response)
                            {
                            console.log(response.data.msg);
                           })
                          .catch(function (err) {
                            console.log(err);
                          });
                      }},[fn])
                  
                     const input = (e) => {
                       const { name, value } = e.target;
                       un((prev) => {
                         return {
                           ...prev,
                           [name]: value,
                          };
                       });
                      };
                       const btn = (e) => { 
                         e.preventDefault();
                         alert(`
                         Your Name:${fn.name}
                         Your Phone:${fn.phone}
                         Your Email:${fn.email}
                         Your Message:${fn.msg}
                         `)
                         su("Inserted");
                            };
                     return (
                       <>
                         <div className="col-md-6 col-12 my-4 mx-auto">
                           <form className="form-responsive">
                             <div className="form-group mt-3">
                               <label
                                 className="mb-1"
                                  htmlFor="exampleInputName1"
                               >
                                 Name
                               </label>
                               <input
                                 name="name"
                                 onChange={input}
                                 type="text"
                                 className="form-control"
                                 id="exampleInputPhone1"
                                 aria-describedby="emailHelp"
                               />
                             </div>
                             <div className="form-group mt-3">
                               <label
                                 className="mb-1"
                                 htmlFor="exampleInputPassword1"
                               >
                                 Phone
                               </label>
                               <input
                                 name="phone"
                                 onChange={input}
                                 type="phone"
                                 className="form-control"
                                 id="exampleInputPassword1"
                                 autoComplete="true"
                               />
                             </div>
                             <div className="form-group mt-3">
                               <label
                                 className="mb-1"
                                 htmlFor="exampleInputEmail1"
                               >
                                 Email address
                               </label>
                               <input
                                 name="email"
                                 onChange={input}
                                 type="email"
                                 className="form-control"
                                 id="exampleInputMessage1"
                                 aria-describedby="emailHelp"
                               />
                               <small
                                 id="emailHelp"
                                 className="form-text text-muted"
                               >
                                 We'll never share your email with anyone else.
                               </small>
                             </div>
                             <div className="form-group mt-3">
                               <label
                                 className="mb-1"
                                 htmlFor="exampleInputEmail1"
                               >
                                 Message
                               </label>
                               <textarea
                                 name="msg"
                                 onChange={input}
                                 className="form-control"
                                 id="exampleFormControlTextarea1"
                                 rows="3"
                               ></textarea>
                             </div>
                             <button
                               type="submit"
                               className="btn mt-3"
                               onClick={btn}
                             >
                               Submit
                             </button>
                           </form>
                           <h4 className="text-success text-capitalize text-center">{sf}</h4>
                         </div>
                       </>
                     );
                   }
export default From;