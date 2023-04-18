import React, { useState } from 'react';
import md5 from 'crypto-js/md5';
import { useStateContext } from '../../context/ContextProvider';

const CommentSection = () => {
  const { currentColor } = useStateContext();
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [storeData, setStoreData ] = useState(false);

  // const handleSubmit = (e, parentCommentId) => {
  //   e.preventDefault();
  //   const newComment = { name, email, comment, parentCommentId };
  //   setComments([...comments, newComment]);
  //   setName('');
  //   setEmail('');
  //   setComment('');
  // };

  // const renderComment = (comment) => {
  //   const childComments = comments.filter(
  //     (c) => c.parentCommentId === comment.id
  //   );

  return (
    // <div key={comment.id} className="mb-4">
    //   <div className="flex items-center mb-2">
    //     <div className="flex-shrink-0">
    //       <img
    //         src={`https://www.gravatar.com/avatar/${md5(
    //           comment.email.trim().toLowerCase()
    //         )}?s=60&d=mp`}
    //         alt="Gravatar"
    //         className="rounded-full w-10 h-10"
    //       />
    //     </div>
    //     <div className="ml-3">
    //       <div className="font-medium">{comment.name}</div>
    //       <div className="text-gray-600 text-sm">{comment.date}</div>
    //     </div>
    //   </div>
    //   <div className="text-gray-800">{comment.comment}</div>
    //   <button
    //     className="text-indigo-500 font-medium mt-2"
    //     onClick={() => setShowReplyForm(comment.id)}
    //   >
    //     Reply
    //   </button>
    //   {showReplyForm === comment.id && (
    //     <form className="mt-4" onSubmit={(e) => handleSubmit(e, comment.id)}>
    //       <div className="flex flex-wrap mb-4">
    //         <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
    //           <input
    //             type="text"
    //             placeholder="Name"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //             className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-indigo-500"
    //             required
    //           />
    //         </div>
    //         <div className="w-full md:w-1/2 px-3">
    //           <input
    //             type="email"
    //             placeholder="Email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-indigo-500"
    //             required
    //           />
    //         </div>
    //       </div>
    //       <textarea
    //         placeholder="Leave a reply..."
    //         value={comment}
    //         onChange={(e) => setComment(e.target.value)}
    //         className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-indigo-500"
    //         required
    //       ></textarea>
    //       <button
    //         type="submit"
    //         style={{backgroundColor: currentColor}}
    //         className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg mt-4"
    //       >
    //         Submit
    //       </button>
    //     </form>
    //   )}
    //   {childComments.length > 0 && (
    //     <div className="ml-8">
    //       {childComments.map((c) => renderComment(c))}
    //     </div>
    //   )}
    // </div>

    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a Reply</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="comment" placeholder="Comment" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Name" name="name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Email" name="email" />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input checked={storeData} onChange={(e) => setStoreData(e.target.value)} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
        </div>
      </div>
      {/* {error && <p className="text-xs text-red-500">All fields are mandatory</p>} */}
      <div className="mt-8">
        <button type="button"  className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Comment</button>
        {/* {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>} */}
      </div>
    </div>
  );
};

export default CommentSection;
