import Box from 'components/box/Box';
import Text, { H6 } from 'components/text/Text';
import { colors } from 'lib/styles/theme';
import styled from 'styled-components';

export default function PostCard({
  createdAt,
  postTitle,
  postContent,
  displayName,
  photoURL,
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
        <div className="user">
          <img src={photoURL} />
          <Text as="span">{displayName}</Text>
        </div>
        <span>{new Date(createdAt).getDate()}</span>
      </div>
    </PostCardBox>
  );
}
const PostCardBox = styled(Box)`
  cursor: pointer;
  .image-wrapper {
    position: relative;
    overflow: hidden;
    padding-bottom: 50%;
    border-radius: 16px;
    box-shadow: 0 50px 100px -30px ${colors.grey._300},
      0 30px 31px -25px ${colors.grey._500};
    &:hover img {
      transform: scale(110%);
      transition: transform 0.2s ease-in-out;
    }
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
    margin: 32px 8px 8px;
    height: 1px;
    width: 60px;
    background-color: ${colors.black};
  }
  .info-wrapper {
    position: relative;
    padding: 8px;
    margin-top: 16px;
    .user {
      display: flex;
      align-items: center;
      img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
    }
  }
`;
