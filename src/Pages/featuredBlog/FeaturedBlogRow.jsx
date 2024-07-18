import PropTypes from "prop-types";
import profile from "../../assets/Images/user.png";

const FeaturedBlogRow = ({ feturedRow, id }) => {
  const { blog_title, user_name, ownerImg } = feturedRow;

  return (
    <tbody className="border-b  border-[#454545] ">
      <tr className="">
        <td className="px-3 md:text-2xl text-base font-medium text-black ">
          {id}
        </td>
        <td className="px-3 py-2 md:text-base text-sm">
          <p>{blog_title}</p>
        </td>
        <td className="px-3 py-2 md:text-base text-sm">
          <span>{user_name}</span>
        </td>
        <td className="px-3 py-2 text-base hidden md:block">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={ownerImg || profile} />
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};
FeaturedBlogRow.propTypes = {
  feturedRow: PropTypes.object,
  id: PropTypes.number,
};

export default FeaturedBlogRow;
