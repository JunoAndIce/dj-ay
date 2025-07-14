// components/BlogDetail.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BlogExpand = ({ post, onBack }) => {
    return (
        <div className="section">
            <button
                onClick={onBack}
                className="button mb-4"
            >
                <span className='icon'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </span>

                <p>Back to News</p>
            </button>

            <div className="mt-5">
                <h2 className="title is-1">{post.title}</h2>
                <p className="has-text-grey-light mb-2 subtitle is-6">{post.date}</p>

                <div className="content mt-15">
                    {post.content}
                </div>

            </div>
        </div>
    );
};

export default BlogExpand;
