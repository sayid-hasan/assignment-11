import PropTypes from "prop-types";
const Comment = ({ commentObj }) => {
  const { comment, displayName, photoURL } = commentObj;
  return (
    <div>
      <div className="px-2 flex items-center my-5 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex flex-row items-center gap-2 space-y-4 md:space-y-0 md:space-x-2 md:flex-row">
          <img
            src={photoURL}
            alt=""
            className="self-center flex-shrink-0 w-14 h-14 md:w-20 md:h-20 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300"
          />
          <div className="flex flex-col gap-1 ">
            <h4 className="md:text-lg text-base font-semibold  text-center md:text-left">
              {displayName}
            </h4>
            <p className="dark:text-gray-600 text-sm md:text-base">{comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
Comment.propTypes = {
  commentObj: PropTypes.object,
};
export default Comment;
