import React, { useState } from 'react';
import md5 from 'crypto-js/md5';
import { useStateContext } from '../../context/ContextProvider';

const CommentSection = ({ blog }) => {
  const { currentColor } = useStateContext();
  const [comments, setComments] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [storeData, setStoreData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { name, email, comment };
    setComments([...comments, newComment]);
    setName('');
    setEmail('');
    setComment('');
  };

  // const renderComment = (comment) => {
  //   const childComments = comments.filter(
  //     (c) => c.parentCommentId === comment.id
  //   );
  // }
  return (

    <div>
      {comments && comments.map((comment) => (
        <div key={comment.id} className="mb-4">
          <div className="flex items-center mb-2">
            <div className="flex-shrink-0">
              <img
                src={`https://www.gravatar.com/avatar/${md5(
                  comment.email.trim().toLowerCase()
                )}?s=60&d=mp`}
                alt="Gravatar"
                className="rounded-full w-10 h-10"
              />
            </div>
            <div className="ml-3">
              <div className="font-medium">{comment.name}</div>
              <div className="text-gray-600 text-sm">{comment.date}</div>
            </div>
          </div>
          <div className="text-gray-800">{comment.comment}</div>
        </div>
      ))}


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
          <button onClick={handleSubmit} type="button" className="transition duration-500 ease hover:bg-indigo-900 inline-block  text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer" style={{ backgroundColor: currentColor }}>Post Comment</button>
          {/* {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>} */}
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
