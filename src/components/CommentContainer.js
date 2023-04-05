import React from "react";
import { user } from "../images";

const commentData = [
  {
    name: "Kishor",
    comment: "Lorem Ipsum is simply dummy text",
    reply: [
      {
        name: "Kishor",
        comment: "Lorem Ipsum is simply dummy text",
        reply: [
            { name: "Kishor", comment: "It is a long established fact that a reader will be distracted", reply: [
                { name: "Kishor", comment: "Lorem Ipsum is simply dummy text", reply: [
                    { name: "Kishor", comment: "Lorem Ipsum is simply dummy text reader will be distracted", reply: [] }
                ] }
            ] }
        ],
      },
    ],
  },
  { name: "Kishor", comment: "Lorem Ipsum is simply dummy text", reply: [
    { name: "Kishor", comment: "Lorem Ipsum is simply dummy text reader will be distracted", reply: [] }

  ] },
  { name: "Kishor", comment: "Lorem Ipsum is simply dummy text", reply: [] },
  { name: "Kishor", comment: "Lorem Ipsum is simply dummy text", reply: [] },
  { name: "Kishor", comment: "Lorem Ipsum is simply dummy text", reply: [] },
  {
    name: "Kishor",
    comment: "Lorem Ipsum is simply dummy text main",
    reply: [
      {
        name: "Kishor",
        comment: "Lorem Ipsum is simply dummy text",
        reply: [
          {
            name: "Kishor",
            comment: "Lorem Ipsum is simply dummy text",
            reply: [
              {
                name: "Kishor",
                comment: "Lorem Ipsum is simply dummy text",
                reply: [],
              },
            ],
          },
        ],
      },
      {
        name: "Kishor",
        comment: "Lorem Ipsum is simply dummy text",
        reply: [],
      },
    ],
  },
  { name: "Kishor", comment: "Lorem Ipsum is simply dummy text", reply: [] },
  { name: "Kishor", comment: "This is Kishor Gunjal", reply: [
    { name: "Kishor", comment: "Lorem Ipsum is simply dummy text reader will be distracted", reply: [] }

  ] },
];

const Comment = ({data})=>{

    const {name, comment, reply} = data;
    return(
        <div className="flex bg-gray-50 p-2 rounded-md m-5">
          <img src={user} alt={name} className="w-10 h-10"/>
          <div className="px-3 p-5">
            <p>{name}</p>
            <p>{comment}</p>
          </div>
        </div>
    )

}

const CommentList = ({comments}) => {
  return comments.map((comment) =>
     (
        <div className="comment">
            <Comment data={comment} />
            <div className="pl-5 border border-l-black-100 ml-5">
                <CommentList comments={comment.reply}/>
            </div>
        </div>
    )
  )
}

const CommentContainer = () => {
  return (
    <div className="mt-5 p-2">
       <h1 className="text-2xl font-bold">Comments:</h1>
       <CommentList comments={commentData}/>
    </div>
  )
};

export default CommentContainer;
