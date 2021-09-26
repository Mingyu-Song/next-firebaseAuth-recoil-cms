import Box from 'components/box/Box';
import { H6 } from 'components/text/Text';
import { colors } from 'lib/styles/theme';
import styled from 'styled-components';

export default function PostCard({
  author,
  createdAt,
  postTitle,
  postContent,
  ...props
}) {
  return (
    <PostCardBox p={3}>
      <div className="image-wrapper">
        <img src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg" />
      </div>
      <div className="dash" />
      <div className="info-wrapper">
        <H6>{postTitle}</H6>
        <span>{author}</span>
        {/* <p>{postContent}</p> */}
        <span>
          {typeof createdAt === 'object' ? createdAt.seconds : createdAt}
        </span>
      </div>
    </PostCardBox>
  );
}
const PostCardBox = styled(Box)`
  cursor: pointer;
  &:hover img {
    transform: scale(110%);
    transition: transform 0.2s ease-in-out;
  }
  .image-wrapper {
    position: relative;
    overflow: hidden;
    padding-bottom: 50%;
    border-radius: 16px;
    box-shadow: 0 50px 100px -30px ${colors.grey._300},
      0 30px 31px -25px ${colors.grey._500};
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
    }
  }
  .dash {
    margin: 32px 8px 16px;
    height: 1px;
    width: 40px;
    background-color: ${colors.black};
  }
  .info-wrapper {
    position: relative;
    padding: 8px;
    margin-top: 16px;
  }
`;
